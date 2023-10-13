import { IExtension, ExtensionConfig, defineExtensionConfig } from './config';
import type { RollupTypescriptOptions } from '@rollup/plugin-typescript';

export function defineTypeScriptExtension(
	options: ExtensionConfig<RollupTypescriptOptions>,
): IExtension<RollupTypescriptOptions> {
	const defaultOptions: RollupTypescriptOptions = {};
	return {
		name: '@rollup/plugin-typescript',
		options: defineExtensionConfig(options, defaultOptions),
	};
}
