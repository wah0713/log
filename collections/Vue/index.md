### vue-chat-scroll

> 好好研究一下 基于vue的聊天框自动滚动

### vux rootState

> vux中的根路径

### vue mixin

> 1、先执行mixin中的生命周期，然后再执行components中的生命周期
> 2、data、computed和methods会被覆盖，component优先级会比minxin高
> 3、watch和生命周期会合并

### 动态组件

```js
< component: is = 'componentName'
v - bind = 'props'
v - on = "event" >
    props: {
        data1: ''
    }
event: {
    click: () {}
}
```

###

```js
model: {
    prop: "checked",
    event: "change"
}
```

### $listeners

###

```html
<template functional>
```

### this.$root.$on("select-offering", ()=>{})

### this.$root.$emit("select-offering", true)

### import VueCookie from 'vue-cookies'

### this.$i18n.locale='zh'

### provide/inject

### this.$once("hook:beforeDestroy", ()=>{})

### [vue项目实现路由按需加载(路由懒加载)的3种方式](https://blog.csdn.net/xm1037782843/article/details/88225104)

```js
const Home = () => import( /* webpackChunkName: 'ImportFuncDemo' */ '@/components/home')
```

###

```js
beforeCreate: function() {
    this.#options.compontens.TreeFolderContens = require('./tree-folder-contents.vue').default
}
```

### [Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)

### [【vue】使用vue-cli4.0快速搭建一个项目](https://blog.csdn.net/liyunkun888/article/details/102738377)

### [从 0 开始手把手带你搭建一套规范的 Vue3.x 项目工程环境](https://juejin.cn/post/6951649464637636622)

### [Vue项目接入Eslint与+Prettier+Husky自动格式化代码](https://blog.csdn.net/weixin_42826294/article/details/107374982)

### [vue-cli 迁移 vite2 实践小结](https://segmentfault.com/a/1190000039371430)

### [vue Mastery 视频](https://www.vuemastery.com/)

### [vuex官方购物车案例](https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart)

### [使用 NuxtJS 充满信心地构建您的下一个 Vue.js 应用程序。 一个 开源 框架，让 Web 开发变得简单而强大。](https://zh.nuxtjs.org/)

### [VUE中的过滤器filters用法](https://blog.csdn.net/xjtarzan/article/details/80265294/)

### vue genesiss

### 可以在$options.filters里面拿到方法

### [vue递归组件的用法](https://blog.csdn.net/badmoonc/article/details/80380557)

#### once，布尔值，值为 true 表示该回调只会调用一次，调用后会移除监听

### [Vue CLI4.0 webpack配置属性——productionSourceMap](https://blog.csdn.net/weixin_44869002/article/details/105832031)

### [vue修饰符--可能是东半球最详细的文档（滑稽）](https://segmentfault.com/a/1190000016786254)

### vue 具名插槽在没有slot传入使其v-if隐藏

```html
 <slot v-if="Object.keys($slots).includes('drawerTitle')" name="drawerTitle"></slot>
```

### [Vue3 的 Proxy 能做到哪些精确的拦截操作？原理揭秘](https://zhuanlan.zhihu.com/p/148937064)

```js
const raw = []
const arr = new Proxy(raw, {
    get(target, key) {
        console.log('get', key)
        return Reflect.get(target, key)
    },
    set(target, key, value) {
        console.log('set', key)
        return Reflect.set(target, key, value)
    }
})

arr.push(1)
```

### [分享8个非常实用的Vue自定义指令](https://juejin.cn/post/6906028995133833230)

### [Vue 鼠标选中文本 @mouseup 结合 window.getSelection().toString()](https://blog.csdn.net/sunshineTing2/article/details/111477277)

### [全面总结 Vue 3.0 的新特性](https://blog.csdn.net/qq_27318177/article/details/119170748)

### [Vue3.0入门指南](https://www.jianshu.com/p/b219ae8b689d)

### [vue keep-alive 数据更新问题](https://blog.csdn.net/fengjingyu168/article/details/73498594/)

> 当引入keep-alive的时候，页面第一次进入，钩子的触发顺序created-> mounted-> activated，退出时触发deactivated。

> 当再次进入（前进或者后退）时，只触发activated。

### [Vue的钩子函数[路由导航守卫、keep-alive、生命周期钩子]详解](https://blog.csdn.net/wangningjing87/article/details/105395482)

### [Vue路由全局守卫](https://blog.csdn.net/qq_42552393/article/details/103547856)

> 全局守卫：beforeEach
> 后置守卫：afterEach
> 全局解析守卫：beforeResolve
> 路由独享守卫：beforeEnter
> 组内路由守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave

### [使用vue-cli生成的vendor.js文件太大](https://blog.csdn.net/blueberry_liang/article/details/80320607)

### elementui Cascader 和 Select 当页面滚动时，下拉框不一起跟着滚动的问题

Select加上

```js
: popper - append - to - body = “false”
```

Cascader加上

```js
: append - to - body = “false”
```

### [vue.config.js-moment去除多余语言环境](https://www.jianshu.com/p/df9c145d4d71)

### [vue中如何将按钮设置为间隔一段时间只能点击一次](https://my.oschina.net/iioschina/blog/4669555)

> 指令

### [vue-cli中默认webpack配置详解](https://blog.csdn.net/S3328047358/article/details/107021484/)

### [element-UI ，Table组件实现拖拽效果](https://www.cnblogs.com/jin-zhe/p/10181852.html)

### [node.js文件的复制，创建文件夹等相关操作](https://blog.csdn.net/youngyang_shen/article/details/54287247)

```js
function mkdir(dirpath, dirname) {
    //判断第二个参数可以不传入
    //判断第二个参数是否正常，避免调用时传入错误参数
    if (dirname !== path.dirname(dirpath)) {
        mkdir(dirpath);
        return;
    }
    if (fs.existsSync(dirname)) {
        fs.mkdirSync(dirpath)
    } else {
        mkdir(dirname, path.dirname(dirname));
        fs.mkdirSync(dirpath);
    }
}
```

### [cheerio实现了核心jQuery的子集。cheerio会从jQuery库中删除所有DOM矛盾和浏览器的尴尬部分, 展示她真正华丽的API。](https://github.com/cheeriojs/cheerio/wiki/Chinese-README)

### [jsdom 中文文档（纯翻译）](https://segmentfault.com/a/1190000014844043)

### [NodeJs-crawler](https://github.com/lunlunshiwo/NodeJs-crawler)

### [node实现防盗链](https://www.cnblogs.com/sqh17/p/12713858.html)

### [全面总结 Vue 3.0 的新特性](https://blog.csdn.net/qq_27318177/article/details/119170748)

### vue中fullPath和path的区别

字面意思，即带有参数的完整路径和不带有参数的路径的区别

例如：
一个地址：http://xxx/#/console/orderManage/editOrder?id=111xxx

path 是：/console/orderManage/editOrder
fullPath 是：/console/orderManage/editOrder?id=111xxx
