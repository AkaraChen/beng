import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import nodeResolve from "@rollup/plugin-node-resolve";
import packageJson from "./package.json" with { type: "json" };

const { dependencies = {} } = packageJson;
const external = Object.keys(dependencies).map(
	(item) => new RegExp(`^${item}`),
);

export default defineConfig([
	{
		input: "./src/index.ts",
		output: {
			dir: "./dist",
		},
		plugins: [typescript(), nodeResolve()],
	},
	{
		input: "./src/scripts/bundle.ts",
		output: {
			file: "./bin/bundle.js",
		},
		plugins: [
			typescript({
				declaration: false,
			}),
			nodeResolve(),
		],
		external,
	},
]);
