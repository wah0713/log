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

### 事件 带入的参数

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
    length: 5
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

### data覆盖原来的对象实例，导致被遗漏的属性没有被vue监听到

### [table标签](https://www.jianshu.com/p/7c768011f25a)

### [了解HTML锚点](https://www.cnblogs.com/xiaohuochai/p/5007282.html)

### [Service Worker基础知识整理](https://www.cnblogs.com/BoatGina/p/10422361.html)

### [Object.prototype.hasOwnProperty()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)

> 所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。这个方法可以用来检测一个对象是否含有特定的自身属性；和 in 运算符不同，该方法会忽略掉那些从原型链上继承到的属性。

### [new.target 属性](https://es6.ruanyifeng.com/?search=new+target&x=0&y=0#docs/class#new-target-%E5%B1%9E%E6%80%A7)

### [import 命令](https://es6.ruanyifeng.com/?search=new+target&x=0&y=0#docs/module#import-%E5%91%BD%E4%BB%A4)

```js
import {
    a
} from './xxx.js'

a.foo = 'hello'; // 合法操作
```

> 上面代码中，a的属性可以成功改写，并且其他模块也可以读到改写后的值。不过，这种写法很难查错，建议凡是输入的变量，都当作完全只读，不要轻易改变它的属性。

### [defer与async的区别](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/module-loader#%E4%BC%A0%E7%BB%9F%E6%96%B9%E6%B3%95)

> defer与async的区别是：defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。

### [CommonJS-模块的循环加载](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/module-loader#CommonJS-%E6%A8%A1%E5%9D%97%E7%9A%84%E5%BE%AA%E7%8E%AF%E5%8A%A0%E8%BD%BD)

> 另外，由于 CommonJS 模块遇到循环加载时，返回的是当前已经执行的部分的值，而不是代码全部执行后的值，两者可能会有差异。所以，输入变量的时候，必须非常小心。

### [解构赋值](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/style#%E8%A7%A3%E6%9E%84%E8%B5%8B%E5%80%BC)

### [对象](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/style#%E5%AF%B9%E8%B1%A1)

> 单行定义的对象，最后一个成员不以逗号结尾。多行定义的对象，最后一个成员以逗号结尾。

```js
// bad
const a = {
    k1: v1,
    k2: v2,
};
const b = {
    k1: v1,
    k2: v2
};

// good
const a = {
    k1: v1,
    k2: v2
};
const b = {
    k1: v1,
    k2: v2,
};
```

### [函数](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/style#%E5%87%BD%E6%95%B0)

> 箭头函数取代Function.prototype.bind，不应再用 self/_this/that 绑定 this。

```js
// bad
const self = this;
const boundMethod = function(...params) {
    return method.apply(self, params);
}

// acceptable
const boundMethod = method.bind(this);

// best
const boundMethod = (...params) => method.apply(this, params);
```

> 所有配置项都应该集中在一个对象，放在最后一个参数，布尔值不可以直接作为参数。

```js
// bad
function divide(a, b, option = false) {}

// good
function divide(a, b, {
    option = false
} = {}) {}
```

### [模块](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/style#%E6%A8%A1%E5%9D%97)

> 如果模块默认输出一个函数，函数名的首字母应该小写。

```js
function makeStyleGuide() {}

export default makeStyleGuide;
```

> 如果模块默认输出一个对象，对象名的首字母应该大写。

```js
const StyleGuide = {
    es6: {}
};

export default StyleGuide;
```

### [Record-和-field](https://es6.ruanyifeng.com/?search=defer&x=0&y=0#docs/spec#Record-%E5%92%8C-field)

> ES6 规格将键值对（key-value map）的数据结构称为 Record，其中的每一组键值对称为 field。这就是说，一个 Record 由多个 field 组成，而每个 field 都包含一个键名（key）和一个键值（value）。

### [前端进阶之道](https://yuchengkai.cn/docs/frontend/)

> 使用前删除全部cookie

### [对象转基本类型](https://yuchengkai.cn/docs/frontend/#%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2)

> 当然你也可以重写 Symbol.toPrimitive ，该方法在转基本类型时调用优先级最高。

```js
let a = {
    valueOf() {
        return 0;
    },
    toString() {
        return '1';
    },
    [Symbol.toPrimitive]() {
        return 2;
    }
}
1 + a // => 3
'1' + a // => '12'
```

### [深拷贝](https://yuchengkai.cn/docs/frontend/#%E6%B7%B1%E6%8B%B7%E8%B4%9D)

> 如果你所需拷贝的对象含有内置类型并且不包含函数，可以使用 MessageChannel

```js
function structuralClone(obj) {
    return new Promise(resolve => {
        const {
            port1,
            port2
        } = new MessageChannel();
        port2.onmessage = ev => resolve(ev.data);
        port1.postMessage(obj);
    });
}

var obj = {
    a: 1,
    b: {
        c: b
    }
}
// 注意该方法是异步的
// 可以处理 undefined 和循环引用对象
(async () => {
    const clone = await structuralClone(obj)
})()
```

### [setTimeout、setInterval被遗忘的第三个参数](https://www.cnblogs.com/leaf930814/p/6828588.html)

```js
setTimeout(function timer(a, b, c) {
    console.log(a, b, c)
}, 1000, 3, 2, 1)
// => 3 2 1
```

### [注册事件](https://yuchengkai.cn/docs/frontend/browser.html#%E6%B3%A8%E5%86%8C%E4%BA%8B%E4%BB%B6)

> 通常我们使用 addEventListener 注册事件，该函数的第三个参数可以是布尔值，也可以是对象。对于布尔值 useCapture 参数来说，该参数默认值为 false 。useCapture 决定了注册的事件是捕获事件还是冒泡事件。对于对象参数来说，可以使用以下几个属性

#### capture，布尔值，和 useCapture 作用一样

#### passive，布尔值，表示永远不会调用 preventDefault

### [Service Worker](https://yuchengkai.cn/docs/frontend/browser.html#service-worker)

> Service workers 本质上充当 Web 应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理。它们旨在（除其他之外）使得能够创建有效的离线体验，拦截网络请求并基于网络是否可用以及更新的资源是否驻留在服务器上来采取适当的动作。他们还允许访问推送通知和后台同步 API。

### [重绘（Repaint）和回流（Reflow）](https://yuchengkai.cn/docs/frontend/browser.html#%E9%87%8D%E7%BB%98%EF%BC%88repaint%EF%BC%89%E5%92%8C%E5%9B%9E%E6%B5%81%EF%BC%88reflow%EF%BC%89)

> 执行 requestAnimationFrame 回调
> 执行 IntersectionObserver 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好

### [减少重绘和回流](https://yuchengkai.cn/docs/frontend/browser.html#%E5%87%8F%E5%B0%91%E9%87%8D%E7%BB%98%E5%92%8C%E5%9B%9E%E6%B5%81)

> 不要把 DOM 结点的属性值放在一个循环里当成循环里的变量

```js
for (let i = 0; i < 1000; i++) {
    // 获取 offsetTop 会导致回流，因为需要去获取正确的值
    console.log(document.querySelector('.test').style.offsetTop)
}
```

### [预渲染](https://yuchengkai.cn/docs/frontend/performance.html#%E9%A2%84%E6%B8%B2%E6%9F%93)

> 可以通过预渲染将下载的文件预先在后台渲染，可以使用以下代码开启预渲染

```js
< link rel = "prerender"
href = "http://example.com" / >
```

> 预渲染虽然可以提高页面的加载速度，但是要确保该页面百分百会被用户在之后打开，否则就白白浪费资源去渲染

### [预加载](https://yuchengkai.cn/docs/frontend/performance.html#%E9%A2%84%E5%8A%A0%E8%BD%BD)

### [监控](https://yuchengkai.cn/docs/frontend/performance.html#%E7%9B%91%E6%8E%A7)

> 但是要注意线上运行的代码都是压缩过的，需要在打包时生成 sourceMap 文件便于 debug。

### [document.createDocumentFragment()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createDocumentFragment)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
</head>

<body>
    <ul>
        控件
    </ul>
    <script>
        setTimeout(() => {
            // 插入十万条数据
            const total = 100000
            // 一次插入 20 条，如果觉得性能不好就减少
            const once = 20
            // 渲染数据总共需要几次
            const loopCount = total / once
            let countOfRender = 0
            let ul = document.querySelector('ul')

            function add() {
                // 优化性能，插入不会造成回流
                const fragment = document.createDocumentFragment()
                for (let i = 0; i < once; i++) {
                    const li = document.createElement('li')
                    li.innerText = Math.floor(Math.random() * total)
                    fragment.appendChild(li)
                }
                ul.appendChild(fragment)
                countOfRender += 1
                loop()
            }

            function loop() {
                if (countOfRender < loopCount) {
                    window.requestAnimationFrame(add)
                }
            }
            loop()
        }, 0)
    </script>
</body>

</html>
```

```js
var a = [
    [],
    [0],
    [0, 1, 2]
]
a[4] = []
a.map(arr => arr.length) // => [0, 1, 3, empty, 0]
[...a.map(arr => arr.length)] // => [0, 1, 3, undefined, 0]
Math.max(...a.map(arr => arr.length).filter(Boolean)) // => 3
```

### [数组 - 稀疏数组](https://blog.csdn.net/weixin_41922289/article/details/94555391)

### [JS 稀疏数组](https://github.com/junreycen/blog/issues/10)

### [JavaScript Source Map 详解](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)

### [Sourcemap是什么？Sourcemap的作用及用法概括](https://blog.csdn.net/weixin_40599109/article/details/107845431)

> 设置打包后项目源码不可见

### [发布es6写的npm包遇到了这个坑](https://www.jianshu.com/p/8f335a84e44d)

> lib问题

### [Node.js中package.json中库的版本号详解(^和~区别)](https://blog.csdn.net/superjunjin/article/details/76034076)

###  [npm 和 yarn 常用指令解读和比较](https://blog.csdn.net/xunyicao_e/article/details/110930736)

> yarn install --update-checksums
> 当与对应包的校验不一致时， 更新 yarn.lock 文件和已安的依赖装包

### [component：(resolve) => require](https://www.cnblogs.com/dzkjz/p/12364882.html)

### [第 94 题：vue 在 v-for 时给每项元素绑定事件需要用事件代理吗？为什么？](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/145)

### [windows下快速删除node_modules](https://www.cnblogs.com/yeminglong/p/12620473.html)

### [活用yarn resolutions统一版本大幅减小产物包体积（优化之最后的倔强）](https://blog.csdn.net/qq_21567385/article/details/112644629)

### [入门教程: 认识 React](https://react.docschina.org/tutorial/tutorial.html)

> react 的井字棋教程

### [函数组件](https://react.docschina.org/tutorial/tutorial.html#function-components)

### [为什么不可变性在 React 中非常重要](https://react.docschina.org/tutorial/tutorial.html#why-immutability-is-important)

### [JSX 防止注入攻击](https://react.docschina.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)

### 组件名称必须以大写字母开头。

> React 会将以小写字母开头的组件视为原生 DOM 标签。例如，<div /> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件，并且需在作用域内使用 Welcome。

### [State 的更新可能是异步的](https://react.docschina.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)

> 要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：

```js
// Correct
this.setState((state, props) => ({
    counter: state.counter + props.increment
}));
```

### [在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault 。](https://react.docschina.org/docs/handling-events.html)

### [react props.children ](https://react.docschina.org/docs/composition-vs-inheritance.html#containment)

> 我们建议这些组件使用一个特殊的 children prop 来将他们的子组件传递到渲染结果中：

```js
function FancyBorder(props) {
    return ( <
        div className = {
            'FancyBorder FancyBorder-' + props.color
        } > {
            props.children
        } <
        /div>
    );
}
```

### amazon (S3)

> 是一个公开的服务，Web 应用程序开发人员可以使用它存储数字资产，包括图片、视频、音乐和文档。 S3 提供一个 RESTful API 以编程方式实现与该服务的交互。

### [Fragments](https://react.docschina.org/docs/fragments.html)

> 类似于vue中的template

### [鼠标和指针事件](https://react.docschina.org/docs/accessibility.html#mouse-and-pointer-events)

### [错误边界（Error Boundaries）](https://react.docschina.org/docs/error-boundaries.html#introducing-error-boundaries)

### [约定：最大化可组合性](https://react.docschina.org/docs/higher-order-components.html#convention-maximizing-composability)

> compose(f, g, h) 等同于 (...args) => f(g(h(...args)))

### [Chosen 是一个 jQuery 插件，它使长而笨重的选择框更加用户友好。](https://harvesthq.github.io/chosen/)

### [谷歌的文本对比库](https://github.com/google/diff-match-patch/wiki/API)

> 要对文本文件的进行比较的时候，可以考虑使用google-diff-match-patch算法，它可以对文本文件进行比较、匹配和生成补丁的操作。

### [彻底搞懂 JS 事件轮询](https://juejin.cn/post/6844904198581010439)

> 顺带一提，其实还有一个替代方案，可以使用诸如getComputedStyle这样的方法，只需要访问其中一个属性，这样就能迫使浏览器更早地进行样式的计算，会让浏览器记录下此前设置的所有内容。但是，使用这个方法的时候需要小心，因为这样的做法可能会让浏览器在一帧的时间内做多余的工作，可能会破坏我们真正想要的效果。

> 然而，要说的是，上面两种都不是最终方案，最终方法是使用web animation API，使用这个方案可以轻松地指定我们想要的操作，但是目前只有 Chrome 支持该方案，我们暂且不提。同时，在Edge（旧版）和Safari中，requestAnimationFrame可能现在还不是在渲染 CSS 之前执行， 这意味着很难批量更新页面，用户可能会延迟看到页面，到了下一帧才能看到页面变化，屏幕的显示会有很大的延迟。注意这并不是符合网络标准的，我们期待它们后面会有所整改。

### 宏任务的主要模块

* setTimeout
* setInterval
* I/O
* script代码块

### 微任务的主要模块

* nextTick
* callback
* Promise
* process.nextTick
* Object.observe

#### MutationObserver

### [JS算法](https://github.com/thealgorithms/javascript)

### [免费的编程中文书籍索引](https://github.com/justjavac/free-programming-books-zh_CN)

### [在运行时选择类型](https://react.docschina.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime)

> 你不能将通用表达式作为 React 元素类型。如果你想通过通用表达式来（动态）决定元素类型，你需要首先将它赋值给大写字母开头的变量。这通常用于根据 prop 来渲染不同组件的情况下:

```js
import React from 'react';
import {
    PhotoStory,
    VideoStory
} from './stories';

const components = {
    photo: PhotoStory,
    video: VideoStory
};

function Story(props) {
    // 错误！JSX 类型不能是一个表达式。
    return <components[props.storyType] story = {
        props.story
    }
    />;
}
```

### [函数作为子元素](https://react.docschina.org/docs/jsx-in-depth.html#functions-as-children)

### [虚拟化长列表](https://react.docschina.org/docs/optimizing-performance.html#virtualize-long-lists)

### [避免调停](https://react.docschina.org/docs/optimizing-performance.html#avoid-reconciliation)

> 即使 React 只更新改变了的 DOM 节点，重新渲染仍然花费了一些时间。在大部分情况下它并不是问题，不过如果它已经慢到让人注意了，你可以通过覆盖生命周期方法 shouldComponentUpdate 来进行提速。该方法会在重新渲染前被触发。其默认实现总是返回 true，让 React 执行更新：

```js
shouldComponentUpdate(nextProps, nextState) {
    return true;
}
```

### [示例](https://react.docschina.org/docs/optimizing-performance.html#examples)

> 在这段代码中，shouldComponentUpdate 仅检查了 props.color 或 state.count 是否改变。如果这些值没有改变，那么这个组件不会更新。如果你的组件更复杂一些，你可以使用类似“浅比较”的模式来检查 props 和 state 中所有的字段，以此来决定是否组件需要更新。React 已经提供了一位好帮手来帮你实现这种常见的模式 - 你只要继承 React. PureComponent 就行了。所以这段代码可以改成以下这种更简洁的形式：

```js
class CounterButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    render() {
        return ( <
            button color = {
                this.props.color
            }
            onClick = {
                () => this.setState(state => ({
                    count: state.count + 1
                }))
            } >
            Count: {
                this.state.count
            } <
            /button>
        );
    }
}
```

### [不可变数据的力量](https://react.docschina.org/docs/optimizing-performance.html#the-power-of-not-mutating-data)

> 避免该问题最简单的方式是避免更改你正用于 props 或 state 的值。例如，上面 handleClick 方法可以用 concat 重写：

```js
handleClick() {
    this.setState(state => ({
        words: state.words.concat(['marklar'])
    }));
}
```

### [前端面试秘籍](https://github.com/yisainan/web-interview)

### [访问 Refs](https://reactjs.bootcss.com/docs/refs-and-the-dom.html#accessing-refs)

当 ref 被传递给 render 中的元素时，对该节点的引用可以在 ref 的 current 属性中被访问。

```js
const node = this.myRef.current;
```

ref 的值根据节点的类型而有所不同：

当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。
你不能在函数组件上使用 ref 属性，因为他们没有实例。

### [前端登录，这一篇就够了](https://blog.csdn.net/u011192674/article/details/107101526/)

### [添加 TypeScript 到现有项目中](https://reactjs.bootcss.com/docs/static-type-checking.html#adding-typescript-to-a-project)

### [默认值](https://reactjs.bootcss.com/docs/uncontrolled-components.html#default-values)

### 这里我推荐 [observer-util](https://github.com/nx-js/observer-util)，我解读过这个库的源码，和 Vue3 的实现原理基本上是一模一样！但是简单了很多。麻雀虽小，五脏俱全。里面的注释也很齐全。

### 当然，如果你的英文不是很熟练，也可以看我精心用 TypeScript + 中文注释基于 observer-util 重写的这套代码： [typescript-proxy-reactive](https://github.com/sl1673495/typescript-proxy-reactive)

### [浏览器直接发请求Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

### [Fetch设置请求头](https://developer.mozilla.org/zh-CN/docs/Web/API/Request)

```js
var myImage = document.querySelector('img');

var myHeaders = new Headers();
myHeaders.append('Content-Type', 'image/jpeg');

var myInit = {
    method: 'GET',
    headers: myHeaders,
    mode: 'cors',
    cache: 'default'
};

var myRequest = new Request('flowers.jpg', myInit);

fetch(myRequest).then(function(response) {
    ...
});
```

### [node餐饮demo](https://github.com/bailicangdu/node-elm)

> nodejs + express + mongodb + mongoose + es6/7 + vue + element-ui

### [visibilitychange](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilitychange_event)

> 当其选项卡的内容变得可见或被隐藏时，会在文档上触发 visibilitychange (能见度更改)事件。

### [关于H5的pushState、replaceState](https://www.jianshu.com/p/ddb7fcdf5962)

> history.pushState history.replaceState无刷新改变url

### [window.prompt](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/prompt)

> 显示一个对话框，对话框中包含一条文字信息，用来提示用户输入文字。

### [stopPropagation与stopImmediatePropagation的区别](https://blog.csdn.net/weixin_42420703/article/details/104585427)

stopPropagation
event.stopPropagation(); 阻止事件冒泡。

stopImmediatePropagation
event.stopImmediatePropagation(); 阻止事件冒泡并且阻止该元素上同事件类型的监听器被触发。

### buildtime='<%=new Date %>' 记录编译时间

### [npm ora](https://www.jianshu.com/p/52bed753d5be)

### [npm chalk](https://blog.csdn.net/u013530539/article/details/79073938)

###  [localeCompare](https://www.w3school.com.cn/jsref/jsref_localecompare.asp)

> 字符串排序 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare

### [js控制输入框光标位置（setSelectionRange详解）](https://blog.csdn.net/forAlienZHOU/article/details/52437929)

### [javascript对象之 selectionStart selectionEnd](https://www.cnblogs.com/perseverancevictory/p/3665814.html)

> input textarea 的文本控制选中范围（不是只读属性，是可写入属性）

### [npm cloc](https://blog.csdn.net/baidu_35120637/article/details/109148623)

### webpack-to-vite npm

### [jsPlumb的中文文档](https://www.jianshu.com/p/e61dd8ec781b)

### [iframe的使用和 contentWindow、parent以及postMessage通信方式](https://www.cnblogs.com/nangezi/p/12706672.html)

> contentWindow.postMessage 父给子发消息
> parent.postMessage 子发给父消息

### [Prmise](https://es6.ruanyifeng.com/#docs/promise#Promise-race)

> all 一个失败全部失败
> race 最快的成功即为成功
> allSettlad 全部完成
> 全部失败即为失败

### [ajax和fetch都是请求数据的有什么区别呢](https://www.cnblogs.com/geter/p/12552294.html)

###  https ssl

### [Promise/A+ 规范](https://zhuanlan.zhihu.com/p/143204897)

### [js属性对象的hasOwnProperty方法](https://www.cnblogs.com/weiqinl/p/8683207.html)

### [插排与快排](https://www.cnblogs.com/friedCoder/p/12617844.html)

### [网络协议概述：物理层、连接层、网络层、传输层、应用层详解](https://www.cnblogs.com/dengyibing/p/5563082.html)

### [从输入URL到页面加载的全过程](https://www.cnblogs.com/xiaohuochai/p/9193083.html)

### [JS 作用域及作用域链](https://www.cnblogs.com/gaosirs/p/10579059.html)

### [动态路由匹配](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E5%8C%B9%E9%85%8D)

### [一文搞懂amd, cmd, cjs, umd, es](https://blog.csdn.net/cpa0701/article/details/108703494)

> umd （ES6 import export）
> cjs （commonjs）

### IIFE 立即调用函数表达式

```js
(function() {
    statements
})();
```

### 在所有字体加载完成后进行操作

```js
document.fonts.ready.then(function() {
    // 字体加载完成后的逻辑
});
```

### [JavaScript之contains()方法](https://www.jianshu.com/p/df6cb20436c5)

```js
event.target.contains(el)
```

### [Vue使用NProgress npm](https://blog.csdn.net/wn1245343496/article/details/82151273)

> NProgress是页面跳转是出现在浏览器顶部的进度条

### [TinyMCE](http://tinymce.ax-z.cn/)

> TinyMCE：功能强大、所见即所得的富文本编辑器

### [node里读取命令行参数](https://blog.csdn.net/weixin_34292402/article/details/93318423)

> process.env process.argv

### [store.js使用简介 npm](https://gist.github.com/reygreen1/7226325)

> tore.js 优先选择 localStorage 来进行存储，在 IE6 和 IE7 下降级使用userData来达到目的。 没有使用 flash ，不会减慢你的页面加载速度。也没有使用 cookies ，不会使你的网络请求变得臃肿。store.js 依赖 JSON 来序列化数据进行存储。

### [React Hook 系列(一)：彻底搞懂react-hooks 用法（万字慎点）](https://segmentfault.com/a/1190000021261588)

### [Webpack Bundle Analyzer插件的使用](https://segmentfault.com/a/1190000017716736)

### [webpack配置中的ExtractTextPlugin插件认识](https://www.jianshu.com/p/ed3c98ba5474)

### [webpack配置别名alias](https://www.cnblogs.com/Jimc/p/10282969.html)

### [nodejs路径处理方法和绝对路径 path](https://www.cnblogs.com/mengff/p/9753867.html)

### [巧用.filter去重](https://blog.csdn.net/weixin_44198018/article/details/87856385)

```js
r = arr.filter(function(element, index, self) {
    return self.indexOf(element) === index;
});;
```

### [如何优雅监听容器高度变化](https://segmentfault.com/a/1190000019877595?utm_source=tag-newest)

### [ResizeObserver API](https://zhuanlan.zhihu.com/p/41418813)

### [介绍nodejs中的path模块的几个方法](https://www.cnblogs.com/wulinzi/p/8034047.html)

> Windows 与 POSIX

### [webpack基础](https://www.jianshu.com/p/13bdbefd6189)

### [webpack-module配置详解](https://blog.csdn.net/qq_44708990/article/details/116758235)

### [前端小白入门webpack中对于css、less、图片的处理](https://blog.csdn.net/weixin_43916611/article/details/111708384)

### [webpack：hash、chunkhash、contenthash三者区别](https://www.cnblogs.com/gaoht/p/14005850.html)

### [基于 webpack 的持久化缓存方案](https://github.com/pigcan/blog/issues/9)

### [cache 强缓存 协商缓存](https://blog.csdn.net/qianqianstd/article/details/75907082)

### [web前端入门到实战：CSS3中width值为max/min-content及fit-content的理解](https://blog.csdn.net/wewfdf/article/details/101228278)

### [浏览器是根据什么决定「from disk cache」与「from memory cache」？](https://www.zhihu.com/question/64201378?sort=created)

### [聊一聊缓存 [from memory cache 和 from disk cache]](https://blog.csdn.net/weixin_42038290/article/details/110135296)

### 应答头

|应答头|说明|
|:-|:-|
|Allow|服务器支持哪些请求方法（如GET、POST等）。|
|Content-Encoding|文档的编码（Encode）方法。只有在解码之后才可以得到Content-Type头指定的内容类型。利用gzip压缩文档能够显著地减少HTML文档的下载时间。Java的GZIPOutputStream可以很方便地进行gzip压缩，但只有Unix上的Netscape和Windows上的IE 4、IE 5才支持它。因此，Servlet应该通过查看Accept-Encoding头（即request.getHeader("Accept-Encoding")）检查浏览器是否支持gzip，为支持gzip的浏览器返回经gzip压缩的HTML页面，为其他浏览器返回普通页面。|
|Content-Length|表示内容长度。只有当浏览器使用持久HTTP连接时才需要这个数据。如果你想要利用持久连接的优势，可以把输出文档写入 ByteArrayOutputStream，完成后查看其大小，然后把该值放入Content-Length头，最后通过byteArrayStream.writeTo(response.getOutputStream()发送内容。|
|Content-Type|表示后面的文档属于什么MIME类型。Servlet默认为text/plain，但通常需要显式地指定为text/html。由于经常要设置Content-Type，因此HttpServletResponse提供了一个专用的方法setContentType。|
|Date|当前的GMT时间。你可以用setDateHeader来设置这个头以避免转换时间格式的麻烦。|
|Expires|应该在什么时候认为文档已经过期，从而不再缓存它？|
|Last-Modified|文档的最后改动时间。客户可以通过If-Modified-Since请求头提供一个日期，该请求将被视为一个条件GET，只有改动时间迟于指定时间的文档才会返回，否则返回一个304（Not Modified）状态。Last-Modified也可用setDateHeader方法来设置。|
|Location|表示客户应当到哪里去提取文档。Location通常不是直接设置的，而是通过HttpServletResponse的sendRedirect方法，该方法同时设置状态代码为302。|
|Refresh|表示浏览器应该在多少时间之后刷新文档，以秒计。除了刷新当前文档之外，你还可以通过setHeader("Refresh", "5; URL=http:/\/host/path")让浏览器读取指定的页面。<br/>注意这种功能通常是通过设置HTML页面HEAD区的＜META HTTP-EQUIV="Refresh" CONTENT="5; URL=http:/\/host/path"＞实现，这是因为，自动刷新或重定向对于那些不能使用CGI或Servlet的HTML编写者十分重要。但是，对于Servlet来说，直接设置Refresh头更加方便。<br/><br/>注意Refresh的意义是"N秒之后刷新本页面或访问指定页面"，而不是"每隔N秒刷新本页面或访问指定页面"。因此，连续刷新要求每次都发送一个Refresh头，而发送204状态代码则可以阻止浏览器继续刷新，不管是使用Refresh头还是＜META HTTP-EQUIV="Refresh" ...＞。<br/><br/>注意Refresh头不属于HTTP 1.1正式规范的一部分，而是一个扩展，但Netscape和IE都支持它。|
|Server|服务器名字。Servlet一般不设置这个值，而是由Web服务器自己设置。|
|Set-Cookie|设置和页面关联的Cookie。Servlet不应使用response.setHeader("Set-Cookie", ...)，而是应使用HttpServletResponse提供的专用方法addCookie。参见下文有关Cookie设置的讨论。|
|WWW-Authenticate|客户应该在Authorization头中提供什么类型的授权信息？在包含401（Unauthorized）状态行的应答中这个头是必需的。例如，response.setHeader("WWW-Authenticate", "BASIC realm=＼"executives＼"")。
注意Servlet一般不进行这方面的处理，而是让Web服务器的专门机制来控制受密码保护页面的访问（例如.htaccess）。|

### [webpack devtool](https://doc.codingdict.com/webpack-cn-doc/configuration/devtool/)

### [mobile-detect.js 中文网](https://www.mobile-detect.cn/)

> 该脚本将通过将模式与给定的User-Agent字符串进行比较来检测设备。您可以找到有关渲染网页的设备的信息：

浏览器提供了 5 种 Observer 来监听这些变动：MutationObserver、IntersectionObserver、PerformanceObserver、ResizeObserver、ReportingObserver。

### [node-crawler](https://node-crawler.readthedocs.io/zh_CN/latest/)

> node-crawler：一个轻量级爬虫工具 文档

### [五十种最好的开源爬虫](https://www.cnblogs.com/jscs/p/13672785.html)
