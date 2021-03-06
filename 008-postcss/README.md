## 008 PostCSS


**webpack**

> postcss-loader 执行顺序必须保证在 css-loader 之前，建议还是放在 less或者 sass 等预处理器之后更好。即 loader 顺序： less-loader -> postcss-loader -> css-loader -> style-loader 或者 MiniCssExtractPlugin.loader

* [`postcss`](https://github.com/postcss/postcss)
* [`postcss-loader`](https://github.com/webpack-contrib/postcss-loader)

**plugin**

* [`autoprefixer`](https://github.com/postcss/autoprefixer)

### 参考资料

* [https://postcss.org/](https://postcss.org/)
* [深入PostCSS Web设计 - 9787121318177](https://book.douban.com/subject/27091055/)