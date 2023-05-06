# @babel/polyfill

|本期版本| 上期版本
|:---:|:---:
`Tue May 31 12:40:39 CST 2022` | -


## corejs

**1 - `@babel/preset-env`**

```bash
npm install --save core-js
```

```js
{debug: true, useBuiltIns: "usage", corejs: "3.8"}
```

**2 - `@babel/plugin-transform-runtime`**

```bash
npm install --save @babel/runtime-corejs3
```
```js
{ corejs: 3 }
```

## regenerator runtime

> [Generator](https://es6.ruanyifeng.com/#docs/generator)、[async](https://es6.ruanyifeng.com/#docs/async)

### 测试代码

```js
async function getPosts(){
  const response = await fetch('http://127.0.0.1:3000/api/banners');
  const data = await response.json();
  return data;
}
getPosts().then(posts => console.log(posts))
```

### 问题重现

> `Uncaught ReferenceError: regeneratorRuntime is not defined`

```bash
npm install --save-dev @babel/plugin-transform-async-to-generator
npm install --save-dev @babel/plugin-transform-regenerator@7.17.9
```

### 解决方案

**~~方案 1~~**

> `@babel/plugin-transform-regenerator` `7.18.0` 版本会生成 `_regeneratorRuntime` 函数

```bash
npm install --save regenerator-runtime
```
```js
import 'regenerator-runtime/runtime'
```

**方案 2**

> 自动生成: `import _regeneratorRuntime from "@babel/runtime/regenerator";`

```bash
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
```

**方案 3**

> `import _regeneratorRuntime from "@babel/runtime-corejs3/regenerator";`

```bash
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime-corejs3
```


## Ref

* [https://github.com/babel/website/blob/main/docs/polyfill.md](https://github.com/babel/website/blob/main/docs/polyfill.md)