import type { Feature } from "./feature";

export const typescript: Feature = async (options, context) => {
	const hasTsconfig = await context.utils.exists("tsconfig.json");
	const hasTsEntry = options.input!.endsWith(".ts");
	if (hasTsconfig && hasTsEntry) {
		const { default: ts } = await import("@rollup/plugin-typescript");
		options.plugins.push(
			ts({
				declaration: true,
				outDir: options.output.dir,
				declarationDir: options.output.dir,
			}),
		);
	}
	return options;
};
