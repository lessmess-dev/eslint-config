# @lessmess/eslint-config

Shared eslint config for Lessmess projects

## Usage

### For ES5 libs

Install peer dependencies via npx (npm 5+)
```bash
npx install-peerdeps --dev @lessmess/eslint-config
```
or
```bash
yarn add --dev @lessmess/eslint-config eslint-config-standard eslint-plugin-promise eslint-plugin-node eslint-plugin-es5 eslint-plugin-standard eslint-plugin-security eslint-plugin-import eslint-plugin-import-helpers eslint
```
Modify your .eslintrc:

```json
{
  "extends": "@lessmess/eslint-config/lib"
}
```
### For React Hooks

Install:
```bash
yarn add --dev @lessmess/eslint-config eslint-plugin-react-hooks
```
Modify your .eslintrc:

```json
{
  "extends": "@lessmess/eslint-config/react-hooks"
}
```

