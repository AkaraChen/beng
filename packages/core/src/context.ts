import fsp from "fs/promises";
import fs from "fs";
import path from "path";

export class FeatureUtils {
	constructor(public pwd: string) {}

	resolve(filePath: string) {
		return path.resolve(this.pwd, filePath);
	}

	async exists(filePath: string) {
		return fs.existsSync(this.resolve(filePath));
	}

	async file(filePath: string) {
		return await fsp.readFile(this.resolve(filePath), "utf-8");
	}

	async json(filePath: string) {
		return JSON.parse(await this.file(filePath));
	}
}

export interface Context {
	pwd: string;
	utils: FeatureUtils;
}

export async function resolveContext(): Promise<Context> {
	const pwd = process.cwd();
	return {
		pwd,
		utils: new FeatureUtils(pwd),
	};
}
