import type { ModuleFormat, Plugin, RollupOptions } from "rollup";

export type Options = {
	input?: string;
	plugins: Plugin[];
	output: {
		dir: string;
		format?: ModuleFormat;
	};
	onwarn: RollupOptions["onwarn"];
};
