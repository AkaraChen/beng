import type { Feature } from "./feature";

export const nodeResolve: Feature = async (options) => {
	const { nodeResolve } = await import("@rollup/plugin-node-resolve");
	options.plugins.push(nodeResolve({}));
	return options;
};
