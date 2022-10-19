# @levakorg/prettier-config

Default prettier config **levakorg** company

## Setup

**1. Installation**

```
npm install --save-dev @levakorg/prettier-config
```

or

```
yarn add --dev @levakorg/prettier-config
```

**2. Configuration `prettier`**

package.json

```
{
  "prettier": "@levakorg/prettier-config"
}
```

.prettierrc.js

```
module.exports = {
  ...require('@levakorg/prettier-config')
}
```

**3. Add scripts to local `package.json`**

```
"prettier": "prettier check ."
"prettier:fix": "prettier --write ."
```

**4. Using scripts**

```
npm run prettier
```

```
npm run prettier:fix
```

or

```
yarn prettier
```

```
yarn prettier:fix
```

## About

**1. Used dependencies**

- [@trivago/prettier-plugin-sort-imports](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports)
- [prettier](https://www.npmjs.com/package/prettier)

## [Config](https://github.com/levakorg/prettier-config/blob/master/.prettierrc.js)
