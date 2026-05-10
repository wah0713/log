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


