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