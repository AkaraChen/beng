import type { Feature } from "./feature";

export const swc: Feature = async (options, context) => {
	if (await context.utils.exists(".swcrc")) {
		const { default: swc } = await import("@rollup/plugin-swc");
		options.plugins.push(
			swc({
				swc: await context.utils.json(".swcrc"),
			}),
		);
	}
	return options;
};
