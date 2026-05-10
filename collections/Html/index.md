### [告别pointer-events:none使用HTML inert属性真正禁用](https://www.zhangxinxu.com/wordpress/2022/10/html-inert-disabled-attribute/)

### [详细介绍HTML favicon尺寸 格式 制作等相关知识](https://www.zhangxinxu.com/wordpress/2019/06/html-favicon-size-ico-generator/)
### [xargs 命令教程](https://www.ruanyifeng.com/blog/2019/08/xargs-tutorial.html)


### [linux下find命令的使用和总结](https://www.cnblogs.com/lixuwu/p/7816390.html)


### [借助wbr标签实现连续英文字符的精准换行](https://www.zhangxinxu.com/wordpress/2018/09/html-wbr-word-break/)

> wbr


### [什么是跨域，后端工程师如何处理跨域](https://www.cnblogs.com/ricklz/p/16217937.html)

> 简单请求（simple request）
> 非简单请求（not-so-simple request）


### [HTML accesskey属性与web自定义键盘快捷访问](https://www.zhangxinxu.com/wordpress/2017/05/html-accesskey/)

> accesskey 快捷键+锚点


### [SVG <foreignObject>简介与截图等应用](https://www.zhangxinxu.com/wordpress/2017/08/svg-foreignobject/)

```html
<svg xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="120" height="50">

        <body xmlns="http://www.w3.org/1999/xhtml">
            <p>文字。</p>
        </body>
    </foreignObject>
</svg>
```


### [小tips: 0学习成本实现HTML元素粘滞融合效果](https://www.zhangxinxu.com/wordpress/2017/12/svg-filter-fuse-gooey-effect/)


### [基于用户行为的图片等资源预加载](https://www.zhangxinxu.com/wordpress/2016/06/image-preload-based-on-user-behavior/)

> hover / mouseover 触发下载


### [如何超过大多数人-陈皓](https://coolshell.cn/articles/19464.html)


### [HTML5响应式图片技术中文图解](https://www.zhangxinxu.com/wordpress/2015/11/anatomy-of-responsive-images/)

### [Emmet语法 和 lorem](https://juejin.cn/post/7083155683515826183)

> lorem

### [URL锚点HTML定位技术机制、应用与问题](https://www.zhangxinxu.com/wordpress/2013/08/url-anchor-html-%E9%94%9A%E7%82%B9%E5%AE%9A%E4%BD%8D-%e6%9c%ba%e5%88%b6-%e5%ba%94%e7%94%A8-%e9%97%AE%e9%A2%98/#two)

> :target

### [查漏补缺，我仍未知道的HTML nonce和popover属性](https://www.zhangxinxu.com/wordpress/2023/08/html-attribute-nonce-translate/)

### [HTML kbd、var、samp元素你使用过没？](https://www.zhangxinxu.com/wordpress/2023/07/html-samp-element/)

### [HTML elementtiming属性初体验记录](https://www.zhangxinxu.com/wordpress/2023/09/html-elementtiming-attribute/)

```html
<p elementtiming="text">我是一段内容。</p>
```

### [Web referrer策略详解与防盗链图片的显示](https://www.zhangxinxu.com/wordpress/2023/08/web-referer-image-policy/)

### [Popover](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API/Using)

```js
document.addEventListener("keydown", (event) => {
    if (event.key === "h") {
        if (popover.matches(":popover-open")) {
            popover.hidePopover();
        }
    }

    if (event.key === "s") {
        if (!popover.matches(":popover-open")) {
            popover.showPopover();
        }
    }
});
```


### [完善：HTML5表单新特征简介与举例](https://www.zhangxinxu.com/wordpress/2011/01/%e5%ae%8c%e5%96%84%ef%bc%9ahtml5%e8%a1%a8%e5%8d%95%e6%96%b0%e7%89%b9%e5%be%81%e7%ae%80%e4%bb%8b%e4%b8%8e%e4%b8%be%e4%be%8b/)

> input type


### [input  type](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input/button)


### [聊聊Top Layer顶层特性的隐患与实践](https://www.zhangxinxu.com/wordpress/2024/06/web-top-layer/)

```html
<button onclick="dialog.showModal();">点击我显示模态对话框</button>

<dialog id="dialog">
    <blockquote>
        <button onclick="toast.showPopover();">显示toast提示</button>
        <button onclick="dialog.close();">关闭</button>
    </blockquote>
</dialog>

<div id="toast" class="toast" popover>我是提示内容</div>
```


### 多选

```html
<select multiple>
```


### [原生slot](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/slot)

```html
<slot>：Web 组件插槽元素
```


### [Server-Sent Events 教程](https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html)


### [研究下attachInternals方法，可让普通元素有表单特性](https://www.zhangxinxu.com/study/202503/html-attachInternals-demo.php)

> attachInternals


### [激活win](https://www.cnblogs.com/jopny/p/window_office_onekey_activate_free.html)


### [Record<Keys, Type>](https://typescript.p6p.net/typescript-tutorial/utility.html#record-keys-type)

> Record<Keys, Type> 是一个内置的 TypeScript 类型，用于创建一个对象类型，其中键的类型为 Keys，值的类型为 Type。


### [HTML 2025 年：你需要知道的一切](https://frontendmasters.com/blog/bone-up-html-2025/)


