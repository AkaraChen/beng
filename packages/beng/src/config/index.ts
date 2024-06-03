import { BengConfig } from "@/types";
import { loadConfig } from "c12";

const cwd = process.cwd();

export async function resolveBengConfig(): Promise<BengConfig> {
	const resolved = await loadConfig<BengConfig>({
		configFile: "beng.config",
		rcFile: ".bengrc",
		dotenv: true,
		packageJson: true,
		defaultConfig: {
			typescript: {},
			commonjs: {},
		},
		extend: {
			extendKey: "extends",
		},
		cwd,
	});
	return resolved.config;
}
