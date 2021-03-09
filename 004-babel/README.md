## 004 Babel

**webpack**

* [`babel-loader`](https://github.com/babel/babel-loader)
* [`@babel/core`](https://babeljs.io/docs/en/babel-core)


**Transform**

> [plugins](https://babeljs.io/docs/en/plugins) (插件 - `单个`) / [presets](https://babeljs.io/docs/en/presets) (预设 - `一组`)

* [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env)
* [`@babel/plugin-syntax-dynamic-import`](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import)



**polyfill**

> [`@babel/polyfill`](https://babeljs.io/docs/en/babel-polyfill)

* [`core-js`](https://github.com/zloirock/core-js)
* [`regenerator-runtime`](https://www.npmjs.com/package/regenerator-runtime) - [`Generator`](https://es6.ruanyifeng.com/#docs/generator) / [`async`](https://es6.ruanyifeng.com/#docs/async)



**transform-runtime**

* [`@babel/plugin-transform-runtime`](https://babeljs.io/docs/en/babel-plugin-transform-runtime)
* [`@babel/runtime`](https://babeljs.io/docs/en/babel-runtime)
* [`@babel/runtime-corejs2`](https://babeljs.io/docs/en/next/babel-runtime-corejs2)
* [`@babel/runtime-corejs3`](https://babeljs.io/docs/en/next/babel-plugin-transform-runtime#corejs)


`corejs`

|corejs option|Install command|
|---|---|
`false`| `npm install --save @babel/runtime`
`2` | `npm install --save @babel/runtime-corejs2`
`3` | `npm install --save @babel/runtime-corejs3`


### 参考资料

* [https://babeljs.io/](https://babeljs.io/)
