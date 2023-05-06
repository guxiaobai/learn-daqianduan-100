# Source map

|本期版本|上期版本
|:---:|:---:
`Thu Sep 15 14:55:07 CST 2022` | `Sun May 22 20:59:50 CST 2022`

```bash
terser main.js -o main.min.js --source-map --compress --mangle
```

## Webpack

**Devtool 配置说明**

* `inline`: 通过 base64 打包到文件里面
* `cheap`: 只要映射行，不要映射列 / 只映射业务代码
* `cheap-module`:  不仅映射业务代码，还映射模块代码
* `eval`: 通过 `eval` 形式执行代码

**最佳实践**

* 开发模式：`cheap-module-eval-source-map`
* 生产环境：`cheap-module-source-map`

## Ref

* [前端工程師不可不知的 Source Maps 應用技巧](./_CAwmZjE4UE/)
* [source map 的原理探究](https://github.com/wayou/wayou.github.io/issues/9)
* [手动实现 source-map 中生成 mapping 属性的base64、VLQ及base64-VLQ 编码方法](https://juejin.cn/post/7011156613268504606)
* [利用sourceMap定位错误实践](https://juejin.cn/post/6882265367251517447)