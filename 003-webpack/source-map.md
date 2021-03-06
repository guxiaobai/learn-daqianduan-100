## Source map

**Devtool 配置说明**

* `inline`: 通过 base64 打包到文件里面
* `cheap`: 只要映射行，不要映射列 / 只映射业务代码
* `cheap-module`:  不仅映射业务代码，还映射模块代码
* `eval`: 通过 `eval` 形式执行代码

**最佳实践**

* 开发模式：`cheap-module-eval-source-map`
* 生产环境：`cheap-module-source-map`

### 参考资料

* [JavaScript Source Map 详解](https://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)
* [Devtool](https://webpack.js.org/configuration/devtool/)