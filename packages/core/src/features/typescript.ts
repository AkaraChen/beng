import type { Feature } from "./feature";
import type ts from "@rollup/plugin-typescript";

export const typescript: Feature = async (options, context) => {
	const tsconfig = await context.utils.file("tsconfig.json");
	const hasTsEntry = options.input.some((input) => input.endsWith(".ts"));
	if (tsconfig && hasTsEntry) {
		const plugin = require("@rollup/plugin-typescript") as typeof ts;
		options.plugins.push(
			plugin({
				declaration: true,
			}),
		);
	}
	return options;
};
