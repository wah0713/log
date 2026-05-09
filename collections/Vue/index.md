## Vue

### vue-chat-scroll
> 好好研究一下 基于vue的聊天框自动滚动

### vux rootState
> vux中的根路径

### Vue.js devtools

### vue mixin
> 1、先执行mixin中的生命周期，然后再执行components中的生命周期
> 2、data、computed和methods会被覆盖，component优先级会比minxin高
> 3、watch和生命周期会合并

### 动态组件
```js
<component :is='componentName' v-bind='props' v-on="event">
    props:{
        data1:''
    }
    event:{
        click:(){}
    }
```

### model
```js
model:{
    prop:"checked",
    event:"change"
}
```

### $listeners

### template functional
```html
<template functional>
```

### this.$root.$on("select-offering",()=>{})

### this.$root.$emit("select-offering",true)

### import VueCookie from 'vue-cookies'

### this.$i18n.locale='zh'

### provide/inject

### this.$once("hook:beforeDestroy",()=>{})

### beforeCreate动态组件
```js
beforeCreate:function(){
    this.#options.compontens.TreeFolderContens=require('./tree-folder-contents.vue').default
}
```

### uni-app
> 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web、以及各种小程序。
> [uni-app](https://uniapp.dcloud.io/)

### avuejs
> Avue 是一个采用Element框架低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率。
> [avuejs](https://www.avuejs.com/)

### vue-cli4.0快速搭建项目
> [【vue】使用vue-cli4.0快速搭建一个项目](https://blog.csdn.net/liyunkun888/article/details/102738377)

### Vue3.x项目工程环境搭建
> [从 0 开始手把手带你搭建一套规范的 Vue3.x 项目工程环境](https://juejin.cn/post/6951649464637636622)

### Eslint与Prettier配置
> [Vue项目接入Eslint与+Prettier+Husky自动格式化代码](https://blog.csdn.net/weixin_42826294/article/details/107374982)

### prettier修复命令
```bash
npm run lint --fix
```

### vite
> vite几乎秒开的体验，且运行速度不会随着包的增大而变慢

### vite-plugin-vue2
> [vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2)

### vite-plugin-legacy
> [vite-plugin-legacy](https://www.npmjs.com/package/vite-plugin-legacy)

### vue-cli迁移vite2
> [vue-cli 迁移 vite2 实践小结](https://segmentfault.com/a/1190000039371430)

### vite周边
> [vite的周边](https://github.com/vitejs/awesome-vite)

### vue Mastery视频
> [vue Mastery 视频](https://www.vuemastery.com/)

### vuex官方购物车案例
> [vuex官方购物车案例](https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart)

### NuxtJS
> [使用 NuxtJS 充满信心地构建您的下一个 Vue.js 应用程序。](https://zh.nuxtjs.org/)

### Vue过滤器filters用法
> [VUE中的过滤器filters用法](https://blog.csdn.net/xjtarzan/article/details/80265294/)

### $options.filters
> 可以在$options.filters里面拿到方法

### vue genesiss

### ssr与csr
> [ssr与csr](https://blog.csdn.net/xiaoxian_xian/article/details/109104607)

### vue递归组件
> [vue递归组件的用法](https://blog.csdn.net/badmoonc/article/details/80380557)

### data覆盖问题
> data覆盖原来的对象实例，导致被遗漏的属性没有被vue监听到

### vue-devtools调试
> [vue-devtools及launch-editor调试工具安装及使用](https://www.jianshu.com/p/33a992fc8187)

### vue修饰符
> [vue修饰符--可能是东半球最详细的文档（滑稽）](https://segmentfault.com/a/1190000016786254)

### v-for绑定事件是否需要事件代理
> [第 94 题：vue 在 v-for 时给每项元素绑定事件需要用事件代理吗？为什么？](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/145)

### vue具名插槽v-if隐藏
```html
<slot v-if="Object.keys($slots).includes('drawerTitle')" name="drawerTitle"></slot>
```

### Vue3的Proxy拦截
> [Vue3 的 Proxy 能做到哪些精确的拦截操作？原理揭秘](https://zhuanlan.zhihu.com/p/148937064)

### observer-util库
> [observer-util](https://github.com/nx-js/observer-util)

### Vue自定义指令
> [分享8个非常实用的Vue自定义指令](https://juejin.cn/post/6906028995133833230)

### Vue鼠标选中文本
> [Vue 鼠标选中文本 @mouseup 结合 window.getSelection().toString()](https://blog.csdn.net/sunshineTing2/article/details/111477277)

### Vue3.0新特性
> [全面总结 Vue 3.0 的新特性](https://blog.csdn.net/qq_27318177/article/details/119170748)

### Vue3.0入门指南
> [Vue3.0入门指南](https://www.jianshu.com/p/b219ae8b689d)

### Vue keep-alive数据更新问题
> 当引入keep-alive的时候，页面第一次进入，钩子的触发顺序created->mounted->activated，退出时触发deactivated。当再次进入时，只触发activated。
> [vue keep-alive 数据更新问题](https://blog.csdn.net/fengjingyu168/article/details/73498594/)

### Vue钩子函数详解
> [Vue的钩子函数[路由导航守卫、keep-alive、生命周期钩子]详解](https://blog.csdn.net/wangningjing87/article/details/105395482)

### Vue路由全局守卫
> 全局守卫：beforeEach；后置守卫：afterEach；全局解析守卫：beforeResolve；路由独享守卫：beforeEnter；组内路由守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave
> [Vue路由全局守卫](https://blog.csdn.net/qq_42552393/article/details/103547856)

### 动态路由匹配
> [动态路由匹配](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E5%8C%B9%E9%85%8D)

### 建立复用性强大的vue组件
> [如何建立复用性强大的vue组件](https://www.cnblogs.com/qiyan/p/10406484.html)

### keepAlive缓存手动移除
```js
beforeRouteLeave(to, from, next) {
    if (to.path === '/index/apps') {
        if (this.$vnode && this.$vnode.data.keepAlive) {
            if (this.$vnode.parent && this.$vnode.parent.componentInstance && this.$vnode.parent.componentInstance.cache) {
                if (this.$vnode.componentOptions) {
                    var key = this.$vnode.key == null ? this.$vnode.componentOptions.Ctor.cid + (this.$vnode.componentOptions.tag ? `::${this.$vnode.componentOptions.tag}` : '') : this.$vnode.key
                    var cache = this.$vnode.parent.componentInstance.cache
                    var keys = this.$vnode.parent.componentInstance.keys
                    if (cache[key]) {
                        if (keys.length) {
                            var index = keys.indexOf(key)
                            if (index > -1) {
                                keys.splice(index, 1)
                            }
                        }
                        delete cache[key]
                    }
                }
            }
            from.meta.keepAlive = true
        }
    } else {
        from.meta.keepAlive = true
    }
    next()
}
```