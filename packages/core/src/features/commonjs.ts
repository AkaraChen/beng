import type { Feature } from "./feature";

export const commonjs: Feature = async (options) => {
	const { default: commonjs } = await import("@rollup/plugin-commonjs");
	options.plugins.push(commonjs());
	return options;
};
