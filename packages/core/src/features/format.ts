import type { Feature } from "./feature";

export const format: Feature = async (options, context) => {
	const json = await context.utils.json("package.json");
	if (json.type === "commonjs") {
		options.output.format = "commonjs";
	} else {
		options.output.format = "esm";
	}
	return options;
};
