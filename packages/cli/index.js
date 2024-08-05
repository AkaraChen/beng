import execa from "execa";

await execa("npx", [
	"--package",
	"@bengbu/core",
	"--package",
	"rollup",
	"--",
	"rollup -c node:@beng.core",
]);
