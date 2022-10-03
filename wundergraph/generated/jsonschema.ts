// Code generated by wunderctl. DO NOT EDIT.

// @ts-ignore: no-types available
import { JSONSchema7 } from "json-schema";

interface Schema {
	ReadPosts: {
		input: JSONSchema7;
		response: JSONSchema7;
	};
}

const jsonSchema: Schema = {
	ReadPosts: {
		input: { type: "object", properties: {}, additionalProperties: false, definitions: {} },
		response: {
			type: "object",
			properties: {
				data: {
					type: "object",
					properties: {
						db_findManyPost: {
							type: "array",
							items: {
								type: "object",
								properties: {
									id: { type: "integer" },
									User: {
										type: "object",
										properties: { username: { type: "string" } },
										additionalProperties: false,
										required: ["username"],
									},
									body: { type: "string" },
									created_at: { type: "string" },
								},
								additionalProperties: false,
								required: ["id", "User", "body", "created_at"],
							},
						},
					},
					additionalProperties: false,
					required: ["db_findManyPost"],
				},
			},
			additionalProperties: false,
		},
	},
};
export default jsonSchema;