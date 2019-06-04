# eslint-config-lessmess

[![npm version](https://img.shields.io/npm/v/eslint-config-lessmess.svg)](https://www.npmjs.com/package/eslint-config-lessmess)

Shared eslint config for Lessmess projects

## Usage

### For ES5 libs

Install peer dependencies via npx (npm 5+)
```bash
npx install-peerdeps --dev eslint-config-lessmess
```
or
```bash
yarn add --dev eslint-config-lessmess eslint-config-standard eslint-plugin-promise eslint-plugin-node eslint-plugin-es5 eslint-plugin-standard eslint-plugin-security eslint-plugin-import eslint-plugin-import-helpers eslint
```
Modify your .eslintrc:

```json
{
  "extends": "lessmess/lib"
}
```
### For React Hooks

Install:
```bash
yarn add --dev eslint-config-lessmess eslint-plugin-react-hooks
```
Modify your .eslintrc:

```json
{
  "extends": "lessmess/react-hooks"
}
```

