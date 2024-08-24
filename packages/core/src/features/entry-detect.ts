import type { Feature } from "./feature";
import tryFile from "try-files";

export const entryDetect: Feature = async (options, context) => {
	const files = ["index.js", "src/index.js", "index.ts", "src/index.ts"];
	const entry = tryFile(files, { root: context.pwd, absolute: false });
	if (entry === null) {
		throw new Error(
			`Entry file not found, please consider adding one of the following files: ${files.join(", ")}`,
		);
	}
	options.input = entry;
	return options;
};
