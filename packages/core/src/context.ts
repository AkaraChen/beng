import fsp from "fs/promises";
import path from "path";

export class FeatureUtils {
    constructor(public pwd: string) {}

    resolve(filePath: string) {
        return path.resolve(this.pwd, filePath);
    }

    async exists(filePath: string) {
        const stat = await fsp.stat(this.resolve(filePath));
        return stat.isFile();
    }

    async file(filePath: string) {
        return await fsp.readFile(this.resolve(filePath), "utf-8");
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
