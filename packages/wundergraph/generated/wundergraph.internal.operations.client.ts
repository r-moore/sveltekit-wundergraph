// Code generated by wunderctl. DO NOT EDIT.

import type { OperationsClientType } from "@wundergraph/sdk/server";
import type { OperationErrors } from "./ts-operation-errors";
import {
	CreatePostResponse,
	CreatePostInput,
	InternalCreatePostInput,
	InjectedCreatePostInput,
	CreatePostResponseData,
	DeletePostResponse,
	DeletePostInput,
	InternalDeletePostInput,
	InjectedDeletePostInput,
	DeletePostResponseData,
	ReadPostsResponse,
	ReadPostsResponseData,
} from "./models";

export interface Queries {
	ReadPosts: {
		input: never;
		response: { data?: ReadPostsResponse["data"]; errors?: Required<ReadPostsResponse>["errors"] };
	};
}

export interface Mutations {
	CreatePost: {
		input: InternalCreatePostInput;
		response: { data?: CreatePostResponse["data"]; errors?: Required<CreatePostResponse>["errors"] };
	};
	DeletePost: {
		input: InternalDeletePostInput;
		response: { data?: DeletePostResponse["data"]; errors?: Required<DeletePostResponse>["errors"] };
	};
}

export interface Subscriptions {}

export type InternalOperations = OperationsClientType<Queries, Mutations, Subscriptions>;
