import { Plugin } from "rollup";
import { defu } from "defu";

export interface IContext {
	cwd: string;
	isDev: boolean;
}

export type ExtensionConfig<T> = T | boolean;

export interface IExtension<T> {
	name: string;
	resolveDefaults: (context: IContext) => T;
	importer?: () => Promise<any>;
}

export async function applyExtension<T>(
	extension: IExtension<T>,
	context: IContext,
	userConfig: T,
): Promise<Plugin> {
	const defaults = extension.resolveDefaults(context);
	const config =
		typeof userConfig === "boolean" ? defaults : defu(userConfig, defaults);
	const module = await extension.importer();
	return module.default(config);
}
