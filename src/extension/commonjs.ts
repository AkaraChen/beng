import { IExtension, ExtensionConfig, defineExtensionConfig } from './config';
import type { RollupCommonJSOptions } from '@rollup/plugin-commonjs';

export function defineCommonjsExtension(
	options: ExtensionConfig<RollupCommonJSOptions>,
): IExtension<RollupCommonJSOptions> {
	const defaultOptions: RollupCommonJSOptions = {};
	return {
		name: '@rollup/plugin-commonjs',
		options: defineExtensionConfig(options, defaultOptions),
	};
}
