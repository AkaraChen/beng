import slash from 'slash';
import path from 'path';
import fs from 'fs';
import consola from 'consola';
import * as rollup from 'rollup';
import * as R from 'ramda';

const wd$1 = process.cwd();
const configFilePath = slash(path.resolve(wd$1, 'beng.config.mjs'));
async function resolveBengConfig() {
    if (!fs.existsSync(configFilePath)) {
        return {};
    }
    consola.info(`Using config file: ${configFilePath}`);
    const module = await import(configFilePath);
    return module.default;
}

const arrayOf = (value) => R.of(Array, value);
const toArray = (value) => R.ifElse(R.is(Array), R.identity, arrayOf)(value);

const defineExtensionConfig = (options, defaultOptions) => {
    if (typeof options === 'boolean') {
        return defaultOptions;
    }
    return options;
};

function defineTypeScriptExtension(options) {
    const defaultOptions = {};
    return {
        name: '@rollup/plugin-typescript',
        options: defineExtensionConfig(options, defaultOptions),
    };
}

function defineCommonjsExtension(options) {
    const defaultOptions = {};
    return {
        name: '@rollup/plugin-commonjs',
        options: defineExtensionConfig(options, defaultOptions),
    };
}

async function resolvePlugin(config) {
    const { typescript = true, commonjs } = config;
    const plugins = [];
    if (typescript) {
        plugins.push(defineTypeScriptExtension(typescript));
    }
    if (commonjs) {
        plugins.push(defineCommonjsExtension(commonjs));
    }
    return plugins;
}

const wd = process.cwd();
async function toRollup(config) {
    const { input = path.resolve(wd, 'index.ts'), output = {
        dir: 'dist',
        format: 'es',
    }, plugins = [], } = config;
    return {
        input,
        output,
        plugins: [...plugins, ...(await resolvePlugin(config))],
    };
}

async function main() {
    const config = await resolveBengConfig();
    const rollupConfig = await toRollup(config);
    const bundle = await rollup.rollup(rollupConfig);
    for (const o of toArray(rollupConfig.output)) {
        const result = await bundle.write(o);
        for (const chunk of result.output) {
            consola.info(`Wrote ${chunk.fileName}`);
        }
    }
}
main();
