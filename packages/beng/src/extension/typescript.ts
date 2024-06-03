import type { RollupTypescriptOptions } from "@rollup/plugin-typescript";
import { IExtension } from "./config";
import path from "path";
import { existsSync } from "fs";

export const typescript: IExtension<RollupTypescriptOptions> = {
	name: "typescript",
	resolveDefaults: (ctx) => {
		const { cwd } = ctx;
		const tsconfig = path.join(cwd, "tsconfig.json");
		if (existsSync(tsconfig)) {
			return {
				tsconfig,
				outDir: path.join(cwd, "dist"),
				declaration: true,
			};
		}
		return {};
	},
	importer: () => import("@rollup/plugin-typescript"),
};
