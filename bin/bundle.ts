#!/usr/bin/env tsx

import { resolveBengConfig } from '@/config';
import * as rollup from 'rollup';
import { toArray } from '@/utils/array';
import consola from 'consola';
import { toRollup } from '@/config/transform';

async function main() {
	const config = await resolveBengConfig();
	const rollupConfig = await toRollup(config);
	const bundle = await rollup.rollup(rollupConfig);
	for (const o of toArray(rollupConfig.output)) {
		const result = await bundle.write(o);
		for (const chunk of result.output) {
			consola.info(`Wrote ${chunk.fileName}`);
		}
	}
}

main();
