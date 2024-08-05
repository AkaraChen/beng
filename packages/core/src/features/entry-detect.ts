import type { Feature } from "./feature";

export const entryDetect: Feature = async (options, context) => {
	const entries: string[] = [];
	const files = ["index.js", "src/index.js", "index.ts", "src/index.ts"];
	for (const file of files) {
		if (await context.utils.exists(file)) {
			entries.push(file);
		}
	}
	options.input = entries;
	return options;
};
