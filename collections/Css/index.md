### 多个边框相连时，边框重叠决解方法
> 通过position:relative和margin-left:-(边框的宽度)px 被选中的z-index提高
### &:not(:last_child)
### repeating-conic-gradient
### textarea禁止拖拉 pointer-event resize textarea
### elementui Cascader 和 Select 当页面滚动时，下拉框不一起跟着滚动的问题
> Select加上 :popper-append-to-body='false'
> Cascader加上 :append-to-body='false'
### [CSS3中width值为max/min-content及fit-content的理解](https://blog.csdn.net/wewfdf/article/details/101228278)
### [NES.css/](https://nostalgic-css.github.io/NES.css/)
> 像素风
### scrollbar-gutter
> scrollbar-gutter 可以让滚动条出现的时候内容不晃动。
> 实现原理是把滚动条的位置提前预留好（空白），这样，滚动条出现的时候内容就不会晃动了
### overscroll-behavior 属性可以让滚动嵌套时父滚动不触发，比方说弹框中的滚动滚到底部的时候，背后的页面会纹丝不动。
### [CSS accent-color属性简介](https://www.zhangxinxu.com/wordpress/2022/03/css-accent-color/)
### [CSS 数学函数之calc、clamp、min、max](https://juejin.cn/post/6999644860240101389#heading-0)
### [纯CSS实现未读消息超过100自动显示为99+](https://www.zhangxinxu.com/wordpress/2022/01/css-show-diff-content-according-var/)
> [css 组合](https://www.zhangxinxu.com/study/202201/css-unread-number-demo.php)

### [使用CSS revert全局关键字还原display显示元素](https://www.zhangxinxu.com/wordpress/2021/05/css-revert-display/)

> 还原 revert

### [div模拟textarea文本域轻松实现高度自适应](https://www.zhangxinxu.com/wordpress/2010/12/div-textarea-height-auto/)

> contenteditable

```js
    // 替换所有div 为不常用字符
    // 然后split
    function formatHtml(htmlStr) {
        htmlStr.replace(/\<\/?div.*?\>/g, '¿').split(/¿+/).filter(Boolean)
    }
```

### [读取字体属性](https://wakamaifondue.com/)

### [使用CSS text-combine-upright实现字符的横向合并](https://www.zhangxinxu.com/wordpress/2021/02/css-text-combine-upright/)

### [Chrome 88已经支持aspect-ratio属性了，学起来](https://www.zhangxinxu.com/wordpress/2021/02/css-aspect-ratio/)

> aspect-ratio

### 样式还原

> all : revert

### [巧用两个type=range input实现区域范围选择](https://www.zhangxinxu.com/wordpress/2021/02/range-input/)

### color #0007

> 最后第四位7为透明度

### [grid-area](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid-area)

### [CSS/CSS3 box-decoration-break属性简介](https://www.zhangxinxu.com/wordpress/2019/01/css-css3-box-decoration-break/)

> CSS box-decoration-break属性可以指定元素片段在跨行、跨列或跨页（如打印）时候的样式渲染表现。

```css
box-decoration-break: slice;
/* 默认值 */
box-decoration-break: clone;
```

### [link rel=alternate网站换肤功能最佳实现](https://www.zhangxinxu.com/wordpress/2019/02/link-rel-alternate-website-skin/)

> alternate

### [写给自己看的CSS shapes布局教程](https://www.zhangxinxu.com/wordpress/2019/02/css-css3-shapes/)

> shapes

### [CSS滤镜和混合模式处理的图片如何上传下载？](https://www.zhangxinxu.com/wordpress/2019/04/save-css-filter-blend-mode-image/)

### [小tips: 如何借助content属性显示CSS var变量值](https://www.zhangxinxu.com/wordpress/2019/05/content-css-var/)

### [CSS如何将段落的首行缩进两个字符（图文详解）](https://blog.csdn.net/a1056244734/article/details/113948122)

### [深入理解CSS mix-blend-mode滤色screen混合模式](https://www.zhangxinxu.com/wordpress/2019/05/css-mix-blend-mode-screen/)

> mix-blend-mode

### [你用的那些CSS转场动画可以换一换了](https://www.zhangxinxu.com/wordpress/2019/05/css-transfer-animation/)

### [使用“变量种子计数器”扩展CSS动画更多可能性](https://www.zhangxinxu.com/wordpress/2019/05/css-variable-seed-extend-animation/)

> animation

### [等宽字体在web布局中应用以及CSS3 ch单位嘿嘿](https://www.zhangxinxu.com/wordpress/2016/07/monospaced-font-css3-ch-unit/)

```css
 /* 等宽字体很重要 */
 font-family: Consolas,
 Monaco,
 monospace;
```

### [filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)

> css filter 属性

### [更好的纯CSS滚动指示器技术实现](https://www.zhangxinxu.com/wordpress/2019/06/better-css-scroll-indicator/)

### [让CSS flex布局最后一行列表左对齐的N种方法](https://www.zhangxinxu.com/wordpress/2019/08/css-flex-last-align/)

### [CSS Functional Notation](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Functions)

### [@supports](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@supports)

### [CSS backdrop-filter简介与苹果iOS毛玻璃效果](https://www.zhangxinxu.com/wordpress/2019/11/css-backdrop-filter/)

```css
.some-class-zxx {
    background-color: #fff;
}

@supports (-webkit-backdrop-filter:none) or (backdrop-filter:none) {
    .some-class-zxx {
        background: hsla(0, 0%, 100%, .75);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
    }
}
```

### [CSS值类型文档大全](https://www.zhangxinxu.com/wordpress/2019/11/css-value-type/)

### [Tips: 使用CSS逻辑属性简化我们的书写](https://www.zhangxinxu.com/wordpress/2022/12/css-logic-property-for-write/)

> margin-inline margin-block inset

### [CSS, SVG和canvas分别实现文本文字纹理叠加效果](https://www.zhangxinxu.com/wordpress/2018/02/css-svg-canvas-text-pattern-overlay/)

```css
div {
    background-image: url(./pattern01.jpg);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
```

### [CSS flex属性深入理解](https://www.zhangxinxu.com/wordpress/2019/12/css-flex-deep/)

> flex

### [CSS repeat()函数详细介绍](https://www.zhangxinxu.com/wordpress/2019/12/css-repeat/)

### [几种CSS渐变背景图片transtion动画方法](https://www.zhangxinxu.com/wordpress/2018/03/background-gradient-transtion/)

> background-image background
