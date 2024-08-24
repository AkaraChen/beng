import { ensureDependencyInstalled } from "nypm";
import { updatePackage } from "write-package";

await ensureDependencyInstalled("@bengbu/core", { dev: true });
await ensureDependencyInstalled("@bengbu/zhule", { dev: true });
await ensureDependencyInstalled("rollup", { dev: true });

await updatePackage({
	scripts: {
		build: "beng",
	},
});
