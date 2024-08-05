import { typescript } from "./typescript";
import { entryDetect } from "./entry-detect";
import { commonjs } from "./commonjs";
import { nodeResolve } from "./node-resolve";
import { summury } from "./summary";
import type { Feature } from "./feature";

export const features: Feature[] = [
    entryDetect,
    typescript,
    commonjs,
    nodeResolve,
    summury,
];
