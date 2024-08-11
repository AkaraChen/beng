import type { Feature } from "./feature";

export const json: Feature = async (options) => {
	const { default: json } = await import("@rollup/plugin-json");
	options.plugins.push(json());
	return options;
};
