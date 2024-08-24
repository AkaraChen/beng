import { typescript } from "./typescript";
import { entryDetect } from "./entry-detect";
import { commonjs } from "./commonjs";
import { nodeResolve } from "./node-resolve";
import type { Feature } from "./feature";
import { format } from "./format";
import { strip } from "./strip";
import { json } from "./json";
import { swc } from "./swc";
import { babel } from "./babel";
import { formatDirective } from "./format-directive";

export const features: Feature[] = [
	entryDetect,
	formatDirective,
	format,
	typescript,
	commonjs,
	nodeResolve,
	strip,
	json,
	swc,
	babel,
];
