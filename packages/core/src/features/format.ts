import type { Feature } from "./feature";

export const format: Feature = async (options, context) => {
	const packageJson = JSON.parse(await context.utils.file("package.json"));
	if (packageJson.type === "commonjs") {
        options.output.format = "commonjs";
	} else {
		options.output.format = "esm";
	}
	return options;
};
