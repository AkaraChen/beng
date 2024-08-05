import { execa } from "execa";
import { ensureDependencyInstalled, detectPackageManager } from "nypm";

await ensureDependencyInstalled("@bengbu/core");
await ensureDependencyInstalled("rollup");
await ensureDependencyInstalled("@bengbu/zhule");

let manager = await detectPackageManager(process.cwd()).then((m) => m.name);
if (manager === undefined) {
	manager = "npm";
}

switch (manager) {
	case "npm": {
		await execa("npx", ["rollup", "-c", "node:@bengbu/core"]);
		break;
	}
	case "pnpm": {
		await execa("pnpm", ["rollup", "-c", "node:@bengbu/core"]);
		break;
	}
	case "yarn": {
		await execa("yarn", ["rollup", "-c", "node:@bengbu/core"]);
		break;
	}
	default: {
		throw new Error(`Unsupported package manager: ${manager}`);
	}
}
