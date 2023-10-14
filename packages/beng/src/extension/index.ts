import { BengConfig } from '@/types';
import { defineTypeScriptExtension } from './typescript';
import { defineCommonjsExtension } from './commonjs';
import { IExtension, createRollupPlugin } from './config';

export async function resolvePlugin(config: BengConfig) {
	const { typescript = true, commonjs } = config;
	const plugins = [];
	function applyExtension(extension: IExtension<any>) {
		plugins.push(createRollupPlugin(extension));
	}
	if (typescript) {
		applyExtension(defineTypeScriptExtension(typescript));
	}
	if (commonjs) {
		applyExtension(defineCommonjsExtension(commonjs));
	}
	return plugins;
}
