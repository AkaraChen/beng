import type { Feature } from "./feature";

export const commonjs: Feature = async (options) => {
	options.plugins.push(require("@rollup/plugin-commonjs")());
	return options;
};
