### react使用的组件
antd
axios
babel-polyfill
browser-cookies
classnames
dva
dva-loading
echarts
echarts-for-react
i18next
i18next-xhr-backend
js-cookie
module
moment
qs
react
react-dom
### [入门教程: 认识 React](https://react.docschina.org/tutorial/tutorial.html)
&gt; react 的井字棋教程
### [函数组件](https://react.docschina.org/tutorial/tutorial.html#function-components)
### [为什么不可变性在 React 中非常重要](https://react.docschina.org/tutorial/tutorial.html#why-immutability-is-important)
### [JSX 防止注入攻击](https://react.docschina.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)
### 组件名称必须以大写字母开头。
&gt; React 会将以小写字母开头的组件视为原生 DOM 标签。例如，&lt;div /&gt; 代表 HTML 的 div 标签，而 &lt;Welcome /&gt; 则代表一个组件，并且需在作用域内使用 Welcome。
### [State 的更新可能是异步的](https://react.docschina.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)
&gt; 要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。这个函数用上一个 state 作为第一个参数，将此次更新被应用时的 props 做为第二个参数：
```js
// Correct
this.setState((state, props) =&gt; ({
    counter: state.counter + props.increment
}));
```
### [在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault 。](https://react.docschina.org/docs/handling-events.html)
### [react props.children ](https://react.docschina.org/docs/composition-vs-inheritance.html#containment)
&gt; 我们建议这些组件使用一个特殊的 children prop 来将他们的子组件传递到渲染结果中：
```js
function FancyBorder(props) {
    return ( &lt;
        div className = {
            'FancyBorder FancyBorder-' + props.color
        } &gt; {
            props.children
        } &lt;
        /div&gt;
    );
}
```
### [Fragments](https://react.docschina.org/docs/fragments.html)
&gt; 类似于vue中的template
### [鼠标和指针事件](https://react.docschina.org/docs/accessibility.html#mouse-and-pointer-events)
### [错误边界（Error Boundaries）](https://react.docschina.org/docs/error-boundaries.html#introducing-error-boundaries)
### [约定：最大化可组合性](https://react.docschina.org/docs/higher-order-components.html#convention-maximizing-composability)
&gt; compose(f, g, h) 等同于 (...args) =&gt; f(g(h(...args)))
### [在运行时选择类型](https://react.docschina.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime)
&gt; 你不能将通用表达式作为 React 元素类型。如果你想通过通用表达式来（动态）决定元素类型，你需要首先将它赋值给大写字母开头的变量。这通常用于根据 prop 来渲染不同组件的情况下:
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
    return &lt;components[props.storyType] story = {
        props.story
    }
    /&gt;;
}
```
### [函数作为子元素](https://react.docschina.org/docs/jsx-in-depth.html#functions-as-children)
### [虚拟化长列表](https://react.docschina.org/docs/optimizing-performance.html#virtualize-long-lists)
### [避免调停](https://react.docschina.org/docs/optimizing-performance.html#avoid-reconciliation)
&gt; 即使 React 只更新改变了的 DOM 节点，重新渲染仍然花费了一些时间。在大部分情况下它并不是问题，不过如果它已经慢到让人注意了，你可以通过覆盖生命周期方法 shouldComponentUpdate 来进行提速。该方法会在重新渲染前被触发。其默认实现总是返回 true，让 React 执行更新：
```js
shouldComponentUpdate(nextProps, nextState) {
    return true;
}
```
### [示例](https://react.docschina.org/docs/optimizing-performance.html#examples)
&gt; 在这段代码中，shouldComponentUpdate 仅检查了 props.color 或 state.count 是否改变。如果这些值没有改变，那么这个组件不会更新。如果你的组件更复杂一些，你可以使用类似“浅比较”的模式来检查 props 和 state 中所有的字段，以此来决定是否组件需要更新。React 已经提供了一位好帮手来帮你实现这种常见的模式 - 你只要继承 React. PureComponent 就行了。所以这段代码可以改成以下这种更简洁的形式：
```js
class CounterButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }
    render() {
        return ( &lt;
            button color = {
                this.props.color
            }
            onClick = {
                () =&gt; this.setState(state =&gt; ({
                    count: state.count + 1
                }))
            } &gt;
            Count: {
                this.state.count
            } &lt;
            /button&gt;
        );
    }
}
```
### [不可变数据的力量](https://react.docschina.org/docs/optimizing-performance.html#the-power-of-not-mutating-data)
&gt; 避免该问题最简单的方式是避免更改你正用于 props 或 state 的值。例如，上面 handleClick 方法可以用 concat 重写：
```js
handleClick() {
    this.setState(state =&gt; ({
        words: state.words.concat(['marklar'])
    }));
}
```
### [访问 Refs](https://reactjs.bootcss.com/docs/refs-and-the-dom.html#accessing-refs)
当 ref 被传递给 render 中的元素时，对该节点的引用可以在 ref 的 current 属性中被访问。
```js
const node = this.myRef.current;
```
ref 的值根据节点的类型而有所不同：
当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。
你不能在函数组件上使用 ref 属性，因为他们没有实例。
### [添加 TypeScript 到现有项目中](https://reactjs.bootcss.com/docs/static-type-checking.html#adding-typescript-to-a-project)
### [默认值](https://reactjs.bootcss.com/docs/uncontrolled-components.html#default-values)
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
### Markdown中如何实现内容折叠操作
&lt;details&gt;
&lt;summary&gt;展开查看&lt;/summary&gt;
&lt;pre&gt;&lt;code&gt;
System.out.println("Hello to see U!");
&lt;/code&gt;&lt;/pre&gt;
&lt;/details&gt;
### buildtime='&lt;%=new Date %&gt;' 记录编译时间
### [React Hook 系列(一)：彻底搞懂react-hooks 用法（万字慎点）](https://segmentfault.com/a/1190000021261588)
### [翻译-你必须知道的28个HTML5特征、窍门和技术](https://www.zhangxinxu.com/wordpress/2010/08/%e7%bf%bb%e8%af%91-%e4%bd%a0%e5%bf%85%e9%a1%bb%e7%9f%a5%e9%81%93%e7%9a%8428%e4%b8%aahtml5%e7%89%b9%e5%be%81%e3%80%81%e7%aa%8d%e9%97%a8%e5%92%8c%e6%8a%80%e6%9c%af/)

```html
<!-- figcaption -->
<figure>
    <img src="path/to/image" alt="About image" />
    <figcaption>
        <p>This is an image of something interesting. </p>
    </figcaption>
</figure>

<!-- 引号还是不要引号 -->
<p class=myClass id=someId> Start the reactor.

<!-- 正则表达式 -->
<form action="" method="get">
    <label for="username">姓名:</label>
    <input id="username" name="username" type="text" placeholder="4-10个英文字母" pattern="[A-Za-z]{4,10}" required="required" autofocus />
    <button type="submit">提交</button>
</form>

<!-- 属性支持检测 -->
<script>
if (!'pattern' in document.createElement('input') ) {
    // do client/server side validation
}
</script>

<!-- mark元素(Mark Element ) -->
<h3> 搜索结果 </h3>
<p> 我很喜欢《零秒出手》里面那个拉小提琴的女孩，原来她叫做 <mark>北川景子</mark>。 </p>

<!-- Output元素 -->
<form action="" method="get">
    <p>
        10 + 5 = <output name="sum"></output>
    </p>
    <button type="submit">计算</button>
</form>

(function() {
    var f = document.forms[0];

    if ( typeof f['sum'] !== 'undefined' ) {
        f.addEventListener('submit', function(e) {
            f['sum'].value = 15;
            e.preventDefault();
        }, false);
    } else {
        alert('你的浏览器尚未准备好！');
    }
})();

```


