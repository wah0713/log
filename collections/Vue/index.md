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
### model prop event
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
### VueCookie
### this.$i18n.locale='zh'
### provide/inject
### this.$once("hook:beforeDestroy",()=>{})
### vue项目路由按需加载(路由懒加载)的3种方式
```js
const Home = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/home')
```
### beforeCreate require
```js
beforeCreate:function(){
    this.#options.compontens.TreeFolderContens=require('./tree-folder-contents.vue').default
}
```
### [Vue.js 技术揭秘](https://ustbhuangyi.github.io/vue-analysis/)
### 可以在$options.filters里面拿到方法
### data覆盖原来的对象实例，导致被遗漏的属性没有被vue监听到
### [vue递归组件的用法](https://blog.csdn.net/badmoonc/article/details/80380557)
### vue 具名插槽在没有slot传入使其v-if隐藏
```html
 &lt;slot v-if="Object.keys($slots).includes('drawerTitle')" name="drawerTitle"&gt;&lt;/slot&gt;
```
### [vue keep-alive 数据更新问题](https://blog.csdn.net/fengjingyu168/article/details/73498594/)
&gt; 当引入keep-alive的时候，页面第一次进入，钩子的触发顺序created-&gt; mounted-&gt; activated，退出时触发deactivated。
&gt; 当再次进入（前进或者后退）时，只触发activated。
### [Vue的钩子函数[路由导航守卫、keep-alive、生命周期钩子]详解](https://blog.csdn.net/wangningjing87/article/details/105395482)
### [Vue路由全局守卫](https://blog.csdn.net/qq_42552393/article/details/103547856)
&gt; 全局守卫：beforeEach
&gt; 后置守卫：afterEach
&gt; 全局解析守卫：beforeResolve
&gt; 路由独享守卫：beforeEnter
&gt; 组内路由守卫：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave
### [动态路由匹配](https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%8A%A8%E6%80%81%E8%B7%AF%E7%94%B1%E5%8C%B9%E9%85%8D)
### [如何建立复用性强大的vue组件](https://www.cnblogs.com/qiyan/p/10406484.html)
### [keepAlive 缓存手动移除](https://www.cnblogs.com/yanqiong/p/12605540.html)
```js
beforeRouteLeave(to, from, next) {
    if (to.path === '/index/apps') {
        // from.meta.keepAlive = false
        if (this.$vnode &amp;&amp; this.$vnode.data.keepAlive) {
            if (this.$vnode.parent &amp;&amp; this.$vnode.parent.componentInstance &amp;&amp; this.$vnode.parent.componentInstance.cache) {
                if (this.$vnode.componentOptions) {
                    var key = this.$vnode.key == null ? this.$vnode.componentOptions.Ctor.cid + (this.$vnode.componentOptions.tag ? `::${this.$vnode.componentOptions.tag}` : '') : this.$vnode.key
                    var cache = this.$vnode.parent.componentInstance.cache
                    var keys = this.$vnode.parent.componentInstance.keys
                    if (cache[key]) {
                        if (keys.length) {
                            var index = keys.indexOf(key)
                            if (index &gt; -1) {
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
### [vue.config.js-moment去除多余语言环境](https://www.jianshu.com/p/df9c145d4d71)
### [vue中如何将按钮设置为间隔一段时间只能点击一次](https://my.oschina.net/iioschina/blog/4669555)
> 指令
### [vue-cli中默认webpack配置详解](https://blog.csdn.net/S3328047358/article/details/107021484/)
### [element-UI ，Table组件实现拖拽效果](https://www.cnblogs.com/jin-zhe/p/10181852.html)
### vue中fullPath和path的区别
> 字面意思，即带有参数的完整路径和不带有参数的路径的区别
> 例如：
> 一个地址：http://xxx/#/console/orderManage/editOrder?id=111xxx
> path 是：/console/orderManage/editOrder
> fullPath 是：/console/orderManage/editOrder?id=111xxx
### [Vue调试技巧：在Devtool中一键打开组件源码](https://zhuanlan.zhihu.com/p/359927285)
> https://devtools.vuejs.org/guide/open-in-editor.html
> open file vue
### [element-ui的el-table和el-form表单校验嵌套使用](https://blog.csdn.net/xing_zlear/article/details/91127520)
