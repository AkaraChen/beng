import type { Feature } from "./feature";
import tryFile from "try-files";

export const babel: Feature = async (options, context) => {
	const babelrc = tryFile(
		[
			".babelrc",
			".babelrc.json",
			".babelrc.js",
			"babel.config.json",
			"babel.config.js",
		],
		{ root: context.pwd },
	);
	if (babelrc) {
		const { default: babel } = await import("@rollup/plugin-babel");
		options.plugins.push(
			babel({
				babelHelpers: "runtime",
			}),
		);
	}
	return options;
};
