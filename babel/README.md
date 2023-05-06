# Babel

|本期版本| 上期版本
|:---:|:---:
`Tue May 31 12:05:09 CST 2022` | -


## 使用指南

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

```bash
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
```

> `babel.config.js`

```js
const presets = [
  ['@babel/env',{debug: true}]
]
const plugins = []

module.exports = { presets, plugins }
```

## 视频

* [反爬虫AST原理与还原混淆实战](./9787302585176)、[视频](./27492)

## Ref

* [https://babeljs.io/](https://babeljs.io/)
* [前端科普系列（4）：Babel —— 把 ES6 送上天的通天塔](https://mp.weixin.qq.com/s/plJewhUd0xDXh3Ce4CGpHg)
* [babel源码解析之（@babel/preset-env）](https://blog.csdn.net/vv_bug/article/details/107052867)
* [一次 polyfill 对 babel 的思考🤔](https://www.zhouzh.tech/posts/7842fa90-e154-11eb-b0c2-b19c176da561)
* [core-js@3, Babel 展望未来](https://github.com/zloirock/core-js/blob/master/docs/zh_CN/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md)
* [window.fetch polyfill](https://github.com/github/fetch)