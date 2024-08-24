import type { Feature } from "./feature";

export const formatDirective: Feature = async (options, context) => {
	if (options.input) {
		const source = await context.utils.file(options.input);
		const firstLine = source.split("\n")[0];
		if (firstLine) {
			// match if first line is "use cjs" or "use esm"
			const regex = /use\s+(cjs|esm)/;
			const match = firstLine.match(regex);
			if (match) {
				const format = match[1];
				if (format === "cjs") {
					options.output.format = "commonjs";
				} else {
					options.output.format = "esm";
				}
				const onwarn = options.onwarn;
				options.onwarn = (warning, defaultHandler) => {
					if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
						return;
					}
					onwarn?.(warning, defaultHandler);
				};
			}
		}
	}
	return options;
};
