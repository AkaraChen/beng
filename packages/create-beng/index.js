#!/usr/bin/env node

import path from 'path';
import fs from 'fs';
import { getPackageManager } from 'pm-user-agent';
import { consola } from 'consola';
import { $ } from 'execa';

const wd = process.cwd();
const configFilePath = path.join(wd, 'beng.config.mjs');

async function main() {
	const packageManager = getPackageManager();
	if (fs.existsSync(configFilePath)) {
		consola.error(`beng.config.mjs already exists in ${wd}`);
		return;
	}
	const template = `
    import { defineConfig } from '@akrc/beng';

    export default defineConfig({});
`;
	fs.writeFileSync(configFilePath, template);
	consola.success(`beng.config.mjs created in ${wd}`);

	consola.info(`Installing @akrc/beng`);
	await $`${packageManager} add @akrc/beng`;
	consola.success(`@akrc/beng installed`);

	consola.success(
		'Setup complete! Now you can use beng to build your project.',
	);
}

main();
