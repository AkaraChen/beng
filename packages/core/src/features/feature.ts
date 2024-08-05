import type { Context } from "../context";
import type { Options } from "../option";

export type Feature = (
	options: Options,
	context: Context,
) => PromiseLike<Options>;

export async function applyFeatures(
	features: Feature[],
	config: Options,
	context: Context,
): Promise<Options | Options[]> {
	let result = config;
	for (const feature of features) {
		result = await feature(result, context);
	}
	return result;
}
