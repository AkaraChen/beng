import type { Feature } from "./feature";

export const nodeResolve: Feature = async (options) => {
	options.plugins.push(require("@rollup/plugin-node-resolve")());
	return options;
};
