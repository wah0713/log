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
: popper - append - to - body = "false"
```

Cascader加上

```js
: append - to - body = "false"
```

### [vue.config.js-moment去除多余语言环境](https://www.jianshu.com/p/df9c145d4d71)

### [vue中如何将按钮设置为间隔一段时间只能点击一次](https://my.oschina.net/iioschina/blog/4669555)

> 指令

### [el-table固定列el-popover出现多个](https://juejin.cn/post/7028092685172867080)

### [el-select关于@blur失去焦点的坑](https://blog.csdn.net/weixin_58528200/article/details/121671550)

```js
focusSelectValue() {
    this.$refs.fuzzySearch.$refs.input.blur = () => {
        console.log(this.$refs.fuzzySearch.$refs.input.value);
    };
}
```

### [ElementUI disabled禁用整个form表单，设置单个不禁用](https://blog.csdn.net/weixin_43953518/article/details/124731351)

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

### vue中fullPath和path的区别

字面意思，即带有参数的完整路径和不带有参数的路径的区别

例如：
一个地址：http://xxx/#/console/orderManage/editOrder?id=111xxx

path 是：/console/orderManage/editOrder
fullPath 是：/console/orderManage/editOrder?id=111xxx

### [element-ui的el-table和el-form表单校验嵌套使用](https://blog.csdn.net/xing_zlear/article/details/91127520)

### [Vue调试技巧：在Devtool中一键打开组件源码](https://zhuanlan.zhihu.com/p/359927285)

> https://devtools.vuejs.org/guide/open-in-editor.html

### [vue-cli3.0 使用postcss-plugin-px2rem和postcss-pxtorem自动转换px为rem的配置方法](https://www.cnblogs.com/taohuaya/p/10274993.html)

> px rem

### [avue-cli](https://gitee.com/smallweigit/avue-cli)

### [2022前端应该掌握的10个 JS 小技巧](https://juejin.cn/post/7072274726940311588)

### [What's New With Forms in 2022?](https://css-tricks.com/whats-new-with-forms-in-2022/)

### [用头👴解决！前端必知必会的几个实用响应头](https://juejin.cn/post/7124847588070653983)

### elementui Cascader 和 Select 当页面滚动时，下拉框不一起跟着滚动的问题

Select加上

```css
:popper-append-to-body='false'
```

Cascader加上

```css
:append-to-body='false'
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

### [获取多级对象的值](https://vue3.chengpeiquan.com/component.html#%E8%8E%B7%E5%8F%96%E5%A4%9A%E7%BA%A7%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%80%BC)

```js
// 例子比较极端，但在 Vuex 这种大型数据树上，也不是完全不可能存在
const foo = computed(() => {
    // 正常情况下返回需要的数据
    try {
        return store.state.foo3.foo2.foo1.foo
    } catch (e) {
        // 处理失败则返回一个默认值
        return ''
    }
})
```

### [使用 v-bind 动态修改 style](https://vue3.chengpeiquan.com/component.html#%E4%BD%BF%E7%94%A8-v-bind-%E5%8A%A8%E6%80%81%E4%BF%AE%E6%94%B9-style-new)

```vue
<template>
  <p class="msg">Hello World!</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const fontColor = ref<string>('#ff0000')

    return {
      fontColor,
    }
  },
})
</script>

<style scoped>
.msg {
  color: v-bind(fontColor);
}
</style>
```

### [useCssModule](https://vue3.chengpeiquan.com/component.html#style-module-new)

```vue
<template>
  <p :class="classes.msg">Hello World!</p>
</template>

<style module="classes">
.msg {
  color: #ff0000;
}
</style>
```

```
在 const style = useCssModule() 的时候，命名是随意的，跟在 <style module="classes"> 这里指定的命名没有关系。
```

### :deep()

```css
.a {
    :deep(.b) {
        /* ... */
    }
}
```

### [structuredClone](https://developer.mozilla.org/zh-CN/docs/Web/API/structuredClone)

> 深拷贝 原生

### [我敢打赌你不知道的十个JavaScript技巧](https://juejin.cn/post/7296755101622878248)

### [本地持久存储](https://github.com/prazdevs/pinia-plugin-persistedstate)

### [localeCompare](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)

> 字符排序

### [一手es新增特性](https://tc39.es/ecma262/2023/#sec-intro)

```
ECMAScript 2016
ECMAScript 2017
ECMAScript 2018
ECMAScript 2019
ECMAScript 2020
ECMAScript 2021
ECMAScript 2022
ECMAScript 2023, the 14th edition, introduced the toSorted, toReversed, with, findLast, and findLastIndex methods on Array.prototype and TypedArray.prototype, as well as the toSpliced method on Array.prototype; added support for #! comments at the beginning of files to better facilitate executable ECMAScript files; and allowed the use of most Symbols as keys in weak collections.
```

### [Git 代码提交规范，feat、fix、chore 都是什么意思?](https://juejin.cn/post/7374295163625521161)

名字|描述|例子
:-|:-|:-
feat: 新功能（feature）|用于提交新功能。|feat: 增加用户注册功能
fix: 修复 bug|用于提交 bug 修复。|fix: 修复登录页面崩溃的问题
docs: 文档变更|用于提交仅文档相关的修改。|docs: 更新README文件
style: 代码风格变动（不影响代码逻辑）|用于提交仅格式化、标点符号、空白等不影响代码运行的变更。|style: 删除多余的空行
refactor: 代码重构（既不是新增功能也不是修复bug的代码更改）|用于提交代码重构。|refactor: 重构用户验证逻辑
perf: 性能优化|用于提交提升性能的代码修改。|perf: 优化图片加载速度
test: 添加或修改测试|用于提交测试相关的内容。|test: 增加用户模块的单元测试
chore: 杂项（构建过程或辅助工具的变动）|用于提交构建过程、辅助工具等相关的内容修改。|chore: 更新依赖库
build: 构建系统或外部依赖项的变更|用于提交影响构建系统的更改。|build: 升级webpack到版本5
ci: 持续集成配置的变更|用于提交CI配置文件和脚本的修改。|ci: 修改GitHub Actions配置文件
revert: 回滚|用于提交回滚之前的提交。|revert: 回滚feat: 增加用户注册功能

### [宝宝字帖](https://github.com/jaywcjlove/copybook-generator)

### 克隆

```diff
- return numbers.reverse()
+ return [...numbers].reverse()
```

### 多选

```html
<select multiple>
```

### [异步侦听器问题](https://cn.vuejs.org/guide/essentials/watchers.html#stopping-a-watcher)

```
如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏。
```

```vue
<script setup>
import { watchEffect } from 'vue'

// 它会自动停止
watchEffect(() => {})

// ...这个则不会！
setTimeout(() => {
  watchEffect(() => {})
}, 100)
</script>
```

### [vue中涉及的字符串模板与dom模板](https://www.jianshu.com/p/8c63c93a346b)

### [使用一个对象绑定多个 prop](https://cn.vuejs.org/guide/components/props.html#binding-multiple-properties-using-an-object)

```jsx
const post = {
  id: 1,
  title: 'My Journey with Vue'
}
<BlogPost v-bind="post" />
```

### [Boolean 类型转换](https://cn.vuejs.org/guide/components/props.html#boolean-casting)

```jsx
<!-- 等同于传入 :disabled="true" -->
<MyComponent disabled />

<!-- 等同于传入 :disabled="false" -->
<MyComponent />

defineProps({
  disabled: Boolean
})
```

### [v-model 的参数](https://cn.vuejs.org/guide/components/v-model.html#v-model-arguments)

```jsx
<MyComponent v-model:title="bookTitle" />
```

### [原生slot](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot)

```html
<slot>：Web 组件插槽元素
```

### [动态插槽名](https://cn.vuejs.org/guide/components/slots.html#dynamic-slot-names)

```vue
<base-layout>
  <template v-slot:[dynamicSlotName]>
    ...
  </template>

  <!-- 缩写为 -->
  <template #[dynamicSlotName]>
    ...
  </template>
</base-layout>
```

### [作用域插槽](https://cn.vuejs.org/guide/components/slots.html#scoped-slots)

```jsx
<!-- <MyComponent> 的模板 -->
<div>
  <slot :text="greetingMessage" :count="1"></slot>
</div>

<MyComponent v-slot="slotProps">
  {{ slotProps.text }} {{ slotProps.count }}
</MyComponent>
```

### [和响应式数据配合使用](https://cn.vuejs.org/guide/components/provide-inject.html#working-with-reactivity)

```jsx
<!-- 在供给方组件内 -->
<script setup>
import { provide, ref } from 'vue'

const location = ref('North Pole')

function updateLocation() {
  location.value = 'South Pole'
}

provide('location', {
  location,
  updateLocation
})
</script>

<!-- 在注入方组件 -->
<script setup>
import { inject } from 'vue'

const { location, updateLocation } = inject('location')
</script>

<template>
  <button @click="updateLocation">{{ location }}</button>
</template>
```

### [使用 Symbol 作注入名](https://cn.vuejs.org/guide/components/provide-inject.html#working-with-symbol-keys)

```js
// keys.js
export const myInjectionKey = Symbol()

// 在供给方组件中
import {
    provide
} from 'vue'
import {
    myInjectionKey
} from './keys.js'

provide(myInjectionKey, {
    /*
  要提供的数据
*/
});

// 注入方组件
import {
    inject
} from 'vue'
import {
    myInjectionKey
} from './keys.js'

const injected = inject(myInjectionKey)
```

### [鼠标跟踪器示例](https://cn.vuejs.org/guide/reusability/composables.html#mouse-tracker-example)

```html
<script setup>
    import {
        ref,
        onMounted,
        onUnmounted
    } from 'vue'

    const x = ref(0)
    const y = ref(0)

    function update(event) {
        x.value = event.pageX
        y.value = event.pageY
    }

    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
```

```js
// mouse.js
import {
    ref,
    onMounted,
    onUnmounted
} from 'vue'

// 按照惯例，组合式函数名以"use"开头
export function useMouse() {
    // 被组合式函数封装和管理的状态
    const x = ref(0)
    const y = ref(0)

    // 组合式函数可以随时更改其状态。
    function update(event) {
        x.value = event.pageX
        y.value = event.pageY
    }

    // 一个组合式函数也可以挂靠在所属组件的生命周期上
    // 来启动和卸载副作用
    onMounted(() => window.addEventListener('mousemove', update))
    onUnmounted(() => window.removeEventListener('mousemove', update))

    // 通过返回值暴露所管理的状态
    return {
        x,
        y
    }
}
```

```html
<script setup>
    import {
        useMouse
    } from './mouse.js'

    const {
        x,
        y
    } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
```

### [缓存实例的生命周期](https://cn.vuejs.org/guide/built-ins/keep-alive.html#lifecycle-of-cached-instance)

```html
<script setup>
    import {
        onActivated,
        onDeactivated
    } from 'vue'

    onActivated(() => {
        // 调用时机为首次挂载
        // 以及每次从缓存中被重新插入时
    })

    onDeactivated(() => {
        // 在从 DOM 上移除、进入缓存
        // 以及组件卸载时调用
    })
</script>
```

### [Teleport 基本用法](https://cn.vuejs.org/guide/built-ins/teleport.html#basic-usage)

> 有时我们可能会遇到这样的场景：一个组件模板的一部分在逻辑上从属于该组件，但从整个应用视图的角度来看，它在 DOM 中应该被渲染在整个 Vue 应用外部的其他地方。

```html
<button @click="open = true">Open Modal</button>

<Teleport to="body">
    <div v-if="open" class="modal">
        <p>Hello from the modal!</p>
        <button @click="open = false">Close</button>
    </div>
</Teleport>
```

### [浏览器内模板编译注意事项](https://cn.vuejs.org/guide/scaling-up/tooling.html#note-on-in-browser-template-compilation)

### [从头开始实现一个简单的路由](https://cn.vuejs.org/guide/scaling-up/routing.html#simple-routing-from-scratch)

```html
<script setup>
    import {
        ref,
        computed
    } from 'vue'
    import Home from './Home.vue'
    import About from './About.vue'
    import NotFound from './NotFound.vue'
    const routes = {
        '/': Home,
        '/about': About
    }
    const currentPath = ref(window.location.hash)
    window.addEventListener('hashchange', () => {
        currentPath.value = window.location.hash
    })
    const currentView = computed(() => {
        return routes[currentPath.value.slice(1) || '/'] || NotFound
    })
</script>
<template>
    <a href="#/">Home</a> |
    <a href="#/about">About</a> |
    <a href="#/non-existent-path">Broken Link</a>
    <component :is="currentView" />
</template>
```

### [SSR vs. SSG](https://cn.vuejs.org/guide/scaling-up/ssr.html#ssr-vs-ssg)

### [Props 稳定性](https://cn.vuejs.org/guide/best-practices/performance.html#props-stability)

> 一个子组件只会在其至少一个 props 改变时才会更新

### [语义化表单](https://cn.vuejs.org/guide/best-practices/accessibility.html#semantic-forms)

> autocomplete='on' 自动填充

### [URL 注入](https://cn.vuejs.org/guide/best-practices/security.html#url-injection)

> sanitize-url

### [响应性调试](https://cn.vuejs.org/guide/extras/reactivity-in-depth.html#reactivity-debugging)

> onTrack onTrigger

### [创建 Vnodes](https://cn.vuejs.org/guide/extras/render-function.html#creating-vnodes)

### [传递插槽](https://cn.vuejs.org/guide/extras/render-function.html#passing-slots)

### [app.config.globalProperties](https://cn.vuejs.org/api/application#app-config-globalproperties)

```js
app.config.globalProperties.msg = 'hello'

export default {
    mounted() {
        console.log(this.msg) // 'hello'
    }
}
```

### [Setup 上下文](https://cn.vuejs.org/api/composition-api-setup#setup-context)

```
attrs 和 slots 都是有状态的对象，它们总是会随着组件自身的更新而更新。这意味着你应当避免解构它们，并始终通过 attrs.x 或 slots.x 的形式使用其中的属性。此外还需注意，和 props 不同，attrs 和 slots 的属性都不是响应式的。如果你想要基于 attrs 或 slots 的改变来执行副作用，那么你应该在 onBeforeUpdate 生命周期钩子中编写相关逻辑。
```

### [app.runWithContext()](https://cn.vuejs.org/api/application#app-runwithcontext)

### [useTemplateRef()](https://cn.vuejs.org/api/composition-api-helpers#usetemplateref)

### [useId()](https://cn.vuejs.org/api/composition-api-helpers#useid)

> 用于为无障碍属性或表单元素生成每个应用内唯一的 ID。

### [watch](https://cn.vuejs.org/api/options-state#watch)

> 这种用法不支持复杂表达式——仅支持由点分隔的路径。如果你需要侦听复杂的数据源，可以使用命令式的 $watch() API。

### [v-bind](https://cn.vuejs.org/api/built-in-directives#v-bind)

### [v-pre](https://cn.vuejs.org/api/built-in-directives#v-pre)

> 跳过该元素及其所有子元素的编译。

### [命名空间组件](https://cn.vuejs.org/api/sfc-script-setup#namespaced-components)

```vue
<script setup>
import * as Form from './form-components'
</script>

<template>
  <Form.Input>
    <Form.Label>label</Form.Label>
  </Form.Input>
</template>
```

### [插槽选择器](https://cn.vuejs.org/api/sfc-css-features#slotted-selectors)

```vue
<style scoped>
:slotted(div) {
    color: red;
}

</style>
```

### [全局选择器](https://cn.vuejs.org/api/sfc-css-features#global-selectors)

```vue
<style scoped>
:global(.red) {
  color: red;
}
</style>
```

### [CSS 中的 v-bind()](https://cn.vuejs.org/api/sfc-css-features#v-bind-in-css)

```vue
<template>
  <div class="text">hello</div>
</template>

<script>
export default {
  data() {
    return {
      color: 'red'
    }
  }
}
</script>

<style>
.text {
  color: v-bind(color);
}
</style>

<script setup>
import { ref } from 'vue'
const theme = ref({
    color: 'red',
})
</script>

<template>
  <p>hello</p>
</template>

<style scoped>
p {
  color: v-bind('theme.color');
}
</style>
```

### [v-for 中的模板引用](https://cn.vuejs.org/guide/essentials/template-refs#refs-inside-v-for)

### [关于 ref 为 DOM 元素或子组件实例动态创建引用的总结](https://www.cnblogs.com/smile-fanyin/p/18780695)

### [require.context() ——实现 vue 模块的自动导入](https://blog.csdn.net/weixin_44869002/article/details/109702090)

> require.context

### [vue-js-cron](https://github.com/abichinger/vue-js-cron)

> 一个基于 Vue.js 的 cron 表达式编辑器。
> 支持手动输入 cron 表达式，也支持通过可视化的方式来编辑 cron 表达式。
> 支持多种语言，包括中文、英文、日语、法语、德语、意大利语、西班牙语、葡萄牙语、俄语、韩语、日语、荷兰语、波兰语、瑞典语、土耳其语、乌克兰语等。

### [cron-parser](https://github.com/harrisiirak/cron-parser)

> 一个用于解析 cron 表达式的 JavaScript 库。
> 支持解析 cron 表达式，并返回一个可迭代的对象，用于遍历所有符合 cron 表达式的日期。

### [vue2中使用自定义指令实现el-table虚拟列表](https://juejin.cn/post/7459039610396803110)

### [umy-ui 一套为开发者准备的基于 Vue 2.0 的桌面端组件库](https://github.com/popo-fishes/umy-ui)

> 完美解决表格万级数据渲染卡顿，编辑表格卡顿问题
