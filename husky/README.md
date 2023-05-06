# husky

|本期版本| 上期版本
|:---:|:---:
`Sat Sep  3 10:59:29 CST 2022` | -

* `prepare` 脚本会在npm install（不带参数）之后自动执行

> `set-script is deprecated`

```bash
npm set-script prepare "husky install"
npm pkg set scripts.prepare="husky install"
```


## Ref

* [husky](https://github.com/typicode/husky)
* [husky使用总结 - 知乎](https://zhuanlan.zhihu.com/p/366786798)
* [在Git项目中使用husky统一管理hooks](https://segmentfault.com/a/1190000040288130)
* [husky 源码分析——这个库到底做了什么？](https://blog.csdn.net/zc135565/article/details/122625033)