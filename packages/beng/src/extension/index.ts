import { BengConfig } from "@/types";
import { commonjs } from "./commonjs";
import { typescript } from "./typescript";
import { IExtension, applyExtension } from "./config";

export async function resolvePlugin(config: BengConfig) {
	const plugins = [];
	function addPlugin(extension: IExtension<any>) {
		const plugin = applyExtension(
			extension,
			{ cwd: process.cwd(), isDev: true },
			true,
		);
		plugins.push(plugin);
	}
	if (config.typescript) {
		addPlugin(typescript);
	}
	if (config.commonjs) {
		addPlugin(commonjs);
	}
	return plugins;
}
