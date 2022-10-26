# @levakorg/prettier-config

Prettier config levakorg org's

### Setup

**1. Installation**

```
npm install --save-dev @levakorg/prettier-config
```

or

```
yarn add --dev @levakorg/prettier-config
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
module.exports = {
  ...require('@levakorg/prettier-config')
}
```

**3. Add scripts**

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

### Notes

**[Config](https://github.com/levakorg/prettier-config/blob/master/.prettierrc.js)**
