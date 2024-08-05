import type { Feature } from "./feature";

export const summury: Feature = async (options) => {
    options.plugins.push(require("rollup-plugin-summary")());
    return options;
};
