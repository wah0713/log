## Idea

### 设计原则
1. **单一职责原则**
2. **最小知识原则**
3. **里氏代换原则**

### DRY、KISS、YAGNI三原则
> [DRY、KISS、YAGNI三原则的理解](https://segmentfault.com/a/1190000020208797)

### 渲染优化
> 浏览器渲染原理和关键渲染路径：JavaScript -> Style -> Layout -> Paint -> Composite
> 布局和绘制消耗性能很大，且至少要进行一次。
> 造成回流的操作：添加删除元素、操作style display:none、offsetLeft/scrollTop/clientWidth移动元素位置、修改浏览器大小、修改字体大小等。

### CSS对性能的影响
> 使用contain属性、font-display属性、flexbox布局

### 资源优化
> HTML和CSS压缩、JS压缩和混淆、图片优化方案、选择合适的图片格式、响应式图片、懒加载

### 图片格式选择
> JPG/JPEG：压缩比高，适合轮播图大图
> PNG：细节保存较好，适合图标、Logo
> WebP：兼具JPG和PNG的优点
> SVG：矢量性，放大缩小成像质量不变

### 渐进式图片
> [渐进式图片](https://www.zhangxinxu.com/wordpress/2013/01/progressive-jpeg-image-and-so-on/)

### 传输优化
> 开启Gzip、保持Keep Alive、HTTP资源缓存

### 预渲染
> `<link rel="prerender" href="http://example.com" />`

### 预加载
> [预加载](https://yuchengkai.cn/docs/frontend/performance.html#%E9%A2%84%E5%8A%A0%E8%BD%BD)

### 监控
> 线上运行的代码都是压缩过的，需要在打包时生成 sourceMap 文件便于 debug。

### 减少重绘和回流
> 不要把 DOM 结点的属性值放在一个循环里当成循环里的变量

### 网络协议概述
> 物理层、连接层、网络层、传输层、应用层
> [网络协议概述：物理层、连接层、网络层、传输层、应用层详解](https://www.cnblogs.com/dengyibing/p/5563082.html)

### 从输入URL到页面加载的全过程
> [从输入URL到页面加载的全过程](https://www.cnblogs.com/xiaohuochai/p/9193083.html)

### nginx配置
> [nginx开启gzip](https://juejin.cn/post/6844903605187641357)
> [keepalive_requests 踩坑总结](https://github.com/jinhailang/blog/issues/37)

### nginx location正则语法
```Shell
location ~* \.json$ {
    root html;
    add_header Access-Control-Allow-Origin 'http://localhost:8080';
    add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;
}
```

### markdown代码块支持的语言
> AppleScript、ActionScript 3.0、Shell、ColdFusion、C、C#、CSS、Delphi、diff&patch、Erlang、Groovy、Java、JavaFX、JavaScript、Perl、PHP、text、Python、Ruby、SASS&SCSS、Scala、SQL、Visual Basic、XML、Objective C、F#、R、matlab、swift、GO