## Debugging Guide


```bash
node --inspect-brk app.js
chrome://inspect
```

```javascript
(function(exports, require, module, __filename, __dirname) {
	console.log('success');
});
```


### 参考资料


* [https://nodejs.org/en/docs/guides/debugging-getting-started/](https://nodejs.org/en/docs/guides/debugging-getting-started/)
* [Nodejs 之 exports, require, module, __filename, __dirname](https://juejin.cn/post/6844903551534104590)
* [Modules: CommonJS modules](https://nodejs.org/api/modules.html#modules_the_module_wrapper)
* [Modules: ECMAScript modules](https://nodejs.org/api/esm.html)