# @levakorg/prettier-config

Prettier config levakorg org's

### Setup

**1. Installation**

```
npm install --save-dev prettier @levakorg/prettier-config
```

or

```
yarn add --dev prettier @levakorg/prettier-config
```

**2. Configuration**

package.json

```JSON
{
  "prettier": "@levakorg/prettier-config"
}
```

.prettierrc | .prettierrc.json

```JSON
"@levakorg/prettier-config"
```

.prettierrc.js

```JS
module.exports = require("@levakorg/prettier-config")
```
```JS
export { default } from '@levakorg/prettier-config'
```

**3. Add scripts**

```JSON
{
  "format": "prettier --write \"./**/*.{md,html,css,json,cjs,mjs,js,ts,jsx,tsx,vue,svelte}\"",
}
```

**4. Using scripts**

```
npm run format
```

or

```
yarn format
```

### Notes

**[Config](https://github.com/levakorg/prettier-config/blob/master/.prettierrc.js)**
