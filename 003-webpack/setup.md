## Setup

### Bugs

* [x][Error: Cannot find module 'loader-utils' - @html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin/issues/1625#issuecomment-792588914)
* [ ] [Upgrade to chokidar 3 to support the Node v14 release - @webpack-dev-server](https://github.com/webpack/webpack-dev-server/issues/2528)


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
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
npm install --save core-js@3.9 regenerator-runtime
```


### 3 - Css

```bash
npm install --save-dev css-loader style-loader \
			mini-css-extract-plugin css-minimizer-webpack-plugin
			
npm install --save-dev postcss-loader postcss autoprefixer
```

### 4 - React

```bash
npm install --save react react-dom
```
