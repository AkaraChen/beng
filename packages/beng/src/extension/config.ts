export interface IExtension<T> {
	name: string;
	options: T;
}

export type ExtensionConfig<T> = boolean | T;

export const defineExtensionConfig = <T>(
	options: ExtensionConfig<T>,
	defaultOptions: T,
): T => {
	if (typeof options === 'boolean') {
		return defaultOptions;
	}
	return options;
};

export async function createRollupPlugin<T>(plugin: IExtension<T>) {
	const { name, options } = plugin;
	const pluginModule = await import(name);
	return pluginModule.default(options);
}
