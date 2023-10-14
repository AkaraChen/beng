export interface IExtension<T> {
	name: string;
	options: T;
}

export type ExtensionConfig<T> = boolean | T;

export function defineExtensionConfig<T>(
	options: ExtensionConfig<T>,
	defaultOptions: T,
): T {
	if (typeof options === 'boolean') {
		console.log('options is boolean', defaultOptions);
		return defaultOptions;
	}
	return options;
}

export function defineExtensionCreater<T>(name: string, defaultOptions: T) {
	return function createExtension(options: ExtensionConfig<T>) {
		if (!options) return undefined;
		return {
			name,
			options: defineExtensionConfig(options, defaultOptions),
		};
	};
}

export async function createRollupPlugin<T>(plugin: IExtension<T>) {
	const { name, options } = plugin;
	const pluginModule = await import(name);
	return pluginModule.default(options);
}
