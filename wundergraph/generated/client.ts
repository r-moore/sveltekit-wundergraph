import {
	Client,
	ClientConfig,
	User,
	UploadRequestOptions,
	OperationMetadata,
	OperationsDefinition,
} from "@wundergraph/sdk/client";
import type {
	CreatePostResponse,
	CreatePostInput,
	CreatePostResponseData,
	DeletePostResponse,
	DeletePostInput,
	DeletePostResponseData,
	ReadPostsResponse,
	ReadPostsResponseData,
} from "./models";

export type UserRole = "admin" | "user";

export const WUNDERGRAPH_S3_ENABLED = false;
export const WUNDERGRAPH_AUTH_ENABLED = false;

export const defaultClientConfig: ClientConfig = {
	applicationHash: "f42cac2b",
	applicationPath: "app/main",
	baseURL: "http://localhost:9991",
	sdkVersion: "0.114.2",
};

const operationMetadata: OperationMetadata = {
	CreatePost: {
		requiresAuthentication: false,
	},
	DeletePost: {
		requiresAuthentication: false,
	},
	ReadPosts: {
		requiresAuthentication: false,
	},
};

type PrivateConfigProperties = "applicationHash" | "applicationPath" | "sdkVersion" | "operationMetadata";

export const createClient = (config?: Omit<ClientConfig, PrivateConfigProperties>) => {
	return new Client({
		...defaultClientConfig,
		...config,
		operationMetadata,
	});
};

export type Queries = {
	ReadPosts: {
		input?: undefined;
		data: ReadPostsResponseData;
		requiresAuthentication: false;
		liveQuery: true;
	};
};

export type Mutations = {
	CreatePost: {
		input: CreatePostInput;
		data: CreatePostResponseData;
		requiresAuthentication: false;
	};
	DeletePost: {
		input: DeletePostInput;
		data: DeletePostResponseData;
		requiresAuthentication: false;
	};
};

export type Subscriptions = {};

export type LiveQueries = {
	ReadPosts: {
		input?: undefined;
		data: ReadPostsResponseData;
		liveQuery: true;
		requiresAuthentication: false;
	};
};

export interface Operations extends OperationsDefinition<Queries, Mutations, Subscriptions, UserRole> {}
