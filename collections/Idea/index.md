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


