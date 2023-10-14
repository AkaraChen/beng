import { BengConfig } from '@/types';
import slash from 'slash';
import path from 'path';
import fs from 'fs';
import consola from 'consola';

const wd = process.cwd();
export const configFilePath = slash(path.resolve(wd, 'beng.config.mjs'));

export function formatImportPath(path: string) {
	if (process.platform === 'win32') {
		return `file://${slash(path)}`;
	}
	return path;
}

export async function resolveBengConfig(): Promise<BengConfig> {
	if (!fs.existsSync(configFilePath)) {
		return {};
	}
	consola.info(`Using config file: ${configFilePath}`);
	const module = await import(formatImportPath(configFilePath));
	return module.default;
}
