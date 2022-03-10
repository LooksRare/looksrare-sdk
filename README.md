# @looksrare/sdk

Configs, types, and functions used to interact with Looksrare.

## Dev

- **Dev**: `yarn dev`
- **Build**: `yarn build`

## Release

- Create a [Personal access token](https://github.com/settings/tokens/new?scopes=repo&description=release-it) (Don't change the defautl scope)
- Create an `.env` (copy `.env.template`) and set you github personal access token.
- `yarn release` will run all the checks, build, and publish the package, and publish the github release note.
