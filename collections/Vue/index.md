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

### [vue生产环境报错 ChunkLoadError](https://www.impl.fun/2022/03/27/cue-load-chunk-failed/)

> main.js

```js
// 在window.onerror获取失败的src
window.addEventListener('error', (event) => {
    if (!(event instanceof ErrorEvent)) {
        // 获取router加载失败的js地址（hase值）
        window.hasScriptJs = event.target.src
    }
}, true);
```

> router.js

```js
// 然后在router.onError中创建script请求
// onload中replace
// onerror中reload
router.onError((error) => {
    const pattern = /Loading chunk (\d)+ failed/g;
    const isChunkLoadFailed = error.message.match(pattern);
    if (isChunkLoadFailed) {
        if (window.hasScriptJs) {
            let setScript = document.createElement("script");
            setScript.setAttribute("src", window.hasScriptJs);
            head.appendChild(script);
            setScript.onload = () => {
                const targetPath = $router.history.pending.fullPath;
                $router.replace(targetPath);
            };
            setScript.onerror = () => {
                location.reload();
            };
        }

    }

});
export default router;
```

> 以上伪代码不一定可以执行

### [Vue 使用 lodash Debounce 进行防抖，控制高耗任务的频率](https://juejin.cn/post/7041067567422636063)

> lodash Debounce

### [揭秘 Vue.js 九个性能优化技巧](https://juejin.cn/post/6922641008106668045)

> Local variables

### [25个 Vue 技巧, 学了这么久才知道还能这么用](https://juejin.cn/post/7098688018663342111)

> v-for 中的解构

### [Element-UI使用及遇到的问题](https://www.jianshu.com/p/52ca9a00851a)

```css
  .el-tooltip__popper {
      top: -100px; // 解决 tooltip与非tooltip来回切换，左上角会闪现tooltip弹框
  }
```

### [前端面试常见的浏览器缓存（强缓存、协商缓存），代码实操](https://juejin.cn/post/7083178636852854792)

### [Moment.js](https://www.momentjs.com.cn/docs.html#/manipulating/add/)

```js
moment().add(Number, String);
moment().add(Duration);
moment().add(Object);

moment().startOf('year'); // set to January 1st, 12:00 am this year
moment().startOf('month'); // set to the first of this month, 12:00 am
moment().startOf('quarter'); // set to the beginning of the current quarter, 1st day of months, 12:00 am
moment().startOf('week'); // set to the first day of this week, 12:00 am
moment().startOf('isoWeek'); // set to the first day of this week according to ISO 8601, 12:00 am
moment().startOf('day'); // set to 12:00 am today
moment().startOf('date'); // set to 12:00 am today
moment().startOf('hour'); // set to now, but with 0 mins, 0 secs, and 0 ms
moment().startOf('minute'); // set to now, but with 0 seconds and 0 milliseconds
moment().startOf('second'); // same as moment().milliseconds(0);
```

### [实战技巧，Vue原来还可以这样写](https://juejin.cn/post/6844904196626448391)

```js
    // 监听窗口发生变化，resize组件
    window.addEventListener('resize', this.$_handleResizeChart)
    // 通过hook监听组件销毁钩子函数，并取消监听事件
    this.$once('hook:beforeDestroy', () => {
        window.removeEventListener('resize', this.$_handleResizeChart)
    })
```

```html
  <!--通过@hook:updated监听组件的updated生命钩子函数-->
  <!--组件的所有生命周期钩子都可以通过@hook:钩子函数名 来监听触发-->
  <custom-select @hook:updated="$_handleSelectUpdated" />
```

> 开发全局组件，你可能需要了解一下Vue.extend

### [Vue 强制刷新(重新渲染)的方式](https://blog.csdn.net/LonewoIf/article/details/126176039)
### [快速搭建Vue3+element-Plus+electron桌面应用](https://www.dddhl.cn/blogs/all/2022/electron.html#%E5%89%8D%E8%A8%80)

### [前端工程化：基于 Vue.js 3.0 的设计与实践](https://vue3.chengpeiquan.com/)

> vue3

### [el-select关于@blur失去焦点的坑](https://blog.csdn.net/weixin_58528200/article/details/121671550)

```js
focusSelectValue() {
    console.log(this.$refs.fuzzySearch);
    this.$refs.fuzzySearch.$refs.input.blur = () => {
        console.log(this.$refs.fuzzySearch.$refs.input.value);
    };
},
```

### [ElementUI disabled禁用整个form表单，设置单个不禁用](https://blog.csdn.net/weixin_43953518/article/details/124731351)

```html
<el-form label-width="100px" :model="form" :disabled="true">
    <el-form-item label="禁用:">
        <el-button @click="doSomething()" size="mini">禁用 </el-button>
    </el-form-item>

    <el-form label-width="100px" :model="form">
        <el-form-item label="不禁用:">
            <el-button @click="doSomething()" size="mini">不禁用 </el-button>
        </el-form-item>
    </el-form>

</el-form>
```


### [element-ui组件的二次封装](https://www.jianshu.com/p/1cecb13add26)

```vue
<template>
  <div>
    内容...
    <my-input></my-input>
</div>
</template>

<script>
  import { Input } from 'element-ui'
  export default {
    components: {
      myInput: {
        extends: Input,
        ...
      }
    }
  }
</script>
```


### [一个vue页面复用方案](https://juejin.cn/post/7347973138787467274)

> extend node-html-parser


### [语义化版本号管理](https://vue3.chengpeiquan.com/guide.html#%E5%9F%BA%E6%9C%AC%E6%A0%BC%E5%BC%8F%E4%B8%8E%E5%8D%87%E7%BA%A7%E8%A7%84%E5%88%99)

> 版本号

英文|中文|含义
:-:|:-:|:-
Major|主版本号|当项目作了大量的变更，与旧版本存在一定的不兼容问题
Minor|次版本号|做了向下兼容的功能改动或者少量功能更新
Patch|修订号|修复上一个版本的少量 BUG


### [MPA 与 SPA](https://vue3.chengpeiquan.com/engineering.html#mpa-%E4%B8%8E-spa)


### [CSR 与 SSR](https://vue3.chengpeiquan.com/engineering.html#csr-%E4%B8%8E-ssr)


### [了解模块导入限制](https://vue3.chengpeiquan.com/guide.html#%E4%BA%86%E8%A7%A3%E6%A8%A1%E5%9D%97%E5%AF%BC%E5%85%A5%E9%99%90%E5%88%B6)

```html
  <!-- 注意需要先通过 `importmap` 引入 npm 包的 CDN -->
  <script type="importmap">
      {
        "imports": {
          "md5": "https://esm.run/md5"
        }
      }
    </script>
```


### [Timeline 是以时间线的方式追踪不同类型的数据](https://vue3.chengpeiquan.com/upgrade.html#vue-devtools)

> Timeline


### [vue中涉及的字符串模板与dom模板](https://www.jianshu.com/p/8c63c93a346b)


