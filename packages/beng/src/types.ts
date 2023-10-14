import { RollupOptions } from 'rollup';
import { ExtensionConfig } from './extension/config';
import { RollupTypescriptOptions } from '@rollup/plugin-typescript';
import { RollupCommonJSOptions } from '@rollup/plugin-commonjs';

export type BengConfig = {
	input?: string | string[];
	output?: RollupOptions['output'];
	plugins?: any[];
	typescript?: ExtensionConfig<RollupTypescriptOptions>;
	commonjs?: ExtensionConfig<RollupCommonJSOptions>;
};

export function defineConfig(config: BengConfig) {
	return config;
}
