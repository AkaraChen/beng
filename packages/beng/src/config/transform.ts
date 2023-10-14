import { RollupOptions } from 'rollup';
import { BengConfig } from '..';
import path from 'path';
import { resolvePlugin } from '../extension';

const wd = process.cwd();

export async function toRollup(config: BengConfig): Promise<RollupOptions> {
	const {
		input = path.resolve(wd, 'index.ts'),
		output = {
			dir: 'dist',
			format: 'es',
		},
		plugins = [],
	} = config;
	return {
		input,
		output,
		plugins: [...plugins, ...(await resolvePlugin(config))],
	};
}
