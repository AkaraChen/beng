import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';

export default defineConfig([
	{
		input: './index.ts',
		output: {
			dir: './dist',
		},
		plugins: [
			typescript(),
			nodeResolve(),
		],
	},
    {
        input: './src/scripts/bundle.ts',
        output: {
            file: './bin/bundle.js',
        },
        plugins: [
            typescript({

            }),
            nodeResolve()
        ],
        external: [/rollup/]
    },
]);
