import { defineExtensionCreater } from './config';
import type { RollupCommonJSOptions } from '@rollup/plugin-commonjs';

export const defineCommonjsExtension =
	defineExtensionCreater<RollupCommonJSOptions>('@rollup/plugin-commonjs', {});
