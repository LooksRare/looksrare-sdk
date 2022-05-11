# @looksrare/sdk

![GitHub package.json version](https://img.shields.io/github/package-json/v/LooksRare/looksrare-sdk) ![GitHub](https://img.shields.io/github/license/LooksRare/looksrare-sdk) ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/LooksRare/looksrare-sdk/Build)

This SDK is a collection of tools used to interact with the LooksRare API and smart contracts.

## Usage

### Install

This package has a peer dependency on [etherjs](https://docs.ethers.io/v5/).

Install with

```bash
yarn add @looksrare/sdk ethers
```

or

```bash
npm install @looksrare/sdk ethers --save
```

### Documentation

Read the [complete documentation](./doc/index.md)

## Dev

### Setup

Install dependencies with `yarn`

- **Dev**: `yarn dev`
- **Build**: `yarn build`

### Release

- Create a [Personal access token](https://github.com/settings/tokens/new?scopes=repo&description=release-it) (Don't change the default scope)
- Create an `.env` (copy `.env.template`) and set you github personal access token.
- `yarn release` will run all the checks, build, and publish the package, and publish the github release note.
