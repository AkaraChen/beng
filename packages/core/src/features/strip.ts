import type { Feature } from "./feature";

export const strip: Feature = async (options) => {
	const { default: strip } = await import("@rollup/plugin-strip");
	options.plugins.push(strip());
	return options;
};
