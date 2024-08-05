import type { Plugin, RollupOptions } from "rollup";

export type Options = {
	input: string[];
	plugins: Plugin[];
	output: RollupOptions["output"];
};
