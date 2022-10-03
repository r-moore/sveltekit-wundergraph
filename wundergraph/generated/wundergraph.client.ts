import type { ReadPostsResponse } from "./models";
import type { RequestOptions, UserListener, Response } from "@wundergraph/sdk";
import type { User, Role } from "./wundergraph.server";
import {
	Client as WunderGraphClient,
	ClientConfig,
	UploadRequestOptions,
	ClientResponse as Result,
	LogoutOptions,
} from "@wundergraph/sdk/client";
export const WUNDERGRAPH_S3_ENABLED = false;
export const WUNDERGRAPH_AUTH_ENABLED = false;

export class Client {
	constructor(config: Partial<ClientConfig> = {}) {
		const { baseURL = "http://localhost:9991", ...rest } = config;

		this._client = new WunderGraphClient({
			baseURL,
			applicationHash: "73a02582",
			applicationPath: "app/main",
			sdkVersion: "0.114.2",
			...rest,
		});
		this.user = null;
	}
	private _client: WunderGraphClient;
	private logoutCallback: undefined | (() => void);
	public setLogoutCallback(cb: () => void) {
		this.logoutCallback = cb;
	}
	private user: User | null;
	private userListener: UserListener<User> | undefined;
	public setUserListener = (listener: UserListener<User>) => {
		this.userListener = listener;
	};
	private setUser = (user: User | null) => {
		if (
			(user === null && this.user !== null) ||
			(user !== null && this.user === null) ||
			JSON.stringify(user) !== JSON.stringify(this.user)
		) {
			this.user = user;
			if (this.userListener !== undefined) {
				this.userListener(this.user);
			}
		}
	};
	private resultToResponse = <TResponse>(result: Result<any>): Response<TResponse> => {
		if (result.error) {
			return {
				status: "error",
				message: result.error.message,
			};
		}

		return {
			status: "ok",
			body: {
				data: result.data,
			},
		} as Response<any>;
	};
	public query = {
		ReadPosts: async (options: RequestOptions<never, ReadPostsResponse>) => {
			const result = await this._client.query({
				operationName: "ReadPosts",
				input: options.input,
				abortSignal: options.abortSignal,
			});
			return this.resultToResponse<ReadPostsResponse>(result);
		},
	};

	public liveQuery = {
		ReadPosts: (
			options: RequestOptions<never, ReadPostsResponse>,
			cb: (response: Response<ReadPostsResponse>) => void
		) => {
			return this._client.subscribe(
				{
					operationName: "ReadPosts",
					isLiveQuery: true,
					input: options.input,
					abortSignal: options.abortSignal,
				},
				(result) => cb(this.resultToResponse<ReadPostsResponse>(result))
			);
		},
	};

	public fetchUser = async (revalidate?: boolean): Promise<User | null> => {
		try {
			const user = await this._client.fetchUser<User>({
				revalidate,
			});
			if (user) {
				this.setUser(user);
				return this.user;
			}
		} catch {}
		this.setUser(null);
		return null;
	};
}
