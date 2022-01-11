### observe

> 观察模式

### DOMSubtreeModified

> [监控dom节点子元素变化](http://javascript.ruanyifeng.com/dom/mutationobserver.html)

### getComputedStyle 或者 getBoundingClientRect

> [获取最终的style](https://blog.csdn.net/zy1281539626/article/details/78488062)

### jquery.chm

> [jquery使用手册](http://jquery.cuishifeng.cn/)

### encodeURI 和 encodeURIComponent

1、加密后还具有URI的语义，还能访问和点击，用encodeURI
2、加密后传入后端解析，用encodeURIComponent
3、加密后用于拼接URI参数，用encodeURIComponent
4、加密cookie，用encodeURIComponent

### 字符串

> 0o八进制 0x十六进制 0b二进制

###

```js
const evt = $.Event('keydown', {
    keycode: 13
}) // 事件 带入的参数
$input.trigger(evt) // 触发器
```

### [] 用法

```js
 Object.keys(abc).reduce((arr, index) => [...arr, {
     [item]: abc[item]
 }], [])
```

### iframe 中获取document

```js
 document.querySelector('#topFrame').contentWindow.document
```

### [insertAdjacentElement 插入位置](https://blog.csdn.net/stanleyhsl/article/details/104632640)

### axios 拦截器

```js
axios.create().interceptors.request.use()
```

### for continue

### scrollIntoView

### window.atob window.btoa base64

###

```js
var a_z = ``
for (let i = `a`.charCodeAt(); i <= `z`.charCodeAt(); i++) {
    a_z += String.fromCharCode(i)
}
console.log(a_z)
```

### require.context

### document.title 窗口闪烁

### (new Set()).toJSON()

### text.charCodeAt(i)&0xff00!=0 中文字节

###

```js
fs.createWriteStream(
    new console.Console(
        const content = fs.readFileSync(filePath)
        let str = content.toString()
        const stat = fs.statSync(absolutePath)
        if (stat.isDirectory()) absolutePath =
            absolutPath + "\\index"
        const names = fs.readdirSync(dir)
    )
)
```

### switch{} 存在变量声明提前

### inserAdjacentHTML

### insertAdjacentElement

### moment(window.buildTime).fromNow

### Object.entries

### class（ES6）

### 禁止在对象实力上直接使用object.prototypes的内置属性  json=JSON.parse('{"hasOwnProperyyu":"1"}') 方法直接变成字符

### 禁止在finally 语句块中出现控制流语句

### [JavaScript 中 call()、apply()、bind() 的用法](https://www.runoob.com/w3cnote/js-call-apply-bind.html)

### hydration 水合

### 箭头函数没有自己的this和 arguments

### [简单粗暴详细讲解javascript实现函数柯里化与反柯里化](https://www.cnblogs.com/dengyao-blogs/p/11495861.html)

### await navigator.storage.estimate()

### Math.sign判断数字是否正数、负数、0、-0、其他值为NaN

### typeof 123n // 'bigint'

### 尾调用优化

### [前端真题](https://bitable.feishu.cn/app8Ok6k9qafpMkgyRbfgxeEnet?table=tblzZHf2Ix3YtxPM&view=vew9iquA45)

### 空二维数组

```js
a = new Array(5).fill(null).map(item => [])
or
Array.from({
    lengthL: 5
}, () => ({}))
```

### [CommonsChunkPlugin可配置的属性](https://segmentfault.com/a/1190000012828879)

### [js的各种错误类型](https://www.cnblogs.com/yanze/p/5997489.html)

### [uni-app](https://uniapp.dcloud.io/)

> 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。

### [avuejs](https://www.avuejs.com/)

> Avue 是一个采用Element框架低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率

### [public，private，protected的区别，继承方法与访问权限](https://blog.csdn.net/spu20134823091/article/details/53836192)

作用域|中文名|说明
:-:|:-:|:-
public|公有继承|继承自父类的成员保持不变。
private|私有继承|继承自父类的成员全部变为私有成员。
protected|保护继承|继承自父类的公有成员变为保护成员，其余不变。

### 数组的shift在遍历中使用性能问题--在算法中发现

> 一个数组，你把头去掉，后面所有元素都要向前移动一位，这就是时间复杂度O(n)的操作，外面再来一个遍历，那就是O(n²)

### Reflect.ownKeys

> Reflect.ownKeys方法用于返回对象的所有属性，基本等同于Object.getOwnPropertyNames与Object.getOwnPropertySymbols之和。

```js
var myObject = {
    foo: 1,
    bar: 2,
    [Symbol.for('baz')]: 3,
    [Symbol.for('bing')]: 4,
};

// 旧写法
Object.getOwnPropertyNames(myObject)
// ['foo', 'bar']

Object.getOwnPropertySymbols(myObject)
//[Symbol(baz), Symbol(bing)]

// 新写法
Reflect.ownKeys(myObject)
// ['foo', 'bar', Symbol(baz), Symbol(bing)]
```

### Promise.catch

> 注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。
> 如果p2没有自己的catch方法，就会调用Promise.all()的catch方法。

### Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

```js
const p = Promise.race([p1, p2, p3]);
```

> 上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

### Promise.allSettled()

> Promise.allSettled()方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。该方法由 ES2020 引入。

### Promise.try()

> 实际开发中，经常遇到一种情况：不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它。因为这样就可以不管f是否包含异步操作，都用then方法指定下一步流程，用catch方法处理f抛出的错误。

### 执行一下命令可修复prettier

```bash
npm run lint --fix
```

### [前端规范：eslint与prettier使用（干货）](https://blog.csdn.net/weixin_45077178/article/details/107226551)

### [HTTP中GET，POST和PUT的区别](https://blog.csdn.net/qq_36183935/article/details/80570062)

### [node中的express框架，nodemon设置修改代码后服务自动重启](https://blog.csdn.net/a419419/article/details/78831869)

### [使用axios调用后端接口](https://blog.csdn.net/kid_hw/article/details/93927253)

### [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)

### [简单的nginx代理demo的详细步骤](https://blog.csdn.net/weixin_44706322/article/details/103256636)

### [浅谈script标签中的async和defer](https://blog.csdn.net/lhjuejiang/article/details/81428226)

### [nginx 相关命令 nginx -s reload/stop/quit](https://blog.csdn.net/weixin_34356138/article/details/85996493)

### ngxin loadction正则语法

```Shell
location ~* \.json$ {
    root html;
    add_header Access-Control-Allow-Origin 'http://localhost:8080';
    add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;
}
```

### [Ajax跨域的所有方法（最详细带使用教程！！！）](https://blog.csdn.net/qq_37547964/article/details/112172365)

### vite几乎秒开的体验，且运行速度不会随着包的增大而变慢

### [commonjs 与 esm 的区别](https://juejin.cn/post/6844903861166014478)

### [vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2)

### [vite-plugin-legacy](https://www.npmjs.com/package/vite-plugin-legacy)

### [vite-plugin-legacy兼容旧浏览器](https://www.bookstack.cn/read/vitejs-2.0-beta-en/cc39a9ad791e3c94.md)

```js
// vite.config.js
import legacy from '@vitejs/plugin-legacy'
exportdefault {
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11']
        })
    ]
}
```

### [vite的周边](https://github.com/vitejs/awesome-vite)

### [面试 Javascript 中的 CJS, AMD, UMD 和 ESM是什么？](https://blog.csdn.net/weixin_39363245/article/details/114391500)

### [vite 源码解读](https://github.com/lubanproj/vite_read)

### [js中?? 和?. 的意思](https://www.cnblogs.com/zhigu/p/13962661.html)

### [神奇的 toLocaleString](https://blog.csdn.net/weixin_39749820/article/details/82869537)

### [npx](https://www.ruanyifeng.com/blog/2019/02/npx.html) 想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了测试工具 Mocha。

### [JSON.stringify深拷贝的缺点](https://www.cnblogs.com/makai/p/13883544.html)

### [深拷贝与浅拷贝](https://www.cnblogs.com/nanhuaqiushui/%5B/14403976.html)

### [有关es6中的import使用方法](https://www.jianshu.com/p/c27b1640a01b)

### <%= %> webpack

### [ssr与csr](https://blog.csdn.net/xiaoxian_xian/article/details/109104607)
