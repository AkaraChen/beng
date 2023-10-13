import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';

export default defineConfig({
	input: './index.ts',
	output: {
		dir: './dist',
	},
	plugins: [
		typescript({
			tsconfig: './tsconfig.json',
		}),
		nodeResolve(),
	],
});
