import { execa } from "execa";

await execa({ preferLocal: true })`rollup -c node:@bengbu/core`;
