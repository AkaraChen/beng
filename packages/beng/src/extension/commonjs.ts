import type { RollupCommonJSOptions } from "@rollup/plugin-commonjs";
import { IExtension } from "./config";

export const commonjs: IExtension<RollupCommonJSOptions> = {
	name: "commonjs",
	resolveDefaults: () => ({}),
	importer: () => import("@rollup/plugin-commonjs"),
};
