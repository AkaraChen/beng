import type { RollupOptions } from "rollup";
import { resolveContext } from "./context";
import { applyFeatures } from "./features/feature";
import { features } from "./features";

async function main(): Promise<RollupOptions> {
	const context = await resolveContext();
	return applyFeatures(
		features,
		{
			plugins: [],
			input: [],
			output: {
				dir: "dist",
			},
		},
		context,
	);
}

export default main();
