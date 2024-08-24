import type { RollupOptions } from "rollup";
import { resolveContext } from "./context";
import { applyFeatures } from "./features/feature";
import { features } from "./features";

async function main(): Promise<RollupOptions | RollupOptions[]> {
	const context = await resolveContext();
	return applyFeatures(
		features,
		{
			plugins: [],
			output: {
				dir: "dist",
			},
			onwarn: () => {},
		},
		context,
	);
}

export default main();
