# AST

|本期版本| 上期版本
|:---:|:---:
`Tue May 31 13:01:30 CST 2022` | -

```bash
npm install -D @babel/{parser, traverse, types, generator}
```


```js
const generator = require("@babel/generator").default;
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");
```

### 组件介绍

> 8.1.2 代码的基本结构 - 反爬虫AST混淆JavaScript与还原实战

名称|说明
---|---
[`@babel/parser`](https://babeljs.io/docs/en/babel-parser) | 将 JS 代码转换成 AST
[`@babel/traverse`](https://babeljs.io/docs/en/babel-traverse) | 遍历 AST 中的节点
[`@babel/types`](https://babeljs.io/docs/en/babel-types) | 判断节点类型和生成新的节点
[`@babel/generator`](https://babeljs.io/docs/en/babel-generator) | 把 AST 转换成 JS 代码


## Ref


* [轻松入门 AST（一）- 陈成](https://www.youtube.com/watch?v=UnSXXorQv1Y)
* [The ESTree Spec](https://github.com/estree/estree)
* [AST Explorer](https://astexplorer.net/)
* [Babel Handbook](https://github.com/jamiebuilds/babel-handbook)
* [babel插件实践（二）babel插件开发](https://juejin.cn/post/7005801956211949575)
