## React

### react使用的组件
- antd
- axios
- babel-polyfill
- browser-cookies
- classnames
- dva
- dva-loading
- echarts
- echarts-for-react
- i18next
- i18next-xhr-backend
- js-cookie
- module
- moment
- qs
- react
- react-dom

### React入门教程
> [入门教程: 认识 React](https://react.docschina.org/tutorial/tutorial.html)

### 函数组件
> [函数组件](https://react.docschina.org/tutorial/tutorial.html#function-components)

### 不可变性在React中的重要性
> [为什么不可变性在 React 中非常重要](https://react.docschina.org/tutorial/tutorial.html#why-immutability-is-important)

### JSX防止注入攻击
> [JSX 防止注入攻击](https://react.docschina.org/docs/introducing-jsx.html#jsx-prevents-injection-attacks)

### 组件名称必须以大写字母开头
> React 会将以小写字母开头的组件视为原生 DOM 标签。例如，<div /> 代表 HTML 的 div 标签，而 <Welcome /> 则代表一个组件。

### State的更新可能是异步的
> 要解决这个问题，可以让 setState() 接收一个函数而不是一个对象。
```js
this.setState((state, props) => ({
    counter: state.counter + props.increment
}));
```
> [State 的更新可能是异步的](https://react.docschina.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)

### React事件处理
> 在 React 中另一个不同点是你不能通过返回 false 的方式阻止默认行为。你必须显式的使用 preventDefault。
> [React事件处理](https://react.docschina.org/docs/handling-events.html)

### props.children
> 使用一个特殊的 children prop 来将子组件传递到渲染结果中。
```js
function FancyBorder(props) {
    return (<div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
    </div>);
}
```
> [react props.children](https://react.docschina.org/docs/composition-vs-inheritance.html#containment)

### Fragments
> 类似于vue中的template
> [Fragments](https://react.docschina.org/docs/fragments.html)

### 鼠标和指针事件
> [鼠标和指针事件](https://react.docschina.org/docs/accessibility.html#mouse-and-pointer-events)

### 错误边界（Error Boundaries）
> [错误边界（Error Boundaries）](https://react.docschina.org/docs/error-boundaries.html#introducing-error-boundaries)

### 高阶组件约定
> compose(f, g, h) 等同于 (...args) => f(g(h(...args)))
> [约定：最大化可组合性](https://react.docschina.org/docs/higher-order-components.html#convention-maximizing-composability)

### 在运行时选择类型
> 你不能将通用表达式作为 React 元素类型。如果你想通过通用表达式来（动态）决定元素类型，你需要首先将它赋值给大写字母开头的变量。
> [在运行时选择类型](https://react.docschina.org/docs/jsx-in-depth.html#choosing-the-type-at-runtime)

### 函数作为子元素
> [函数作为子元素](https://react.docschina.org/docs/jsx-in-depth.html#functions-as-children)

### 虚拟化长列表
> [虚拟化长列表](https://react.docschina.org/docs/optimizing-performance.html#virtualize-long-lists)

### 避免调停
> 通过覆盖生命周期方法 shouldComponentUpdate 来进行提速。
```js
shouldComponentUpdate(nextProps, nextState) {
    return true;
}
```
> [避免调停](https://react.docschina.org/docs/optimizing-performance.html#avoid-reconciliation)

### React.PureComponent
> React 已经提供了一位好帮手来帮你实现这种常见的模式 - 你只要继承 React. PureComponent 就行了。
> [示例](https://react.docschina.org/docs/optimizing-performance.html#examples)

### 不可变数据的力量
> 避免该问题最简单的方式是避免更改你正用于 props 或 state 的值。
```js
handleClick() {
    this.setState(state => ({
        words: state.words.concat(['marklar'])
    }));
}
```
> [不可变数据的力量](https://react.docschina.org/docs/optimizing-performance.html#the-power-of-not-mutating-data)

### Refs访问
> 当 ref 被传递给 render 中的元素时，对该节点的引用可以在 ref 的 current 属性中被访问。
```js
const node = this.myRef.current;
```
> [访问 Refs](https://reactjs.bootcss.com/docs/refs-and-the-dom.html#accessing-refs)

### 添加TypeScript到现有项目
> [添加 TypeScript 到现有项目中](https://reactjs.bootcss.com/docs/static-type-checking.html#adding-typescript-to-a-project)

### 默认值
> [默认值](https://reactjs.bootcss.com/docs/uncontrolled-components.html#default-values)