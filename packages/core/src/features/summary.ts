import type { Feature } from "./feature";

export const summury: Feature = async (options) => {
	const { default: summary } = await import("rollup-plugin-summary");
	options.plugins.push(summary({}));
	return options;
};
