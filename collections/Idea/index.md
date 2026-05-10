### 单一职责原则
### 最小知识原则
### 里氏代换原则

### [面向对象七大设计原则之开放封闭原则](https://blog.csdn.net/nanyupeng/article/details/125680281)

### [面向对象七大设计原则之单一职责原则](https://blog.csdn.net/nanyupeng/article/details/125680185)

### [面向对象七大设计原则之依赖倒置原则](https://blog.csdn.net/nanyupeng/article/details/125680346)

### [面向对象七大设计原则之里氏替换原则](https://blog.csdn.net/nanyupeng/article/details/125680402)

### [面向对象七大设计原则之接口隔离原则](https://blog.csdn.net/nanyupeng/article/details/125680483)

### [面向对象七大设计原则之组合复用原则](https://blog.csdn.net/nanyupeng/article/details/125680516)

### [面向对象七大设计原则之迪米特原则](https://blog.csdn.net/nanyupeng/article/details/125680543)
### [动图生成器](https://sorry.xuty.tk/wangjingze/)


### [公网资源(访问者) 访问 私网资源(被访问者)](https://blog.csdn.net/xiaoyuer_2020/article/details/125184448)

has been blocked by CORS policy: The request client is not a secure context and the resource is in..


### [使用AbortController abort中断原生fetch或axios请求](https://www.zhangxinxu.com/wordpress/2023/01/fetch-abortcontroller-abort-fetch-axios/)


### [前端重新部署如何通知用户刷新网页？](https://juejin.cn/post/7185451392994115645)


### leetcode 鸡蛋掉落

```c
class Solution {
public:
    int calcF(int K, int T)
    {
        if (T == 1 || K == 1) return T + 1;
        return calcF(K - 1, T - 1) + calcF(K, T - 1);
    }

    int superEggDrop(int K, int N)
    {
        int T = 1;
        while (calcF(K, T) < N + 1) T++;
        return T;
    }
};
```


### [canvas 2D炫酷动效的实现套路和需要的技术积累](https://www.zhangxinxu.com/wordpress/2017/03/canvas-2d-cool-affect-skills-technology/)


### [【翻译】借助SVG实现背景透明JPG图片](https://www.zhangxinxu.com/wordpress/2017/03/transparent-jpg-svg/)


### [ES2023 来了，赶紧学起来](https://juejin.cn/post/7206302271079989308)


### [小tips:使用canvas在前端实现图片水印合成](https://www.zhangxinxu.com/wordpress/2017/05/canvas-picture-watermark-synthesis/)


### [npm语义版本(npm依赖包版本的~、>、^符号各代表什么？)](https://blog.51cto.com/u_15127697/3633383)

> npm i install   ~ > ^


### [判断文本是否溢出](https://juejin.cn/post/6844903939440115725)


### [借助Service Worker和cacheStorage缓存及离线开发](https://www.zhangxinxu.com/wordpress/2017/07/service-worker-cachestorage-offline-develop/)


### [canvas实现任意字符图形的打点或连线动画](https://www.zhangxinxu.com/wordpress/2017/12/canvas-getimagedata-letter-shape-animation/)


### [前端早读课专访](https://www.zhangxinxu.com/wordpress/2016/01/interview-of-frentend-early-reading-class/)

> 学习动力


### [文案生成](https://97wenan.com/)

> chatGPT


### [文件下载时，文件名为中文和含有特殊字符的综合解决方案](https://blog.csdn.net/weixin_42834380/article/details/103633387)


### [压力测试node](https://juejin.cn/post/7224341322612621369)

```bash
npm i autocannon -g
```


### [寥寥数行SVG实现圆环loading或倒计时效果](https://www.zhangxinxu.com/wordpress/2015/07/svg-circle-loading/)

> stroke-dasharray


### [el-table固定列el-popover出现多个](https://juejin.cn/post/7028092685172867080)


### [new Date() 我忍你很久了！](https://juejin.cn/post/7221884988492382267)

> Date缺点

### [大专前端，三轮面试，终与阿里无缘](https://juejin.cn/post/7239715208792342584)

### [2.5d的地图](https://juejin.cn/pin/7251483543074357307#comment)

> https://map.seu.edu.cn/#/home


### [Linux系统下shell之history 关于清除 -c 和部分删除 .bash_history && history -r 的确切使用](https://blog.csdn.net/jagel_95/article/details/115003040)

> history


### [翻译 – 从心理学角度看UX设计](https://www.zhangxinxu.com/wordpress/2010/05/%e7%bf%bb%e8%af%91-%e4%bb%8e%e5%bf%83%e7%90%86%e5%ad%a6%e8%a7%92%e5%ba%a6%e7%9c%8bux%e8%ae%be%e8%ae%a1/)

```
01. 人们不希望多做额外的工作或思考
02. 人是有局限性的
03. 人是会犯错滴
04. 人类的记忆是复杂的
05. 人是具有社会性的
06. 注意力
07. 人们渴求信息
08. 无意识加工
09. 人们创建心理模型
10. 视觉系统

```


### [P-R-E-P原则：工作中有效沟通的4个步骤](https://zhuanlan.zhihu.com/p/69990560)

```
PREP
一、先说结论（Point）
二、引用数据（Reason）
三、举个栗子（example）
四、重申结论（Point）
```


### [给我实现一个前端的 Excel 导入和导出功能](https://juejin.cn/post/7135945969425711111)

> xlsx


### [rel='noopener noreferrer' 知多少](https://juejin.cn/post/6844904116892745735)


### [SU7，启动！尝试还原了 SU7 网页的炫酷特效](https://juejin.cn/post/7352762271003017252)


### [【译】3种解决CORS错误的方式与Access-Control-Allow-Origin的作用原理](https://segmentfault.com/a/1190000022506474)


### npm view node


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


### 克隆

```diff
- return numbers.reverse()
+ return [...numbers].reverse()
```


### [echarts动态添加数据](https://blog.csdn.net/moon125w/article/details/81053661)

> charts setOption appendData


### [Canvas Confetti](https://www.kirilv.com/canvas-confetti/)

> 烟花动画


### ?. 和?? 一起使用


### [GSAP的基本使用](https://gsap.framer.wiki/)

> npm gsap


### [天地图-免费地图](https://vgimap.tianditu.gov.cn/)


### [还在用轮询、websocket查询大屏数据？sse用起来](https://juejin.cn/post/7424908830902042658)


### [好的重构与坏的重构](https://www.builder.io/blog/good-vs-bad-refactoring)


### [手机电脑互传](https://localsend.org/zh-CN)


### [chatgpt在线](http://chatgpt.com/)


### [免费共享的GPT4镜像](https://www.opkfc.com/list)


### [以图搜图](https://picfind.top/)


### [𦮙](https://www.hanyuguoxue.com/zidian/zi-158617)


### [GPT生成图关键词](https://artiversehub.ai/prompt-marketplace/1783666543199424513)


### [中国古代历史人物可视化，可以生成 52 万位中国古代历史名人的的社会关系、亲戚关系和生平足迹图，数据来源：CBDB](https://tools.buyixiao.xyz/historical-figure-query)


### [磁力](https://anybt.eth.limo/)


