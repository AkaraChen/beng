import { BengConfig } from '@/types';
import slash from 'slash';
import path from 'path';
import fs from 'fs';
import consola from 'consola';

const wd = process.cwd();
export const configFilePath = slash(path.resolve(wd, 'beng.config.mjs'));

export async function resolveBengConfig(): Promise<BengConfig> {
	if (!fs.existsSync(configFilePath)) {
		return {};
	}
	consola.info(`Using config file: ${configFilePath}`);
	const module = await import(configFilePath);
	return module.default;
}
