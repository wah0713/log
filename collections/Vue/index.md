### vue-chat-scroll
> 好好研究一下 基于vue的聊天框自动滚动
### vux rootState
> vux中的根路径
### vue mixin
>1、先执行mixin中的生命周期，然后再执行components中的生命周期
>2、data、computed和methods会被覆盖，component优先级会比minxin高
>3、watch和生命周期会合并
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
###
```js
model:{
    prop:"checked",
    event:"change"
}
```
### $listeners
###
```html
<template functional>
```
### this.$root.$on("select-offering",()=>{})
### this.$root.$emit("select-offering",true)
### import VueCookie from 'vue-cookies'
### this.$i18n.locale='zh'
### provide/inject
### this.$once("hook:beforeDestroy",()=>{})
### [vue项目实现路由按需加载(路由懒加载)的3种方式](https://blog.csdn.net/xm1037782843/article/details/88225104)
```js
const Home = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '@/components/home')
```
###
```js
beforeCreate:function(){
    this.#options.compontens.TreeFolderContens=require('./tree-folder-contents.vue').default
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