# Mock

|本期版本|上期版本
|:---:|:---:
`Thu Jun  9 12:53:39 CST 2022` | -


## mocker-api

> [基于 webpack-dev-server 搭建 mock 服务](https://zhuanlan.zhihu.com/p/478241247)

**Webpack - v5**

```js
onBeforeSetupMiddleware(devServer){
  apiMocker(devServer.app, path.resolve('./mocker/index.js'))
}
```


**Webpack - v4**

> [Webpack最简单的方式Mock API](https://segmentfault.com/a/1190000013220134)

```js
before(app){
  apiMocker(app, path.resolve('./mocker/index.js'))
}
```


## #3 前端模拟 API 数据的两种方式

> [https://www.qiuzhi99.com/movies/react-accounts/99.html](https://www.qiuzhi99.com/movies/react-accounts/99.html)

* [https://mockapi.io/](https://mockapi.io/)
* [json-server](https://github.com/typicode/json-server)


## Ref

* [mocker-api](https://github.com/jaywcjlove/mocker-api)、[example](https://github.com/jaywcjlove/mocker-api/tree/master/example)
* [Mock.js](https://github.com/nuysoft/Mock)