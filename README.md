# @looksrare/sdk

![GitHub package.json version](https://img.shields.io/github/package-json/v/LooksRare/looksrare-sdk) ![GitHub](https://img.shields.io/github/license/LooksRare/looksrare-sdk) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/LooksRare/looksrare-sdk/Build)

Configs, types, and functions used to interact with Looksrare.

## How to use

### Install

The package is hosted on [NPM](https://www.npmjs.com/package/@looksrare/sdk).
Install with

```
yarn add @looksrare/sdk
```

### Documentation

#### Constants

Contains core constants like contract addresses, and supported chains data.
If you think some data are missing, you can [request an update](https://github.com/LooksRare/looksrare-sdk/issues/new?assignees=&labels=&template=feature_request.md&title=).

#### ABIs

Contains abis used to interact with Looksrare contracts.
If you need other abis, you can [open an issue](https://github.com/LooksRare/looksrare-sdk/issues/new?assignees=&labels=&template=feature_request.md&title=).

#### EIP 712

Helpers used to build the signed typed data.

## Dev

Install dependencies with `yarn`

- **Dev**: `yarn dev`
- **Build**: `yarn build`

## Release

- Create a [Personal access token](https://github.com/settings/tokens/new?scopes=repo&description=release-it) (Don't change the default scope)
- Create an `.env` (copy `.env.template`) and set you github personal access token.
- `yarn release` will run all the checks, build, and publish the package, and publish the github release note.
