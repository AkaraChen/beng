import { defineExtensionCreater } from './config';
import type { RollupTypescriptOptions } from '@rollup/plugin-typescript';

export const defineTypeScriptExtension =
	defineExtensionCreater<RollupTypescriptOptions>('@rollup/plugin-typescript', {
		declaration: true,
		outDir: './dist',
	});
