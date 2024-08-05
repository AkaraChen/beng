import type { ModuleFormat, Plugin } from "rollup";

export type Options = {
	input?: string;
	plugins: Plugin[];
	output: {
		dir: string;
		format?: ModuleFormat;
	};
};
