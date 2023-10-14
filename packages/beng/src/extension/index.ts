import { BengConfig } from '@/types';
import { defineTypeScriptExtension } from './typescript';
import { defineCommonjsExtension } from './commonjs';

export async function resolvePlugin(config: BengConfig) {
	const { typescript = true, commonjs } = config;
	const plugins = [];
	if (typescript) {
		plugins.push(defineTypeScriptExtension(typescript));
	}
	if (commonjs) {
		plugins.push(defineCommonjsExtension(commonjs));
	}
	return plugins;
}
