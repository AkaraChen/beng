import type { Feature } from "./feature";

export const entryDetect: Feature = async (options, context) => {
	let entry: string = "";
	const files = ["index.js", "src/index.js", "index.ts", "src/index.ts"];
	for (const file of files) {
		if (await context.utils.exists(file)) {
			entry = file;
			break;
		}
	}
	if (entry === "") {
		throw new Error(
			"Entry file not found, please consider adding one of the following files: index.js, src/index.js, index.ts, src/index.ts",
		);
	}
	options.input = entry;
	return options;
};
