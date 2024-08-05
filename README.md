# Beng

<div align="center">
    <img src="./assets/beng.svg" />
</div>

A preset for rollup.

## Motivation

I'm tired of configuring rollup for every project. So I made this preset.

## Usage

In your package root:

```shell
pnpx @bengbu/zhule
```

It will bundle your code into `dist/index.js`, and init the dependencies in `package.json`.

And if you want to bundle for next time, just run:

```shell
pnpm beng
```
