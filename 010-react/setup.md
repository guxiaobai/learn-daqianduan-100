## Setup

### Bugs

[Error: Cannot find module 'loader-utils' - @html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/issues/1625#issuecomment-792588914)

```
state: pending
time: Mon Mar  8 20:53:32 CST 2021
fixed: npm install --save-dev loader-utils
```

### 1 - Basic

```bash
npm install --save-dev webpack webpack-cli \
		webpack-dev-server webpack-merge webpackbar cross-env\
		html-webpack-plugin
```

npm - scripts

```json
"scripts": {
	"build": "cross-env NODE_ENV=production webpack --config webpack.prod.js",
	"start": "webpack serve --config webpack.dev.js"
}
```

### 2 - Babel

```bash
npm install --save-dev babel-loader @babel/core @babel/preset-env
npm install --save core-js regenerator-runtime
```


### 3 - Css

```bash
npm install --save-dev css-loader style-loader \
			mini-css-extract-plugin css-minimizer-webpack-plugin
```

### 4 - React

```bash
npm install --save-dev react react-dom @babel/preset-react
```
