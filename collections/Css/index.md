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
### [一行CSS实现滚动时藏在信息流后面的广告效果](https://www.zhangxinxu.com/wordpress/2018/07/css-information-stream-advertisement/)


### [这回试试使用CSS实现抛物线运动效果](https://www.zhangxinxu.com/wordpress/2018/08/css-css3-%e6%8a%9b%e7%89%a9%e7%ba%bf%e5%8a%a8%e7%94%bb/)


### [CSS和JS判断深色模式](https://www.jianshu.com/p/06561bbb6118/)

```js
window.matchMedia('(prefers-color-scheme: dark)')
```

```css
@media (prefers-color-scheme: dark) {
    body {

        background: #121212;

    }

    article {

        color: rgba(255, 255, 255, .86);

    }
}
```


### [CSS scroll-behavior和JS scrollIntoView让页面滚动平滑](https://www.zhangxinxu.com/wordpress/2018/10/scroll-behavior-scrollintoview-%e5%b9%b3%e6%bb%91%e6%bb%9a%e5%8a%a8/)

> html, body { scroll-behavior:smooth; }


### [大侠，请留步，要不过来了解下CSS Scroll Snap？](https://www.zhangxinxu.com/wordpress/2018/11/know-css-scroll-snap/)

> mandatory

```css
scroll-snap-type: x/y;
scroll-snap-align: start/end/center;
```


### [纯CSS实现任意格式图标变色的研究](https://www.zhangxinxu.com/wordpress/2018/11/css-change-icon-color/)


### [如何在HTML和JS中设置和获取var CSS变量](https://www.zhangxinxu.com/wordpress/2018/11/html-js-set-css-css3-var%e5%8f%98%e9%87%8f/)

> var
> --


### [CSS :placeholder-shown伪类实现Material Design占位符交互效果](https://www.zhangxinxu.com/wordpress/2018/12/css-placeholder-shown-material-design/)

```css
/* 默认placeholder颜色透明不可见 */
.input-fill:placeholder-shown::placeholder {
    color: transparent;
}
```


### [Animate](https://animate.style)

> animation 动画


### [CSS fixed固定定位transofrm失效及居中小技巧](https://www.zhangxinxu.com/wordpress/2023/02/css-fixed-position-transform-center/)

> transform   position: fixed;

### [CSS sin()/cos()等数学三角函数简介与应用](https://www.zhangxinxu.com/wordpress/2023/06/css-sin-cos-tan-function/)

> hypot

### [巧用:is()或:where()伪类让scoped的style依然全局匹配](https://www.zhangxinxu.com/wordpress/2022/09/css-is-where-scoped-style/)

> is where

### [伪元素表单控件默认样式重置与自定义大全](https://www.zhangxinxu.com/wordpress/2013/06/%e4%bc%aa%e5%85%83%e7%b4%a0-%e8%a1%a8%e5%8d%95%e6%a0%b7%e5%bc%8f-pseudo-elements-style-form-controls/)

### [折腾：2颗星星+纯CSS实现星星评分交互效果](https://www.zhangxinxu.com/wordpress/2013/08/%e7%ba%afcss%e6%98%9f%e6%98%9f%e8%af%84%e5%88%86%e4%ba%a4%e4%ba%92-%e5%85%84%e5%bc%9f%e9%80%89%e6%8b%a9%e5%99%a8/)

```css
.star_bg {
    width: 120px;
    height: 20px;
    background: url(star.png) repeat-x;
    position: relative;
    overflow: hidden;
}

.star {
    height: 100%;
    width: 24px;
    line-height: 6em;
    position: absolute;
    z-index: 3;
}

.star:hover {
    background: url(star.png) repeat-x 0 -20px !important;
    left: 0;
    z-index: 2;
}

.star_1 {
    left: 0;
}

.star_2 {
    left: 24px;
}

.star_3 {
    left: 48px;
}

.star_4 {
    left: 72px;
}

.star_5 {
    left: 96px;
}

.star_1:hover {
    width: 24px;
}

.star_2:hover {
    width: 48px;
}

.star_3:hover {
    width: 72px;
}

.star_4:hover {
    width: 96px;
}

.star_5:hover {
    width: 120px;
}

label {
    display: block;
    _display: inline;
    height: 100%;
    width: 100%;
    cursor: pointer;
}

/* 幕后的英雄，单选按钮 */
.score {
    position: absolute;
    clip: rect(0 0 0 0);
}

.score:checked+.star {
    background: url(star.png) repeat-x 0 -20px;
    left: 0;
    z-index: 1;
}

.score_1:checked~.star_1 {
    width: 24px;
}

.score_2:checked~.star_2 {
    width: 48px;
}

.score_3:checked~.star_3 {
    width: 72px;
}

.score_4:checked~.star_4 {
    width: 96px;
}

.score_5:checked~.star_5 {
    width: 120px;
}

.star_bg:hover .star {
    background-image: none;
}

/* for IE6-IE8 JS 交互 */
.star_checked {
    background: url(star.png) repeat-x 0 -20px;
    left: 0;
    z-index: 1;
}
```

```html
<div id="starBg" class="star_bg">
    <input type="radio" id="starScore1" class="score score_1" value="1" name="score">
    <a href="#starScore1" class="star star_1" title="差"><label for="starScore1">差</label></a>
    <input type="radio" id="starScore2" class="score score_2" value="2" name="score">
    <a href="#starScore2" class="star star_2" title="较差"><label for="starScore2">较差</label></a>
    <input type="radio" id="starScore3" class="score score_3" value="3" name="score">
    <a href="#starScore3" class="star star_3" title="普通"><label for="starScore3">普通</label></a>
    <input type="radio" id="starScore4" class="score score_4" value="4" name="score">
    <a href="#starScore4" class="star star_4" title="较好"><label for="starScore4">较好</label></a>
    <input type="radio" id="starScore5" class="score score_5" value="5" name="score">
    <a href="#5" class="star star_5" title="好"><label for="starScore5">好</label></a>
</div>
```

### [CSS属性选择器驱动的过滤搜索技术](https://www.zhangxinxu.com/wordpress/2013/09/css-attr-selector-search/)

```css
.list:not([data-index*="sh"]) {
    display: none;
}
```

### [小tip: margin:auto实现绝对定位元素的水平垂直居中](https://www.zhangxinxu.com/wordpress/2013/11/margin-auto-absolute-%e7%bb%9d%e5%af%b9%e5%ae%9a%e4%bd%8d-%e6%b0%b4%e5%b9%b3%e5%9e%82%e7%9b%b4%e5%b1%85%e4%b8%ad/)

```css
.element {
    width: 600px;
    height: 400px;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    /* 有了这个就自动居中了 */
}
```

### [5分钟快速了解text-wrap:balance的作用](https://www.zhangxinxu.com/wordpress/2023/07/css-text-wrap-balance/)

```css
text-wrap: wrap;
text-wrap: nowrap;
text-wrap: balance;
```

### [CSS高宽不等图片固定比例布局的三重进化](https://www.zhangxinxu.com/wordpress/2023/07/css-image-aspect-ratio-layout/)

### [小tip: 使用CSS(Unicode字符)让inline水平元素换行](https://www.zhangxinxu.com/wordpress/2012/03/tip-css-multiline-display/)

```css
dd:after {
    content: '\A';
    white-space: pre;
}
```

### [SVG图标颜色文字般继承与填充](https://www.zhangxinxu.com/wordpress/2014/07/svg-sprites-fill-color-currentcolor/)

> svg fill

```css
li {
    color: #369;
}

svg {
    fill: currentColor;
}
```

### [伪类+js实现CSS3 media queries跨界准确判断](https://www.zhangxinxu.com/wordpress/2012/05/after-js-content-css3-media-queries/)

> media 替换图片地址

### [小tip: 使用CSS将图片转换成黑白(灰色、置灰)](https://www.zhangxinxu.com/wordpress/2012/08/css-svg-filter-image-grayscale/)

```css
:not(:has(img)):not(img) {
    filter: grayscale(1);
}

.gray {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);

    filter: grayscale(100%);

    filter: gray;
}
```


### [CSS蛋疼应用之：数据上报和HTML验证](https://www.zhangxinxu.com/wordpress/2018/12/css-data-report-html-validate/)


### [杀了个回马枪，还是说说position:sticky吧](https://www.zhangxinxu.com/wordpress/2018/12/css-position-sticky/)

> position sticky


### [“蝉原则”与CSS3随机多背景随机圆角等效果](https://www.zhangxinxu.com/wordpress/2017/02/%e8%9d%89%e5%8e%9f%e5%88%99-background-border-radius/)


### [“蝉原则” 随机背景](https://w3cplus.com/css3/css-secrets/random-backgrounds.html)

> css秘密花园


### [HTML5 drag & drop 拖拽与拖放简介](https://www.zhangxinxu.com/wordpress/2011/02/html5-drag-drop-%e6%8b%96%e6%8b%bd%e4%b8%8e%e6%8b%96%e6%94%be%e7%ae%80%e4%bb%8b/)

1. DataTransfer 对象：退拽对象用来传递的媒介，使用一般为Event.dataTransfer。
2. draggable 属性：就是标签元素要设置draggable=true，否则不会有效果，例如：

```css
<div title="拖拽我"draggable="true">列表1</div>
```

3. ondragstart 事件：当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上
4. ondragenter 事件：当拖曳元素进入目标元素的时候触发的事件，此事件作用在目标元素上
5. ondragover 事件：拖拽元素在目标元素上移动的时候触发的事件，此事件作用在目标元素上
6. ondrop 事件：被拖拽的元素在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上
7. ondragend 事件：当拖拽完成后触发的事件，此事件作用在被拖曳元素上
8. Event.preventDefault() 方法：阻止默认的些事件方法等执行。在ondragover中一定要执行preventDefault()，否则ondrop事件不会被触发。另外，如果是从其他应用软件或是文件中拖东西进来，尤其是图片的时候，默认的动作是显示这个图片或是相关信息，并不是真的执行drop。此时需要用用document的ondragover事件把它直接干掉。
9. Event.effectAllowed 属性：就是拖拽的效果。


### [css3patterns](http://lea.verou.me/css3patterns)

> 花纹


### [CSS3 Patterns](https://github.com/leaverou/css3patterns)


### [CSS overflow-anchor属性与滚动锚定](https://www.zhangxinxu.com/wordpress/2020/08/css-overflow-anchor/)

```css
overflow-anchor: auto | none
```


### [css 居中](https://css-tricks.com/centering-css-complete-guide/)


### [使用CSS offset-path让元素沿着不规则路径运动](https://www.zhangxinxu.com/wordpress/2017/03/offset-path-css-animation/)

```css
.horse - run {
    offset - path: path("M10,80 q100,120 120,20 q140,-50 160,0");
    animation: move 3 s linear infinite;
}

@keyframes move {
    100 % {
        offset - distance: 100 %;
    }
}
```


### [HTML <area><map>标签及在实际开发中的应用](https://www.zhangxinxu.com/wordpress/2017/05/html-area-map/)

```css
<img src="mm1.jpg"alt="美女"usemap="#MM"><map id="MM"name="MM"><area shape="rect"coords="20,20,80,80"href="#rect"alt="矩形"><area shape="circle"coords="200,50,50"href="#circle"alt="圆形"><area shape="poly"coords="150,100,200,120,180,130,190,180,150,150,100,160,140,120,100,110"href="#poly"alt="多边形"></map>
```


### [-webkit-text-stroke文字描边CSS属性及展开](https://www.zhangxinxu.com/wordpress/2017/06/webkit-text-stroke-css-text-shadow/)

> text-stroke


### [去掉html标签（真正意义上去掉所有html标签包括内嵌的css样式）](https://blog.csdn.net/qq_37860634/article/details/124616991)


### [原生 js 获取 dom 元素 css 样式的四种方法及对比](https://blog.csdn.net/zwkkkk1/article/details/103188153)

> HTMLElement.style Element.currentStyle Window.getComputedStyle() Element.getBoundingClientRect()


### [借助CSS Shapes实现元素滚动自动环绕iPhone X的刘海](https://www.zhangxinxu.com/wordpress/2017/09/css-shapes-outside-iphone-x-head/)

```js
box.addEventListener('scroll', function() {
    var scrollTop = box.scrollTop;
    // 滚动偏移应用在shape-outside上
    shape.style.shapeOutside = 'polygon(0 0, 0 ' + (150 + scrollTop) + 'px, 16px ' + (154 + scrollTop) + 'px, 30px ' + (166 + scrollTop) + 'px, 30px ' + (314 + scrollTop) + 'px, 16px ' + (326 + scrollTop) + 'px, 0 ' + (330 + scrollTop) + 'px, 0 0)';
});
```


### [CSS3 linear-gradient线性渐变实现虚线等简单实用图形](https://www.zhangxinxu.com/wordpress/2017/10/css3-linear-gradient-dashed-triangle-graph/)


### [3种纯CSS实现中间镂空的12色彩虹渐变圆环方法](https://www.zhangxinxu.com/wordpress/2017/11/pure-css-colorful-circle/)


### [客栈说书：CSS遮罩CSS3 mask/masks详细介绍](https://www.zhangxinxu.com/wordpress/2017/11/css-css3-mask-masks/)

> mark


### [深入理解SVG feDisplacementMap滤镜及实际应用](https://www.zhangxinxu.com/wordpress/2017/12/understand-svg-fedisplacementmap-filter/)

```html
<svg style="position:absolute;height:0;clip:rect(0 0 0 0);">
    <defs>
        <filter id="filter-ripple">
            <feImage xlink:href="./map.png" x="0" y="0" width="512" height="512" result="ripple"></feImage>
            <feDisplacementMap xChannelSelector="G" yChannelSelector="R" color-interpolation-filters="sRGB" in="SourceGraphic" in2="ripple" scale="80"></feDisplacementMap>
            <feComposite operator="in" in2="ripple"></feComposite>
        </filter>
    </defs>
</svg>
```

```css
.element {
    filter: url(#filter-ripple);
}
```


### [又发现一种无需绝对定位就可以元素重叠的CSS技巧](https://www.zhangxinxu.com/wordpress/2023/03/css-container-rule-overlap/)


### [理解CSS3 isolation: isolate的表现和作用](https://www.zhangxinxu.com/wordpress/2016/01/understand-css3-isolation-isolate/)


### [深入理解CSS中的层叠上下文和层叠顺序](https://www.zhangxinxu.com/wordpress/2016/01/understand-css-stacking-context-order-z-index/)

> z-index


### [腾讯微云黑色遮罩引导蒙版更好的CSS实现方式](https://www.zhangxinxu.com/wordpress/2016/03/better-black-mask-guide-overlay-method/)

```css
.cover::before {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 400px solid #000;
    position: absolute;
    left: -400px;
    top: -400px;
    /* 自己瞎填的参数，示意 */
    box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, .75);
}
```

```js
var coverGuide = function(cover, target) {
    var body = document.body,
        doc = document.documentElement;
    if (cover && target) {
        // target size(width/height)
        var targetWidth = target.clientWidth,
            targetHeight = target.clientHeight;

        // page size
        var pageHeight = doc.scrollHeight,
            pageWidth = doc.scrollWidth;

        // offset of target
        var offsetTop = target.getBoundingClientRect().top + (body.scrollTop || doc.scrollTop),
            offsetLeft = target.getBoundingClientRect().left + (body.scrollLeft || doc.scrollLeft);

        // set size and border-width
        cover.style.width = targetWidth + 'px';
        cover.style.height = targetHeight + 'px';
        cover.style.borderWidth =
            offsetTop + 'px ' +
            (pageWidth - targetWidth - offsetLeft) + 'px ' +
            (pageHeight - targetHeight - offsetTop) + 'px ' +
            offsetLeft + 'px';

        cover.style.display = 'block';

        // resize
        if (!cover.isResizeBind) {
            if (window.addEventListener) {
                window.addEventListener('resize', function() {
                    coverGuide(cover, target);
                });
                cover.isResizeBind = true;
            } else if (window.attachEvent) {
                window.attachEvent('onresize', function() {
                    coverGuide(cover, target);
                });
                cover.isResizeBind = true;

                // IE7, IE8 box-shadow hack
                cover.innerHTML = '<img src="guide-shadow.png">';
            }
        }
    }
};
```


### [CSS3 filter:drop-shadow滤镜与box-shadow区别应用](https://www.zhangxinxu.com/wordpress/2016/05/css3-filter-drop-shadow-vs-box-shadow/)

> drop-shadow


### [PNG格式小图标的CSS任意颜色赋色技术](https://www.zhangxinxu.com/wordpress/2016/06/png-icon-change-color-by-css/)

```css
.box {
    margin: 40px;
    padding: 50px;
    background-color: #fff;
    position: relative;
    font-size: 24px;
}

.cor {
    position: absolute;
    left: -40px;
    widtd: 0;
    height: 0;
    overflow: hidden;
    border: 20px solid transparent;
    border-right-color: #fff;
}

.box-shadow {
    box-shadow: 5px 5px 10px black;
}

.drop-shadow {
    filter: drop-shadow(5px 5px 10px black);
}
```

```html
<div class="box box-shadow">
    <i class="cor"></i>
    box-shadow
</div>
<div class="box drop-shadow">
    <i class="cor"></i>
    filter: drop-shadow
</div>
```


### [Puppeteer](https://puppeteer.bootcss.com/)

> 无头浏览器


### [基于vw等viewport视区单位配合rem响应式排版和布局](https://www.zhangxinxu.com/wordpress/2016/08/vw-viewport-responsive-layout-typography/)

```css
html {
    font-size: calc(18px + 4 * (100vw - 600px) / 400);
}
```


### [简单聊聊CSS选择器中的正则表达式](https://www.zhangxinxu.com/wordpress/2016/08/regular-expression-in-css-selector/)


### [CSS content换行实现字符点点点loading效果](https://www.zhangxinxu.com/wordpress/2016/11/css-content-pre-animation-character-loading/)

```css
dot {
    display: inline-block;
    height: 1em;
    line-height: 1;
    text-align: left;
    vertical-align: -.25em;
    overflow: hidden;
}

dot::before {
    display: block;
    content: '...\A..\A.';
    white-space: pre-wrap;
    /* 也可以是white-space: pre */
    animation: dot 3s infinite step-start both;
}

@keyframes dot {
    33% {
        transform: translateY(-2em);
    }

    66% {
        transform: translateY(-1em);
    }
}
```


### [CSS unicode-range特定字符使用font-face自定义字体](https://www.zhangxinxu.com/wordpress/2016/11/css-unicode-range-character-font-face/)

```js
/* 支持的值 */
unicode-range: U+26;               /* 单个字符编码 */
unicode-range: U+0-7F;
unicode-range: U+0025-00FF;        /* 字符编码区间 */
unicode-range: U+4??;              /* 通配符区间 */
unicode-range: U+0025-00FF, U+4??; /* 多个值 */
```


### [HTML可访问性fieldset, legend元素及CSS布局应用](https://www.zhangxinxu.com/wordpress/2016/11/html-fieldset-legend-element-css-layout/)

```html
<fieldset>
    <legend>标题</legend>
</fieldset>
```


### [小tip: 纯CSS实现视差滚动效果](https://www.zhangxinxu.com/wordpress/2015/03/css-only-parallax-effect/)

```css
.container {
    /* 滚动容器 */
    perspective: 1px;
    padding: 0;
    height: calc(100vh - 300px);
    overflow: auto;
}

.box {
    /* 视差元素的父级需要3D视角 */
    height: 1280px;
    transform-style: preserve-3d;
    position: relative;
}

.background {
    /* 滚动比较慢的背景元素 */
    position: absolute;
    left: 50%;
    transform: translate3D(-50%, -120px, -1px) scale(2);
}
```


### [小tips: CSS3 webkit下彩条文字效果实现](https://www.zhangxinxu.com/wordpress/2015/03/css3-colorful-text/)

```css
line-height: 20px;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-image: linear-gradient(to bottom, #9588DD, #9588DD 25%, #DD88C8 25%, #DD88C8 50%, #D3DD88 50%, #D3DD88 75%, #88B0DD 75%, #88B0DD);
background-size: 100% 80px;
```


### [CSS混合模式mix-blend-mode/background-blend-mode简介](https://www.zhangxinxu.com/wordpress/2015/05/css3-mix-blend-mode-background-blend-mode/)

```
multiply混合后通常颜色会加深，多用在白色背景图片和其他元素的混合，以及彩色纹理的合并上。
screen混合后颜色会减淡，非常适合实现霓虹灯光效果，适合黑色背景素材和其他元素混合，非常实用。
overlay在颜色值暗的时候，采用了类似“正片叠底”的算法，而颜色亮的时候，采用了类似“滤色”的算法。此混合模式比较适合实现文字水印效果。
darken表示哪个颜色暗使用哪个颜色，在web开发中，给图形或文字着色会很实用。
lighten是哪个颜色浅就表现为哪个颜色，在web开发中，给图形或文字着色会很实用。
color-dodge颜色减淡混合模式可以用来保护底图的高光，适合处理高光下的人物照片。
color-burn颜色加深混合模式可以用来保护底图的阴影，适合处理幽深秘境一类的照片，通过和特定的色彩进行混合，可以营造更加幽深的意境。
hard-light的效果是强光，最终的混合效果就好像耀眼的聚光灯照射过来，表现为图像亮的地方更亮，暗的地方更暗。多用在图像表现处理上。
soft-light的效果是柔光，最终的混合效果就好像发散的光源弥漫过来，表现效果和hard-light有类似之处，只是表现没有那么强烈。给图像着色的时候常用此混合模式。
difference是差值效果，可以实现颜色的反色效果。
exclusion的效果是排除，最终的混合效果和difference模式是类似的，区别在于exclusion的对比度要更低一些。
```


### [了解CSS3 text-decoration波浪线等新特性](https://www.zhangxinxu.com/wordpress/2015/06/know-css-text-decoration-style-color-ship/)

> text-decoration-color定义装饰线的颜色


### [CSS1-CSS3 <color>颜色知识知多少？](https://www.zhangxinxu.com/wordpress/2015/07/know-css1-css3-color/)

```
color颜色关键字
transparent关键字
currentColor关键字
16进制颜色、rgb颜色和hsl颜色
系统颜色
```


### [博闻强识：了解CSS中的@ AT规则](https://www.zhangxinxu.com/wordpress/2015/08/know-css-at-rules/)


### [自适应表格连续字符换行及单行溢出点点点显示](https://www.zhangxinxu.com/wordpress/2014/04/%e8%87%aa%e9%80%82%e5%ba%94%e8%a1%a8%e6%a0%bc-%e5%ad%97%e7%ac%a6%e6%8d%a2%e8%a1%8c-%e6%ba%a2%e5%87%ba%e7%82%b9%e7%82%b9%e7%82%b9-table-text-overflow-ellipsis-word-wrap-break-all/)

```css
table-layout: fixed;
```


### [使用纯CSS实现噪点效果](https://www.zhangxinxu.com/wordpress/2023/06/css-noise/)

> repeating-conic-gradient


### [CSS counter计数器(content目录序号自动递增)详解](https://www.zhangxinxu.com/wordpress/2014/08/css-counters-automatic-number-content/)

```css
.reset {
    padding-left: 20px;
    counter-reset: wangxiaoer;
    line-height: 1.6;
    color: #666;
}

.counter:before {
    content: counters(wangxiaoer, '-') '. ';
    counter-increment: wangxiaoer;
    font-family: arial black;
}
```

```html
<div class="reset">
    <div class="counter">我是王小二
        <div class="reset">
            <div class="counter">我是王小二的大儿子</div>
            <div class="counter">我是王小二的二儿子
                <div class="reset">
                    <div class="counter">我是王小二的二儿子的大孙子</div>
                    <div class="counter">我是王小二的二儿子的二孙子</div>
                    <div class="counter">我是王小二的二儿子的小孙子</div>
                </div>
            </div>
            <div class="counter">我是王小二的三儿子</div>
        </div>
    </div>
    <div class="counter">我是王小三</div>
    <div class="counter">我是王小四
        <div class="reset">
            <div class="counter">我是王小四的大儿子</div>
        </div>
    </div>
</div>
```


### [currentColor-CSS3超高校级好用CSS变量](https://www.zhangxinxu.com/wordpress/2014/10/currentcolor-css3-powerful-css-keyword/)

```css
.link:hover {
    color: #333;
}

/* 虽然改变的是文字颜色，但是图标颜色也一起变化了 */
```


### [CSS3/SVG clip-path路径剪裁遮罩属性简介](https://www.zhangxinxu.com/wordpress/2014/12/css3-svg-clip-path/)

```css
.clip-me {
    /* 被抛弃的剪裁 */
    position: absolute;
    /* absolute或fixed定位是必须的 */
    clip: rect(30px 200px 200px 20px);
    /* 或"auto" */

    /* 如今的剪裁 (无需定位属性) */
    clip-path: inset(30px 200px 200px 20px);
    /* 或"none" */
}
```


### [纯 CSS 实现一个计时器](https://juejin.cn/post/7222575963564212280)

> 因为--num并不支持过渡动画。如果利用 CSS property，

```css
@property --num {
    syntax: '<integer>';
    inherits: false;
    initial-value: 0;
}

span::after {
    transition: 1s --num;
}

@keyframes num {
    to {
        --num: 10
    }
}

span {
    animation: num 1s infinite steps(10);
}
```


### [fontforge制作自定义字体及在手机上应用举例](https://www.zhangxinxu.com/wordpress/2011/11/fontforge%e8%87%aa%e5%ae%9a%e4%b9%89%e6%89%8b%e6%9c%ba%e5%ad%97%e4%bd%93/)


### [翻译 – CSS3 Backgrounds相关介绍](https://www.zhangxinxu.com/wordpress/2011/05/%e7%bf%bb%e8%af%91-css3-backgrounds%e7%9b%b8%e5%85%b3%e4%bb%8b%e7%bb%8d/)

> backgrounds


### [CSS/CSS3长度、时间、频率、角度单位大全](https://www.zhangxinxu.com/wordpress/2011/03/css-css3-unit-units/)


### [style标签下的CSS代码的显示与实时编辑](https://www.zhangxinxu.com/wordpress/2011/03/style%e6%a0%87%e7%ad%be%e4%b8%8b%e7%9a%84css%e4%bb%a3%e7%a0%81%e7%9a%84%e6%98%be%e7%a4%ba%e4%b8%8e%e5%ae%9e%e6%97%b6%e7%bc%96%e8%be%91/)

```html
<style contenteditable>
    .test_image {
        padding: 3px;
        border: 1px solid #ccc;
        background-color: #fff;
    }
</style>
```

```css
style[contenteditable] {
    ...
}
```


### [使用CSS3 ::selection伪元素改变文本选中颜色](https://www.zhangxinxu.com/wordpress/2010/10/css-css3-selection-range/)

```css
::selection {
    background: #d3d3d3;
    color: #555;
}
```


### [无JavaScript纯CSS实现选项卡轮转切换效果](https://www.zhangxinxu.com/wordpress/2010/09/%e6%97%a0javascript%e5%ae%9e%e7%8e%b0%e9%80%89%e9%a1%b9%e5%8d%a1%e8%bd%ae%e8%bd%ac%e5%88%87%e6%8d%a2%e6%95%88%e6%9e%9c/)


### [精简高效的CSS命名准则/方法](https://www.zhangxinxu.com/wordpress/2010/09/%e7%b2%be%e7%ae%80%e9%ab%98%e6%95%88%e7%9a%84css%e5%91%bd%e5%90%8d%e5%87%86%e5%88%99%e6%96%b9%e6%b3%95/)

> 此“三无原则”就是：无ID，无层级，无标签


### [CSS content内容生成技术以及应用](https://www.zhangxinxu.com/wordpress/2010/04/css-content%e5%86%85%e5%ae%b9%e7%94%9f%e6%88%90%e6%8a%80%e6%9c%af%e4%bb%a5%e5%8f%8a%e5%ba%94%e7%94%a8/)

```css
/* 为多语言内容插入正确的引号 */
/* 为不同语言指定引号的表现 */
:lang(en)>q {
    quotes: '"''"';
}

:lang(no)>q {
    quotes: "«""»";
}

:lang(ch)>q {
    quotes: "“""”";
}

/* 在q标签的前后插入引号 */
q:before {
    content: open-quote;
}

q:after {
    content: close-quote;
}

/* 用图片替换文字 */
div.logo {
    content: url(logo.png);
}

/* 使用属性值作为content内容 */
a:after {
    content: "("attr(href) ")";
}
```


### [CSS渐变之CSS3 gradient在Firefox3.6下的使用](https://www.zhangxinxu.com/wordpress/2010/04/css%e6%b8%90%e5%8f%98%e4%b9%8bcss3-gradient%e5%9c%a8firefox3-6%e4%b8%8b%e7%9a%84%e4%bd%bf%e7%94%a8/)

> gradient 线性渐变


### [JS HEX十六进制与RGB, HSL颜色的相互转换](https://www.zhangxinxu.com/wordpress/2010/03/javascript-hex-rgb-hsl-color-convert/)


### [还有完没完，怎么又来了个 scrollbar-gutter？](https://www.zhangxinxu.com/wordpress/2022/01/css-scrollbar-gutter/)

```css
:root {
    scrollbar-gutter: stable;
}
```


### [css选择器:nth-child()的用法](https://blog.csdn.net/cdgogo/article/details/109047819)

```css
/* 选择第n个，n位数字  */
:nth-child(n)
/* 选择列表中的偶数标签 */
:nth-child(2n)
/*选择列表中的奇数标签 */
:nth-child(2n-1)

/*选择前几个元素 */
/*【负方向范围】选择第1个到第6个 */
:nth-child(-n+6) {}

/*从第几个开始选择*/
/*【正方向范围】选择从第6个开始的，直到最后  */
:nth-child(n+6) {}

/*两者结合使用，可以限制选择某一个范围 */
/*【限制范围】选择第6个到第9个，取两者的交集【感谢小伙伴的纠正~】 */
:nth-child(n+6):nth-child(-n+9)
/*选择列表中的倒数第n个标签 n为数字 */
:nth-last-child(n)

/*选择倒数最后n个 */
item:nth-last-child(-n+2) {}
```


### [图片旋转效果的一些研究、jQuery插件及实例](https://www.zhangxinxu.com/wordpress/2010/01/%e5%9b%be%e7%89%87%e6%97%8b%e8%bd%ac%e6%95%88%e6%9e%9c%e7%9a%84%e4%b8%80%e4%ba%9b%e7%a0%94%e7%a9%b6%e3%80%81jquery%e6%8f%92%e4%bb%b6%e5%8f%8a%e5%ae%9e%e4%be%8b/)

```html
<canvas id="cv"></canvas>
<img id="cvImg" width="128" height="96" src="mm1.jpg" />
```

```js
window.onload = function() {
    var canvas = document.getElementById("cv");
    var oImg = document.getElementById("cvImg");
    // 旋转后canvas标签的大小
    canvas.height = 128;
    canvas.width = 96;
    // 绘图开始
    var context = canvas.getContext("2d");
    context.save();
    // 改变中心点
    context.translate(96, 0);
    // 旋转90°
    context.rotate(Math.PI / 2);
    // 绘制
    context.drawImage(oImg, 0, 0, 128, 96);
    context.restore();
    oImg.style.display = "none";
};
```


### [CSS3 border-image详解、应用及jQuery插件](https://www.zhangxinxu.com/wordpress/2010/01/css3-border-image/)

> border-image


### css zoom 放大


### [今天学习SVG滤镜feGaussianBlur和feDropShadow](https://www.zhangxinxu.com/wordpress/2024/04/svg-filter-fegaussianblur-fedropshadow/)

```html
<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg">
    <filter id="gaussianBlur1">
        <feGaussianBlur stdDeviation="1" />
    </filter>
    <filter id="gaussianBlur2">
        <feGaussianBlur stdDeviation="5" />
    </filter>
    <filter id="gaussianBlur3" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="10" />
    </filter>

    <circle cx="100" cy="100" r="50" style="filter: url(#gaussianBlur1);" />
    <circle cx="100" cy="100" r="50" style="filter: url(#gaussianBlur2); transform: translateX(140px);" />
    <circle cx="100" cy="100" r="50" style="filter: url(#gaussianBlur3); transform: translateX(280px);" />
</svg>
```


### [SVG滤镜系列之搞懂<feBlend>元素](https://www.zhangxinxu.com/wordpress/2024/04/svg-filter-feblend/)

```css
mix-blend-mode: normal; //正常
mix-blend-mode: multiply; //正片叠底
mix-blend-mode: screen; //滤色
mix-blend-mode: overlay; //叠加
mix-blend-mode: darken; //变暗
mix-blend-mode: lighten; //变亮
mix-blend-mode: color-dodge; //颜色减淡
mix-blend-mode: color-burn; //颜色加深
mix-blend-mode: hard-light; //强光
mix-blend-mode: soft-light; //柔光
mix-blend-mode: difference; //差值
mix-blend-mode: exclusion; //排除
mix-blend-mode: hue; //色相
mix-blend-mode: saturation; //饱和度
mix-blend-mode: color; //颜色
mix-blend-mode: luminosity; //亮度
```


### [CSS Nesting嵌套与@scope规则也太雷同了吧？](https://www.zhangxinxu.com/wordpress/2024/03/css-nesting-scope-rules/)

> @scope


### [CSS initial-letter属性，嗯……也就这样吧](https://www.zhangxinxu.com/wordpress/2024/03/css-initial-letter/)

```css
initial-letter: normal;

/* 数值 */
initial-letter: 1.5;
/* 首字母占据1.5行 */
initial-letter: 3;
/* 首字母占据3行 */
initial-letter: 3 2;
/* 首字母占据3行，下沉2行 */
```


### [CSS @scope他来了](https://www.zhangxinxu.com/wordpress/2024/01/css-at-scope/)

> @scope


### [不使用font-weight等CSS实现文字变瘦或变胖效果](https://www.zhangxinxu.com/wordpress/2024/05/svg-femorphology-font-weight-thin-stretch/)

```html
<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
    <filter id="erode">
        <feMorphology operator="erode" radius="1" />
    </filter>
    <filter id="dilate">
        <feMorphology operator="dilate" radius="1" />
    </filter>
</svg>

<h4>苗条</h4>
<data class="erode">《CSS新世界》</data>
<h4>体胖</h4>
<data class="dilate">《CSS新世界》</data>
```

```css
data {
    font-size: 2.5rem;
}

.erode {
    filter: url(#erode);
}

.dilate {
    filter: url(#dilate);
}
```


### [justify-self](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-self)


### [justify-items](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-items)


### [justify-content](https://developer.mozilla.org/zh-CN/docs/Web/CSS/justify-content)


### [告别JS浮层，全新的CSS Anchor Positioning锚点定位API](https://www.zhangxinxu.com/wordpress/2024/06/css-anchor-positioning-api/)

> @position-try inset-area anchor position-visibility


### [CSS transition-behavior让display none也有动画效果](https://www.zhangxinxu.com/wordpress/2024/06/css-transition-behavior/)

```css
transition-behavior: allow-discrete;
transition-behavior: normal;
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


### [今日学习CSS文本自定义高亮API](https://www.zhangxinxu.com/wordpress/2024/07/css-custom-highlight-api/)

```css
::highlight(tel-highlight) {
    background-color: currentColor;
}
```

```html
<p id="p">如有疑问可以WX加13208033621或者15812345678咨询。</p>
```

```js
// 文本字符内容
const str = p.textContent;
// 手机号起始索引值
const arrIndex = str.match(/1\d{10}/g).map(tel => str.indexOf(tel));
// 创建range数组
const arrRange = arrIndex.map(start => {
    const range = new Range();
    range.setStart(p.firstChild, start + 3);
    range.setEnd(p.firstChild, start + 7);

    return range;
});

// 定义高亮
const highlight = new Highlight(...arrRange.flat());
// 注册高亮
CSS.highlights.set("tel-highlight", highlight);
```


### [rgb()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value/rgb)

```css
:root {
    --base-color: orange;
    /* 等价于 rgb(255 165 0) */
}

#one {
    background-color: var(--base-color);
}

#two {
    background-color: rgb(from var(--base-color) calc(r - 76.5) g calc(b + 76.5));
    /* 76.5 是 255 的 30%  */
}

#three {
    background-color: rgb(from var(--base-color) calc(r - 153) g calc(b + 153));
    /* 153 是 255 的 60% */
}

/*  使用 @supports 添加对旧语法的支持，该语法要求在计算中将 r g b 值指定为百分比（带单位）。
    这对于 Safari 16.4+ 是必需的。 */
@supports (color: rgb(from red r g calc(b + 30%))) {
    #two {
        background-color: rgb(from var(--base-color) calc(r - 30%) g calc(b + 30%));
    }

    #three {
        background-color: rgb(from var(--base-color) calc(r - 60%) g calc(b + 60%));
    }
}
```


### [页面级可视动画View Transitions API初体验](https://www.zhangxinxu.com/wordpress/2024/08/view-transitions-api/)

```
::view-transition
├─ ::view-transition-group(root)
│  └─ ::view-transition-image-pair(root)
│     ├─ ::view-transition-old(root)
│     └─ ::view-transition-new(root)
│ /* 等等... */
```

```css
img {
    view-transition-name: wooo;
}

::view-transition-new(wooo) {
    animation: scaleUp 1s;
}

@keyframes scaleUp {
    from {
        transform: scale(0.1);
    }

    to {
        transform: scale(1);
    }
}
```

```js
document.startViewTransition(() => {
    dom.remove();
});
```


### css-loader 不检查行内式

### [:nth-child()](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-child#%E9%80%89%E6%8B%A9%E5%99%A8%E7%A4%BA%E4%BE%8B)


### [@container](https://developer.mozilla.org/en-US/docs/Web/CSS/@container)

```css
@container (width > 400px) {
    h2 {
        font-size: 1.5em;
    }
}

/* with an optional <container-name> */
@container tall (height > 30rem) {
    h2 {
        line-height: 1.6;
    }
}

/* multiple queries in a single condition */
@container (width > 400px) and style(--responsive: true) {
    h2 {
        font-size: 1.5em;
    }
}

/* condition list */
@container card (width > 400px),
style(--responsive: true) {
    h2 {
        font-size: 1.5em;
    }
}
```


### [不能落后，好好缕缕CSS滚动动画](https://www.zhangxinxu.com/wordpress/2024/08/css-scroll-timeline/)

```css
section {
    --flag: false;
    animation: setFlag 1ms;
    scroll-timeline: --detectScroll;
    animation-timeline: --detectScroll;
}

@keyframes setFlag {

    from,
    to {
        --flag: true;
    }
}

@container style(--flag: true) {

    /* 容器溢出 */
    button {
        display: block;
    }
}
```


### [好消息，align-content垂直居中也适用普通元素啦](https://www.zhangxinxu.com/wordpress/2024/09/css-align-content/)

```html
<ul>
    <li>《HTML并不简单》这本书不错</li>
    <li>感谢正版支持《CSS新世界》</li>
</ul>
```

```css
ul {
    height: 150px;
    border: solid;
    align-content: center;
}
```


### [时隔两年，Chrome也支持round等CSS数学函数了](https://www.zhangxinxu.com/wordpress/2024/09/css-math-round-function/)

> mod()函数 rem()函数


### 左边开始点点点

```css
/* 左边开始点点点 */
div {
    display: block;
    width: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    direction: rtl
}
```


### [Nice! Safari也支持CSS @property规则了](https://www.zhangxinxu.com/wordpress/2024/10/css-at-perporty-rule/)

```css
@property --seed {
    syntax: "<integer>";
    inherits: true;
    initial-value: 0;
}

@keyframes seed {
    from {
        --seed: 0;
    }

    to {
        --seed: 100;
    }
}
```


### sass遍历创建class

```scss
@function distance-width($idx) {

    @return $idx * 5px;

}

@for $i from 1 through 20 {

    .mt-#{$i * 5} { margin-top: distance-width($i) };
    .mb-#{$i * 5} { margin-bottom: distance-width($i) };
    .ml-#{$i * 5} { margin-left: distance-width($i) };
    .mr-#{$i * 5} { margin-right: distance-width($i) };
    .mar-#{$i * 5} { margin: distance-width($i) };
    .pt-#{$i * 5} { padding-top: distance-width($i) };
    .pb-#{$i * 5} { padding-bottom: distance-width($i) };
    .pl-#{$i * 5} { padding-left: distance-width($i) };
    .pr-#{$i * 5} { padding-right: distance-width($i) };

}
```


### [用纯 CSS 实现网格背景](https://spacexcode.com/blog/pure-css-grid-line/)

```css
{
    background-size: 20px 20px;
    background-position: center center;
    background-image: linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px);
    -webkit-mask-image: linear-gradient(to bottom, transparent, #fff 50px calc(100% - 50px), transparent), linear-gradient(to right, transparent, #fff 50px calc(100% - 50px), transparent);
    mask-image: linear-gradient(to bottom, transparent, #fff 50px calc(100% - 50px), transparent), linear-gradient(to right, transparent, #fff 50px calc(100% - 50px), transparent);
    mask-composite: intersect;
    -webkit-mask-composite: source-in, xor;
}
```


### [这啥? CSS calc-size和interpolate-size, 真学不动了](https://www.zhangxinxu.com/wordpress/2024/11/css-calc-interpolate-size/)

> calc-size() interpolate-size


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


### [混合图片](https://styleof.com/s/remix-yourself)


### [CSS可以制作动画的令人惊讶的事情](https://codersblock.com/blog/the-surprising-things-that-css-can-animate/)


### [哇哦，font-palette支持动画和palette-mix()混合函数了](https://www.zhangxinxu.com/wordpress/2024/12/font-palette-animation-palette-mix/)

> 字体调色板是一个 CSS 函数，用于在文本上应用调色板效果。它可以将文本的颜色转换为调色板中的颜色，从而使文本更加生动和吸引人。


### [超酷！CSS font-palette与彩色字体显示](https://www.zhangxinxu.com/wordpress/2022/07/css-font-palette/)

> 同上

### [部分关键帧](https://www.joshwcomeau.com/animation/partial-keyframes/)

> 缺少关键帧

### 左边超出点点。右边不省略

```css
.el-checkbox {
    width: 100%;
    align-items: center;
    height: 32px;
    display: flex;
    flex-wrap: nowrap;
}

/deep/ .el-checkbox__label {
    display: flex;
    flex: 1;
    overflow: hidden;
}

.left {
    flex: 0 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
}

.right {
    flex: 0 0 auto;
    opacity: 0.5;
}
```

### [100 字节的 CSS，几乎在所有地方看起来都很棒](https://www.swyx.io/css-100-bytes)

```css
html {
    max-width: 70ch;
    padding: 3em 1em;
    margin: auto;
    line-height: 1.75;
    font-size: 1.25em;
}
```

### [90 年代的光标效果](https://tholman.com/cursor-effects/)

### [CSS小图标剪裁终极解决方案clip-path shape()函数](https://www.zhangxinxu.com/wordpress/2025/06/css-clip-path-shape/)

> shape

### [aspect-ratio](https://jakearchibald.com/2022/img-aspect-ratio/)

> aspect-ratio 保持比例 object-fit

### [Tailwind CSS 或 Bootstrap 浏览器扩展](https://gimli.app/)

### [使用新的 if() 函数的 CSS 条件语句](https://developer.chrome.com/blog/if-article?hl=zh-cn)

```html
<div class="container">
    <div class="card" data-status="pending">
    </div>

    <div class="card" data-status="complete">
    </div>

    <div class="card" data-status="pending">
    </div>

    <div class="card" data-status="complete">
    </div>

    <div class="card" data-status="inactive">
    </div>

    <div class="card" data-status="complete">
    </div>
</div>
```

```css
.card {
    --status: attr(data-status type(<custom-ident>));
    border-color: if(style(--status: pending): royalblue;
            style(--status: complete): seagreen;
            else: gray);
    background-color: if(style(--status: pending): #eff7fa;
            style(--status: complete): #f6fff6;
            else: #f7f7f7);
}
```

### [font-size-adjust 很有用](https://matklad.github.io/2025/07/16/font-size-adjust.html)
```css
font-size-adjust: ex-height 0.5,
```

### [CSS索引和数量匹配函数sibling-index sibling-count简介](https://www.zhangxinxu.com/wordpress/2025/08/css-sibling-index-count/)
```html
<div class="loading">
    <i></i><i></i><i></i><i></i>
</div>
```
```css
.loading i {
  display: inline-block;
  border-left: 2px solid deepskyblue;
  height: 2px;
  animation: scaleUp 1s linear infinite alternate;
  margin: 0 1px;
  animation-delay: calc(-0.25s * sibling-index());
}

@keyframes scaleUp {
    to { transform: scaleY(10); }
}
```

### [这个有点屌CSS @container scroll-state容器滚动查询](https://www.zhangxinxu.com/wordpress/2025/08/css-container-scroll-state/)

```css
.container {
    height: 300px;
    border: 1px solid;
    container-type: scroll-state;
    overflow: auto;

    /* 底部粘性定位 */
    footer {
        background: #f6f6f6;
        position: sticky;
        bottom: 0;
        text-align: center;
    }

    button {
        width: 100px;
        height: 32px;
        border-radius: 12px;
        background-color: crimson;
        color: white;
        cursor: pointer;
    }
}

@container scroll-state(scrollable: bottom) {

    /* 如果容器可以滚动，则按钮样式禁用 */
    button {
        filter: grayscale(1);
        opacity: .35;
    }
}
```

### [容器类型](https://developer.mozilla.org/en-US/docs/Web/CSS/container-type)

```css
/* Keyword values */
container-type: normal;
container-type: size;
container-type: inline-size;
container-type: scroll-state;

/* Two values */
container-type: size scroll-state;

/* Global Values */
container-type: inherit;
container-type: initial;
container-type: revert;
container-type: revert-layer;
container-type: unset;
```

### [你能被 CSS 攻击吗？](https://scotthelme.co.uk/can-you-get-pwned-with-css/)

### [抢先学习大开眼界的CSS corner-shape属性](https://www.zhangxinxu.com/wordpress/2025/08/css-corner-shape/)

> corner-shape

### [@function自定义函数让CSS支持编程啦](https://www.zhangxinxu.com/wordpress/2025/09/css-function-at-rules/)

```css
/* 返回当前值的负值 */
@function --negate(--value) {
    result: calc(-1 * var(--value));
}

aside {
    --size: 999em;
    padding-bottom: var(--size);
    margin-bottom: --negate(var(--size));
}
```

### [使用CSS linear()函数实现更逼真的物理动画效果](https://www.zhangxinxu.com/wordpress/2025/09/css-animation-liner-function/)

```css
:root {
    --bounce-ease-out-easing: linear(0, 0.004, 0.016, 0.035, 0.062, 0.098, 0.141, 0.191, 0.25 24.2%, 0.39, 0.562, 0.765, 1 48.5%, 0.943, 0.893, 0.851, 0.816, 0.788, 0.768, 0.755, 0.75, 0.753, 0.763, 0.782, 0.809, 0.844, 0.888, 0.94, 1, 0.972);
}
```

### [CSS scroll-target-group加:target-current滚动菜单自动高亮](https://www.zhangxinxu.com/wordpress/2025/09/css-scroll-target-group/)

```html
<menu>
    <li><a href="#intro">前言</a></li>
    <li><a href="#ch1">第1章</a></li>
    <li><a href="#ch2">第2章</a></li>
</menu>

<article>
    <h1>欢迎来到我的博客</h1>
    <section id="intro">...</section>
    <section id="ch1">...</section>
    <section id="ch2">...</section>
</article>
```

```css
menu {
    position: fixed;
    scroll-target-group: auto;
}

a:target-current {
    color: red;
}
```

### [CSS random()](https://webkit.org/blog/17285/rolling-the-dice-with-css-random/)

### [浏览器中的液态玻璃：使用 CSS 和 SVG 实现折射](https://kube.io/blog/liquid-glass-css-svg/)

### ["最令人讨厌"的 CSS 特性：cos()和 sin()](https://css-tricks.com/the-most-hated-css-feature-cos-and-sin/)

### [CSS field-sizing属性简介](https://www.zhangxinxu.com/wordpress/2025/10/css-field-sizing/)

```css
/* 无论是单行输入框，还是多行文本域，其宽度在内容输入的时候，都是固定的，如果希望尺寸跟着内容的宽度走 */
input {
    field-sizing: content
}
```

### [写给自己看的display: grid布局教程](https://www.zhangxinxu.com/wordpress/2018/11/display-grid-css-css3/?shrink=1)

> 1fr

### [CSS reading-flow和reading-order属性简介](https://www.zhangxinxu.com/wordpress/2025/10/css-reading-flow-order/)

> reading-flow reading-order

### [一个学习 CSS 相对颜色的交互式指南。](https://ishadeed.com/article/css-relative-colors/)

> 这个交互式指南展示了如何使用 CSS 相对颜色。它还包括了一些示例，帮助你理解相对颜色的工作原理。

### [CSS锚点定位实战-鼠标跟随交互效果](https://www.zhangxinxu.com/wordpress/2025/11/css-anchor-position-mouse-follow/)

> anchor-name position-anchor anchor

### [CSS 详情目标内容打开](https://www.zhangxinxu.com/wordpress/2025/11/css-details-target-content-open/)

> 这个简单的 CSS 技巧允许你在点击详情元素时打开其关联的内容。它利用了 details 元素的默认行为，无需 JavaScript 即可实现。


### [Kickass markdown 🤩](https://github.com/Olwiba/Kickass-markdown)

### [pretext与文字四面环绕效果的实现](https://www.zhangxinxu.com/wordpress/2026/05/pretext-text-around/)

> 使用 Pretext JavaScript 库实现文字完整环绕浮动元素的布局效果，支持矩形环绕和非透明像素轮廓环绕

```diff
+ this text is highlighted in green
- this text is highlighted in red
```

```CSS
Some text in green ! 123
```

```P4
Some text in blue! 123
```

```Mint
Some text in blue with additional keyword highlighting! 123
```

```robots.txt
some text in light blue! 123

```
```EBNF
Some text in purple! 123
```

```mupad
Some text in purple with additional keyword highlighting! 123
```

```Mathematica
Some text in orange! 123
```

```REXX
Some text in orange with additional keyword highlighting! 123
```

```Nix
Some text in orange with additional keyword highlighting! 123
```

```POV-Ray SDL
some text in red!

```
```RobotFramework
Some text in light red! 123
```

```JSON
Some text highlighted in red! 123
```

<samp>Monospaced text</samp>
<ins>Underlined text</ins>
<table><tr><td>Boxed text</td></tr></table>
<details>

<summary>Item summary with dropdown</summary>

Dropdown content (supports **markdown** ~~yay!~~)

```json
{
  awesome: "true"
}
```

</details>

__*Italic-bold*__

Superscript<sup>TM</sup>

Superscript-italic<sup>*tm*</sup>

Subscript<sub>x</sub>

Subscript-bold<sub>**min**</sub>

~~__*Italic-bold-strikethrough*__~~

> markdown的一些进阶用法


### [CSS文字和背景color自动配色技术简介](https://www.zhangxinxu.com/wordpress/2018/11/css-background-color-font-auto-match/)

```css
:root {
    /* 定义RGB变量 */
    --red: 44;
    --green: 135;
    --blue: 255;
    /* 文字颜色变色的临界值，建议0.5~0.6 */
    --threshold: 0.5;
    /* 深色边框出现的临界值，范围0~1，推荐0.8+*/
    --border-threshold: 0.8;
}

.btn {
    /* 按钮背景色就是基本背景色 */
    background: rgb(var(--red), var(--green), var(--blue));

    /**
   * 使用sRGB Luma方法计算灰度（可以看成亮度）
   * 算法为：
   * lightness = (red * 0.2126 + green * 0.7152 + blue * 0.0722) / 255
  */
    --r: calc(var(--red) * 0.2126);
    --g: calc(var(--green) * 0.7152);
    --b: calc(var(--blue) * 0.0722);
    --sum: calc(var(--r) + var(--g) + var(--b));
    --lightness: calc(var(--sum) / 255);

    /* 设置颜色 */
    color: hsl(0, 0%, calc((var(--lightness) - var(--threshold)) * -999999%));

    /* 确定边框透明度 */
    --border-alpha: calc((var(--lightness) - var(--border-threshold)) * 100);
    /* 设置边框相关样式 */
    border: .2em solid;
    border-color: rgba(calc(var(--red) - 50), calc(var(--green) - 50), calc(var(--blue) - 50), var(--border-alpha));
}
```


### [全新的CSS相对颜色语法-使用from和calc()](https://www.zhangxinxu.com/wordpress/2024/12/css-relative-color-from-calc/)

> 相对颜色语法是一种新的CSS颜色语法，它允许您使用from关键字来指定一个颜色作为基准，然后使用calc()函数来计算相对于基准颜色的新颜色。
> 颜色相对


### [跳转链接时，关键字颜色改变](https://alfy.blog/2024/10/19/linking-directly-to-web-page-content.html)

>

```
https://example.com/page.html#:~:text=[prefix-,]textStart[,textEnd][,-suffix]
```


### [现代 CSS 重置](https://www.joshwcomeau.com/css/custom-css-reset/)

```css
/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    margin: 0;
}

body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
    display: block;
    max-width: 100%;
}

input,
button,
textarea,
select {
    font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
}

p {
    text-wrap: pretty;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    text-wrap: balance;
}

#root,
#__next {
    isolation: isolate;
}
```


### [一个简单实用的在线色轮工具，不同颜色对应的昵称](https://github.com/arantius/web-color-wheel)

chartreuse   #7FFF00

>>> 一个简单的颜色选择器，用于在网页上选择颜色。


### [不要搞混了，不是text而是CSS font-size-adjust属性](https://www.zhangxinxu.com/wordpress/2025/02/css-font-size-adjust/)

```css
/* 关键字值 */
font-size-adjust: none;

/* 单值：数值或者from-font */
font-size-adjust: 0.5;
font-size-adjust: from-font;

/* 两个值 */
font-size-adjust: ex-height 0.5;
font-size-adjust: ch-width from-font;
```


### [终于等到了，CSS offset-path全浏览器全支持](https://www.zhangxinxu.com/wordpress/2025/03/css-offset-path/)

> offset-path


### [Overflow Clip](https://ishadeed.com/article/overflow-clip/)

> 滚动加动画

```css
     @supports (animation-timeline: scroll()) and (animation-range: 0% 100%) {
         ._row_1s1x6_17 svg {
             animation: _pages-default_1s1x6_1 linear both;
             animation-timeline: --row-a;
             animation-range-start: 10%;
             animation-duration: 1ms;
             transform: translate(-150px)
         }
     }

     ._row_1s1x6_17 circle {
         fill: #9370db
     }

     @keyframes _pages-default_1s1x6_1 {
         to {
             transform: translate(500px)
         }
     }
```


### 1个颜色控制3个颜色

```css
--styleColor: #465085;
color: hsl(from var(--styleColor) h s calc((l - 62.8)* -999999));
border-color: hsl(from var(--styleColor) h s calc(l - 20* clamp(-1, calc(l - 50), 1)));
}
```


### [focus-within](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-within)

> 子控制父 focus-within


### [一种更好的文字隐藏的方法-::first-line伪元素](https://www.zhangxinxu.com/wordpress/2025/03/css-first-line-hidden-text/)

> css text 优先级


### [【vite项目配置新版scss踩坑指南】](https://blog.csdn.net/weixin_43057892/article/details/145117135)

> additionalData 可以多行引用

```json
// vite.config.js
css: {
    preprocessorOptions: {
        scss: {
            additionalData: `
                  @use '../../../common/scss/variables' as *;
                  @use '../../../common/scss/mixins/breakpoints' as *;
              `,
        },
    },
},
```


### [在部分SASS文件中，如何使用父文件中定义的变量？](https://cloud.tencent.com/developer/ask/sof/107716085)

```scss
@use 'variables'as v;
// @forward 'variables'; // doesn't work
@use 'layout';
```

```scss
h1 {
    color: v.$mainHeaderColor;
}
```


### [告别transform，是时候直接使用scale, rotate属性啦](https://www.zhangxinxu.com/wordpress/2025/04/css-scale-rotate-translate/)


### [纯CSS 中的树视图](https://iamkate.com/code/tree-views/)

> 树视图（可折叠列表）可以仅使用 HTML 和 CSS 创建，而无需 JavaScript。辅助功能软件会将树状视图视为嵌套在披露窗口小部件中的列表，并且自动支持标准键盘交互。


### 字体推荐

```css
@import url('https://fonts.bunny.net/css?family=averia-serif-libre|inter|merriweather-sans|noto-serif-tc');

.entry-title {
    font-family: 'Averia Serif Libre', 'Noto Serif TC', serif;
}
```


### [纯css实现的小组件](http://youmightnotneedjs.com/)


### [CSS animation-composition可以让动画效果累加](https://www.zhangxinxu.com/wordpress/2025/05/css-animation-composition/)


### [CSS 实现自动换行、强制换行、强制不换行的属性](https://www.cnblogs.com/yaohe/articles/9947221.html)

> word-wrap word-break white-space overflow-wrap
> 这几个属性都是用来控制文本的换行行为的。
> word-wrap 属性用于控制在单词内进行换行。
> word-break 属性用于控制在单词之间进行换行。


### [震惊，有生之年居然看到CSS attr()全属性支持](https://www.zhangxinxu.com/wordpress/2025/05/css-attr-function/)

> 因为image-set()函数是唯一支持字符串作为图片URL的函数。

```html
<a href="https://image.zhangxinxu.com/image/study/s/hanyun.jpg">图片？</a>
<style>
    [href$="jpg"]::before {
        content: '';
        display: block;
        width: 256px;
        height: 192px;
        background: image-set(attr(href));
        background-size: cover;
    }
</style>
```


### [text-wrap进化: 支持两子属性和pretty stable新值](https://www.zhangxinxu.com/wordpress/2025/06/text-wrap-pretty-stable-mode-style/)

> text-wrap-style text-wrap


### [CSS ::scroll-button ::scroll-marker伪元素又是干嘛用的？](https://www.zhangxinxu.com/wordpress/2025/06/css-scroll-button-marker/)


### [CSS progress()函数简介](https://www.zhangxinxu.com/wordpress/2025/12/css-progress-function/)

```
progress(300, 0, 1000)的返回值就是0.3；
progress(50px, 0px, 100px)的返回值就是0.5；
progress(50%, 30%, 80%)的返回值就是……这个要计算下：(50% - 30%) / 80%，结果是0.25。
```


### [2025 Chrome DevRel CSS](https://chrome.dev/css-wrapped-2025/)


### [anchor](https://mdn.org.cn/en-US/docs/Web/CSS/anchor)

> anchor() CSS 函数可用于锚点定位元素的内边距属性值中，返回一个相对于其关联锚点元素边缘位置的长度值。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        body {
            width: 250vw;
            height: 200vh;
        }

        div {
            anchor-name: --aa;
            display: inline-block;
            /* margin-left: 100vw; */
            position: relative;
            top: 100vh;
            left: 100vw;
        }

        span {
            position-anchor: --aa;
            display: inline-block;
            position: absolute;
            margin-right: 1rem;
            position-area: left center;
            position-try-fallbacks: flip-inline flip-block;
            container-type: anchored;
        }

        /* @container anchored(fallback: flip-inline) {
      } */
    </style>
</head>

<body>
    <div>Hello World!</div>
    <span>你好</span>
</body>

</html>
```


### [scroll-snap-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Properties/scroll-snap-type)


### [瀑布流布局](https://webkit.org/blog/17660/introducing-css-grid-lanes/)

```css
.container {
    display: grid-lanes;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
}
```


### [:nth-child](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/Selectors/:nth-child#of_selector_%E8%AF%AD%E6%B3%95)

```css
:nth-child(-n + 3 of li.important) {}
```


### [DOM 中的 CSSStyleSheet 对象](https://www.zhangxinxu.com/wordpress/2026/01/dom-cssstylesheet/?shrink=1)


### [CSS 锚位置连接](https://www.zhangxinxu.com/wordpress/2026/01/css-anchor-position-connect/)


### [CSS子元素撑满父元素（height: 100%无效）](https://blog.csdn.net/weixin_43260489/article/details/123383866)

```css
.parent {
    position: relative;
}

.child {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
}
```


### [CSS 动画数字计数器](https://css-tricks.com/animating-number-counters/)


### [交互式未来风格元素周期表 · 沉浸式化学科普 · 中英文双语支持](https://github.com/SeanWong17/Future-Style-Periodic-Table)

> 儿童


### [AirScan-QR](https://github.com/topcss/AirScan-QR)

> AirScan-QR 是一款专为物理隔离环境 (Air-gapped) 及 跨端受限网络 设计的高效文件传输方案。它通过动态二维码序列流，利用“屏幕+摄像头”的视觉链路，彻底打破物理与协议的边界。


### [点击图片放大查看交互效果的最佳实现](https://www.zhangxinxu.com/wordpress/2026/02/image-preview-best-practice/)

> viewTransitionName

```html
<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
        /* img {
        animate: fadeIn 1s both;
      }
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      } */
        ::view-transition-group(root) {
            animation-duration: 3s;
        }

        /* img {
        view-transition-name: wooo;
      }
      ::view-transition-new(wooo) {
        animation: scaleUp 1s;
      }
      @keyframes scaleUp {
        from {
          transform: scale(0.1);
        }
        to {
          transform: scale(1);
        }
      } */
    </style>
</head>

<body>
    <h4 class="fill">使用View Transitions</h4>
    <button id="b2">添加图片</button>
    <script>
        const src = "../../static/1.jpg";
        //   b1.onclick = function () {
        //     const img = new Image();
        //     img.src = src;

        //     this.after(img);
        //   };

        b2.onclick = function() {
            const img = new Image();
            img.src = src;
            // img.style.viewTransitionName = "wooo";

            img.onclick = (e) => {
                // img.style.viewTransitionName = "root";

                document.startViewTransition(() => {
                    img.remove();
                });
            };
            document.startViewTransition(() => {
                this.after(img);
                //   setTimeout(() => {
                //     img.style.viewTransitionName = "";
                //   }, 1000);
            });
        };
    </script>
</body>

</html>
```


### [HTML interestfor属性与悬停popover交互效果](https://www.zhangxinxu.com/wordpress/2026/03/css-interestfor-invoker-target-source/)

```html
<a href interestfor="markTarget">Hover Me！</a>
<p id="markTarget">鼠标经过链接后我高亮</p>
<style>
    p:interest-target {
        background-color: yellow;
    }
</style>
```


### [基础CSS即可满足需求](https://www.zolkos.com/2025/12/03/vanilla-css-is-all-you-need)




### [CSS Doodle clip-path 多边形形状与数学函数](https://yuanchuan.dev/polygon-shapes)

&gt; 通过 CSS Doodle 的 @shape() 函数和 clip-path 属性，使用三角函数创建各种多边形、面具、动物等有趣形状

### [Polishing typography with line height units](https://webkit.org/blog/16831/line-height-units/)

&gt; 介绍 WebKit 新增的 `lh` 和 `rlh` CSS 单位，让文字间距与排版节奏完美对齐

### 隐藏-spin-button样式

```css
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
```

### [如何让文字作为CSS背景图片显示](https://www.zhangxinxu.com/wordpress/2020/10/text-as-css-background-image/)

&gt; 利用 SVG 内联技术将文字转换为背景图，可用于水印、输入框占位符提示等场景

### [CSS corner-shape与背景底纹技术](https://www.zhangxinxu.com/wordpress/2026/03/css-corner-shape-background-pattern/)

&gt; 结合 CSS corner-shape 属性与 SVG foreignObject 实现网格、星星等背景纹理图案

### [CSS六边形头像的实现与蜂巢布局](https://www.zhangxinxu.com/wordpress/2026/04/css-pyramidal-grid/)

&gt; 使用 CSS corner-shape、Grid 布局和三角函数实现六边形头像与全自动蜂巢布局
