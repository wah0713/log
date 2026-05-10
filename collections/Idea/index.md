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


### [仅限 Firefox 的小地图](https://www.stefanjudis.com/a-firefox-only-minimap/)

> 背景 以某个元素作为图片使用


### [在vs code中导入numpy库](https://blog.csdn.net/m0_47037896/article/details/107087785)

> 教程


### [为什么我喜欢使用 Map（和 WeakMaps）来处理 DOM 节点](https://macarthur.me/posts/maps-for-dom-nodes/)


### [Beautiful Soup 4.12.0 文档](https://www.crummy.com/software/BeautifulSoup/bs4/doc.zh/#)

> Python Beautiful Soup 文档


### [如何手搓SVG半圆弧，手把手教程](https://www.zhangxinxu.com/wordpress/2025/01/svg-arc-path-circle/)


### [ScholarTurbo 使您能够释放 ChatGPT for PDF 的功能。上传任何 PDF 并开始询问有关它的问题。](https://scholarturbo.com/)


### [7 分钟了解 flatMap 的使用及实现原理，并实现一个简易版的 flatMap](https://juejin.cn/post/7365698962531745830)

> flatMap= map+filter


### [小游戏](https://sugarsugar2.com/zh)


### [typescript中常规的dom元素和event事件类型声明](https://juejin.cn/post/7274626136327110708)


### [知识库AI问答助手 - 馆长](https://www.ncurator.com/zh)

> crx


### [中国 亲戚关系计算器](https://passer-by.com/relationship/)


### [关于 ref 为 DOM 元素或子组件实例动态创建引用的总结](https://www.cnblogs.com/smile-fanyin/p/18780695)


### [检查所有链接列表，识别损坏的链接](https://link-checker.itea.dev/)


### [地铁图](https://subway.cuvii.dev/)


### [陪读娃](https://www.readfrog.app/zh)


### NotebookLM

> 一个基于大模型的 AI 助手，支持多模态输入输出，基于 Notion 平台。


### [用一个奇怪的技巧检测并崩溃 Chromium 机器人（机器人讨厌它！](https://blog.castle.io/detect-and-crash-chromium-bots-with-one-weird-trick-bots-hate-it/)


### [在其他设备上打开 PairDrop 来发送文件](https://pairdrop.net/#about)

### [推荐站点](https://github.com/zhaoolee/ins?tab=readme-ov-file#%E6%9C%81%E5%AE%A2)

### [锻炼推荐](https://workout.cool/)

### [能够快速构建产品在公司的任何阶段都是一个巨大的优势](https://www.paralect.com/blog/post/development-process-startup-founders-should-use-to-ship-features-weirdly-fast)

### [利用js实现文本转语音](https://jsdev.space/tts-sentence-reader/)

### [您只需使用 HTML 标签即可访问用户的相机](https://austingil.com/html-capture-attribute/)

### [Details 元素样式的两个问题以及如何解决它们](https://css-tricks.com/two-issues-styling-the-details-element-and-how-to-solve-them/)
> details summary，鼠标样式 和 箭头和文字错行

### [二阶思维](https://fs.blog/second-order-thinking/)
```
1.总是问自己，"然后呢？
2.跨时间思考 — 10 分钟后的后果是什么？10 个月？10 年？
3.创建如上图第二张图所示的模板，其中包含 1 阶、2 阶和 3 阶结果，确定您的决定，仔细考虑，并写下后果，如果您定期复习这些，您将能够帮助校准您的思维。
4.如果您用它来思考业务决策，请问问自己生态系统的重要部分可能会做出哪些反应。员工将如何处理这个问题？我的竞争对手可能会怎么做？我的供应商呢？监管机构呢？通常，答案几乎没有影响，但您希望在做出决定之前了解直接和二阶后果。
```

### [您需要 4 种颜色](https://www.iamsajid.com/colors/)
> 2种用于文本和背景（主要和次要颜色），1种强调色以突出重要元素（数字4和按钮），以及可选的第三色，以增加一点个性（色相滑块）。

### [Emmet语法](https://juejin.cn/post/6844903456130465805)

### [写代码推荐](https://massimo-nazaria.github.io/spaghetti-code.html)
```
R1.切勿使用全局变量
R2.声明单一用途变量
R3.声明接近其用途的变量
R4.保持代码块较小
R5.使用接近声明的变量
R6.使用不超过两个嵌套级别
```

### [工具自荐微信小程序在文字中隐藏任意文字、图片、视频的小程序（悄悄话工具）](https://github.com/ruanyf/weekly/issues/2634)

### [《唐纵日记》摘录](https://www.ruanyifeng.com/blog/2025/07/tangzong-diary.html)

### [github写mackdown技巧](https://github.com/TheOdinProject/css-exercises/blob/main/README.md)
> [!IMPORTANT]
> github写mackdown技巧

### [HTML 中的 popover 提示](https://www.zhangxinxu.com/wordpress/2025/07/html-popover-hint/)

### 页面关闭时请求
> sendBeacon fetch + keepalive

### [蒙特卡洛模拟](https://towardsdev.com/good-beginner-exercise-for-improving-programming-monte-carlo-simulation-of-the-approximation-of-838dc17eb6bc/)
> 计算圆周率 Π

### [那些你从不使用的 HTML 属性](https://www.smashingmagazine.com/2022/03/html-attributes-you-never-use/)

### [简历警察 🕵️‍♂️](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2FitMrBoy%2FresumePolice)

### [JavaScript → Python](https://langshift.dev/)

### [a2 – b2 = (a + b)(a – b)](https://www.futilitycloset.com/2024/12/15/tidy-2/)

### [我刚刚学会的三个 Markdown 技巧](https://www.stefanjudis.com/blog/three-markdown-tricks-i-just-learned/)

### [LaTeX 速成训练器](https://pipeak.share4y.cn/)

### [在 Markdown 中渲染数学表达式](https://github.blog/changelog/2022-05-19-render-mathematical-expressions-in-markdown/)

### [用新的 HTML 对话框元素替换 JavaScript 对话框](https://css-tricks.com/replace-javascript-dialogs-html-dialog-element/)

### [我编程 20 年的指导原则](https://www.jitao.tech/posts/my-guiding-principles-after-20-years-of-programming/)

### [为了更深入理解前端部署](https://q.shanyue.tech/deploy/simple-intro)

### 检查用户输入是否为有效数字
```js
function isValidNumber(input) {
    return Number.isFinite(Number(input));
}
```

### [2025 年的现代 Node.js 模式](https://kashw1n.com/blog/nodejs-2025/)

### [文件的黑名单（.gitignore）转变为白名单。你将你的.gitignore 更改为这样：](https://rgbcu.be/blog/gitignore/)

### [PanSou 网盘搜索API](https://github.com/fish2018/pansou)

### [口语写作好帮手：两个语料查询网站](https://sspai.com/post/71962)
> Ludwig Linggle

### [三角函数](https://www.mathpages.com/home/kmath277/kmath277.htm)
> 图中符号α代表的角度是多少？

### [通过验证码获取您的浏览历史](https://varun.ch/posts/history)
> 总之，:visited 伪类对上网的人存在隐私风险。作为用户，你可以通过在浏览器中禁用访问链接高亮来阻止网页跟踪你的历史记录。

### [CTFever](https://ctfever.uniiem.com/)
> 这是为 CTF 发烧者准备的工具套件，助你过关斩将、攻克难关。目前基础功能和一部分高级功能已经完成

### [凯文 · 凯利 70 岁生日的 103 条人生建议](https://mp.weixin.qq.com/s/LvH3PUDwea4ZsxsbZWRuFg)
```
About 99% of the time, the right time is right now.
99% 情况下，最佳时机就是现在。

No one is as impressed with your possessions as you are.
没人会像你一样对你的财产印象深刻。

Don't ever work for someone you don't want to become.
不要为那种你不想成为的人工作。

Cultivate 12 people who love you, because they are worth more than 12 million people who like you.
12 个爱你的人，比 12,000,000 个喜欢你的人更值得。

Don't keep making the same mistakes; try to make new mistakes.
别犯同样的错；试一些新错。

If you stop to listen to a musician or street performer for more than a minute, you owe them a dollar.
如果你不停下一分钟来听听音乐家或街头表演者的演奏，你就欠他们一块钱。

Anything you say before the word "but" does not count.
"但是"之前的任何话都不算数。

When you forgive others, they may not notice, but you will heal. Forgiveness is not something we do for others; it is a gift to ourselves.
当你原谅一个人，对方未必知道，但你会自愈。原谅，不是为了别人，那是给自己的礼物。

Courtesy costs nothing. Lower the toilet seat after use. Let the people in the elevator exit before you enter. Return shopping carts to their designated areas. When you borrow something, return it better shape (filled up, cleaned) than when you got it.
变礼貌不要钱。用完马桶后放下坐垫。让别人先出电梯。将购物车推到指定位置。还东西时，让它比借来时更好（填满、干净）。

Whenever there is an argument between two sides, find the third side.
但凡有两方在争论，去找第三方。

Efficiency is highly overrated; Goofing off is highly underrated. Regularly scheduled sabbaths, sabbaticals, vacations, breaks, aimless walks and time off are essential for top performance of any kind. The best work ethic requires a good rest ethic.
效率被过度高估，而玩乐则被过度低估。定期安排的安息日、公休日、假期、休息日、漫无目的的散步和休息时间对于任何类型的顶级业绩都必不可少。最好的工作道德需要良好的休息道德。

When you lead, your real job is to create more leaders, not more followers.
领导的真正工作是培养更多领导，而不是粉丝。

Criticize in private, praise in public.
私下批评，公开表扬。

Life lessons will be presented to you in the order they are needed. Everything you need to master the lesson is within you. Once you have truly learned a lesson, you will be presented with the next one. If you are alive, that means you still have lessons to learn.
生活会不断给你教训。你只能靠自己掌握它。一旦你真正学到教训，你就会得到下一个。还活着，意味着还有教训在等待。

It is the duty of a student to get everything out of a teacher, and the duty of a teacher to get everything out of a student.
从老师身上学得一切是学生的责任，从学生身上挖掘一切是老师的责任。

If winning becomes too important in a game, change the rules to make it more fun. Changing rules can become the new game.
如果在游戏中获胜太重要，那就更改规则来让它更有趣。改变规则可以收获新游戏。

Ask funders for money, and they'll give you advice; but ask them for advice and they'll give you money.
问投资者要钱，他们会给你建议。但问他们建议，他们会给你钱。

Productivity is often a distraction. Don't aim for better ways to get through your tasks as quickly as possible, rather aim for better tasks that you never want to stop doing.
效率常常会分散注意力。别找那种可以快速完成任务的更好的方法，而是找那种你永远不会不想做的更好的任务。

Immediately pay what you owe to vendors, workers, contractors. They will go out of their way to work with you first next time.
供应商、工人、承包商的钱要马上付。下次他们会第一个跟你合作。

The biggest lie we tell ourselves is "I don't need to write this down because I will remember it."
我们跟自己说过最大的谎言是"我不需要记下来，我记得住。"

Your growth as a conscious being is measured by the number of uncomfortable conversations you are willing to have.
作为一个有意识的人，你的成长由那些让你不舒服但愿意进行的对话的数量所决定。

Speak confidently as if you are right, but listen carefully as if you are wrong.
如果你是对的，你就自信说，但如果你是错的，你要听仔细。

Handy measure: the distance between your fingertips of your outstretched arms at shoulder level is your height.
方便的测量方法：把两个手臂伸直，与肩同高，两边指尖之间的长度就是你的身高。

The consistency of your endeavors (exercise, companionship, work) is more important than the quantity. Nothing beats small things done every day, which is way more important than what you do occasionally.
付出（锻炼、陪伴、工作）的连续性比数量更重要。日拱一卒，比偶尔为之更重要。

Making art is not selfish; it's for the rest of us. If you don't do your thing, you are cheating us.
搞艺术并不自私，那是为了大家；如果你不搞，那是在欺骗大家。

Never ask a woman if she is pregnant. Let her tell you if she is.
永远不要问一个女人是不是怀孕了。如果她怀孕了，让她自己告诉你。

Three things you need: The ability to not give up something till it works, the ability to give up something that does not work, and the trust in other people to help you distinguish between the two.
你需要三样东西：不奏效就不放弃的毅力、不奏效也敢放弃的魄力，以及，对一个能够帮你分辨两者的人的信任。

When public speaking, pause frequently. Pause before you say something in a new way, pause after you have said something you believe is important, and pause as a relief to let listeners absorb details.
公开演讲时，频繁暂停一下。换新方式说之前，暂停一下；说了重点之后，暂停一下。把暂停作为一种缓冲，让观众吸收细节。

There is no such thing as being "on time". You are either late or you are early. Your choice.
没有"准时"一说。要么早，要么晚。你自己选。

Ask anyone you admire: Their lucky breaks happened on a detour from their main goal. So embrace detours. Life is not a straight line for anyone.
问问你钦佩的人你就知道，他们的幸运发生在远离主要目标的弯道上。所以要拥抱弯路。任何人的生活都不会一帆风顺。

The best way to get a correct answer on the internet is to post an obviously wrong answer and wait for someone to correct you.
获得一个正确答案的最佳方法是发布一个明显错误的答案，然后等待别人来纠正你。

You'll get 10x better results by elevating good behavior rather than punishing bad behavior, especially in children and animals.
通过提升好行为而不是惩罚坏行为，你会得到 10 倍良效，特别是在儿童和动物身上。

Spend as much time crafting the subject line of an email as the message itself because the subject line is often the only thing people read.
花同样多的时间来打磨电子邮件标题，因为那往往是人们阅读的唯一内容。

Don't wait for the storm to pass; dance in the rain.
别等待暴风雨过去。在雨中跳舞吧。

When checking references for a job applicant, employers may be reluctant or prohibited from saying anything negative, so leave or send a message that says, "Get back to me if you highly recommend this applicant as super great." If they don't reply take that as a negative.
在检查求职者的推荐信时，雇主可能不愿意或不能说任何负面东西，所以会这么说："如果你认为这位求职者超级棒，强烈推荐，请回信。" 如果他们不回，可以当作一种否定。

Use a password manager: Safer, easier, better.
用一个密码管理软件吧，更安全、更简单、更好用。

Half the skill of being educated is learning what you can ignore.
有一半教育技能是学习你可以忽略什么。

The advantage of a ridiculously ambitious goal is that it sets the bar very high so even in failure it may be a success measured by the ordinary.
一个荒谬但雄心勃勃的目标的好处是，它把标准定得如此之高，即使失败，在普通人眼里也是成功。

A great way to understand yourself is to seriously reflect on everything you find irritating in others.
了解自己的一个好方法是认真反思别人身上令你讨厌的一切东西。

Keep all your things visible in a hotel room, not in drawers, and all gathered into one spot. That way you'll never leave anything behind. If you need to have something like a charger off to the side, place a couple of other large items next to it, because you are less likely to leave 3 items behind than just one.
在酒店房间里，把你所有的东西都集中放在一个显眼的地方，而不要放在抽屉里。这样你就不会落下任何东西。如果你需要把充电器之类的东西放在一边，就在旁边放几件其它大物件，因为你留下三件物品的可能性比只留下一件要小。

Denying or deflecting a compliment is rude. Accept it with thanks, even if you believe it is not deserved.
拒绝或回避赞美是不礼貌的。即使你认为它不值得，也要感恩接受。

Always read the plaque next to the monument.
始终阅读纪念碑旁边的牌匾。

When you have some success, the feeling of being an imposter can be real. Who am I fooling? But when you create things that only you — with your unique talents and experience — can do, then you are absolutely not an imposter. You are the ordained. It is your duty to work on things that only you can do.
当你有一些成功的时候，作为一个冒牌货的感觉可能是真实的——我在愚弄谁呢？但当你创造出只有你——以你独特的才能和经验——才能做到的事情时，你绝对不是冒牌货。你是受命者。从事只有你能做的事情是你的职责。

What you do on your bad days matters more than what you do on your good days.
你在坏日子里做的事，比在好日子里做的事更重要。

Make stuff that is good for people to have.
做一些对人们有用的东西。

When you open paint, even a tiny bit, it will always find its way to your clothes no matter how careful you are. Dress accordingly.
当你要用颜料，哪怕是一丁点，无论你多么小心，它总会沾到你的衣服。穿好防护。

To keep young kids behaving on a car road trip, have a bag of their favorite candy and throw a piece out the window each time they misbehave.
要让小朋友在汽车公路旅行时保持良好的行为习惯，可以准备一袋他们最喜欢的糖果，每次他们行为不端时就往窗外扔一块。

You cannot get smart people to work extremely hard just for money.
你不可能让聪明人为了钱而 996。

When you don't know how much to pay someone for a particular task, ask them "what would be fair" and their answer usually is.
当你不知道该为某项任务付给某人多少钱时，问他们"怎样才公平"，他们的回答通常是（？）。

90% of everything is crap. If you think you don't like opera, romance novels, TikTok, country music, vegan food, NFTs, keep trying to see if you can find the 10% that is not crap.
90% 的东西都是垃圾。如果你认为自己不喜欢歌剧、言情小说、TikTok、乡村音乐、素食、NFT，请继续尝试，看看能否找到那不是垃圾的 10%。

You will be judged on how well you treat those who can do nothing for you.
你会怎样对待那些不能为你做什么的人？人们将据此评价你。

We tend to overestimate what we can do in a day, and underestimate what we can achieve in a decade. Miraculous things can be accomplished if you give it ten years. A long game will compound small gains to overcome even big mistakes.
我们往往高估自己一天能做的事，而低估自己十年能取得的成就。十年时间可以完成奇迹般的事情。在一个漫长的游戏里，让小收益滚雪球也能抵消大错误。

Thank a teacher who changed your life.
感谢改变你人生的老师。

You cant reason someone out of a notion that they didnt reason themselves into.
你不能从一个他们没有自己推理的概念中推理出一个人。

Your best job will be one that you were unqualified for because it stretches you. In fact only apply to jobs you are unqualified for.
你最好的工作将是一份你不够资格做的工作，因为它能使你得到锻炼。事实上，你应该申请你还不够资格的工作。

Buy used books. They have the same words as the new ones. Also libraries.
买二手书。它们有和新书一样的文字。或去图书馆借。

You can be whatever you want, so be the person who ends meetings early.
你可以成为你想成为的任何人，所以，做那个提前结束会议的人。

A wise man said, "Before you speak, let your words pass through three gates. At the first gate, ask yourself, 'Is it true?' At the second gate ask, 'Is it necessary?' At the third gate ask, 'Is it kind?'
一位智者曾说，在你说出想法之前，让想法先走三道门。在第一道门，问自己："这是真的？"在第二道门问："有必要？"在第三道门则问："它仁慈吗？"

Take the stairs.
走楼梯。

What you actually pay for something is at least twice the listed price because of the energy, time, money needed to set it up, learn, maintain, repair, and dispose of at the end. Not all prices appear on labels. Actual costs are 2x listed prices.
你为某样东西实际支付的费用至少是标价的两倍，因为还需要花费精力、时间、金钱来设置、学习、维护、修理、善后。不是所有价格都写在价标上。实价会是标价的 2 倍。

When you arrive at your room in a hotel, locate the emergency exits. It only takes a minute.
下榻旅馆后，看看紧急出口在哪儿。那只要一会儿。

The only productive way to answer "what should I do now?" is to first tackle the question of "who should I become?"
要回答"我现在该干嘛"的最高效方式是先搞清楚"我想成为怎样的人"。

Average returns sustained over an above-average period of time yield extraordinary results. Buy and hold.
在高于平均水平的时间里，持续的平均回报会产生非凡结果。买入并持有。

It's thrilling to be extremely polite to rude strangers.
对粗鲁的陌生人极其礼貌是一种魄力。

It's possible that a not-so smart person, who can communicate well, can do much better than a super smart person who can't communicate well. That is good news because it is much easier to improve your communication skills than your intelligence.
一个不太聪明的人，若能好好沟通，有可能比一个超级聪明但不能好好沟通的人做得更好。这是个好消息，因为提高沟通能力比提高智力容易得多。

Getting cheated occasionally is the small price for trusting the best of everyone, because when you trust the best in others, they generally treat you best.
相信每个人的好会有小代价——偶尔受骗。因为当你信任每个人的好，他们一般也会对你最好。

Art is whatever you can get away with.
艺术是让你逃脱一切的避风港。

For the best results with your children, spend only half the money you think you should, but double the time with them.
要想在孩子身上取得最好的效果，你可以只花一半你认为应该花的钱，但要花双倍的时间陪伴他们。

Purchase the most recent tourist guidebook to your home town or region. You'll learn a lot by playing the tourist once a year.
每年买一本你家乡的最新旅游指南并做一次游客，你会学到很多。

Don't wait in line to eat something famous. It is rarely worth the wait.
不要排队吃网红餐。很少值得。

To rapidly reveal the true character of a person you just met, move them onto an abysmally slow internet connection. Observe.
要迅速了解一个你刚认识的人的真实性格，带对方去一个网络慢得不能再慢的地方，然后观察。

Prescription for popular success: do something strange. Make a habit of your weird.
受欢迎的成功处方：做一些奇怪的事。让怪异成为一种习惯。

Be a pro. Back up your back up. Have at least one physical backup and one backup in the cloud. Have more than one of each. How much would you pay to retrieve all your data, photos, notes, if you lost them? Backups are cheap compared to regrets.
高阶做法：做双重备份。至少要有一个物理备份和一个云端备份，并且各有备选方案。如果丢失了所有数据、照片、笔记，你会花多少钱来找回它们？与遗憾相比，备份很便宜。

Don't believe everything you think you believe.
不要相信你认为自己相信的一切东西。

To signal an emergency, use the rule of three; 3 shouts, 3 horn blasts, or 3 whistles.
要发出紧急信号，使用 3 次原则：喊叫 3 次、鸣笛 3 次或吹 3 次口哨。

At a restaurant do you order what you know is great, or do you try something new? Do you make what you know will sell or try something new? Do you keep dating new folks or try to commit to someone you already met? The optimal balance for exploring new things vs exploiting them once found is: 1/3. Spend 1/3 of your time on exploring and 2/3 of your time on deepening. It is harder to devote time to exploring as you age because it seems unproductive, but aim for 1/3.
在餐厅，你是点你知道的好东西，还是尝试新东西？你是做你知道会卖的东西还是尝试新东西？你是继续和新朋友约会，还是试着对已经认识的人做出承诺？探索新事物还是继续深入，最佳平衡点是 1/3。1/3 时间用于探索，2/3 时间用于深入。随着年龄增长，花时间探索比较困难，因为这似乎无益，但最好有 1/3。

Actual great opportunities do not have "Great Opportunities" in the subject line.
真正的好机会，不会太显而易见。

When introduced to someone make eye contact and count to 4. You'll both remember each other.
被介绍时，要与对方眼神接触并数 4 秒。这样你们都会记住对方。

Take note if you find yourself wondering "Where is my good knife? Or, where is my good pen?" That means you have bad ones. Get rid of those.
如果你发现自己在找那把好刀或好笔，说明它们并不好。扔掉它们。

When you are stuck, explain your problem to others. Often simply laying out a problem will present a solution. Make "explaining the problem" part of your troubleshooting process.
当你不解，向别人解释你的问题。通常情况下，简单地摆出问题就能得到解决方案。让"解释问题"成为你解决麻烦过程的一部分。

When buying a garden hose, an extension cord, or a ladder, get one substantially longer than you think you need. It'll be the right size.
买花园水管、延长线或梯子时，买一个比你需要的还长的。那才是正确尺寸。

Don't bother fighting the old; just build the new.
不要费力与旧事物作斗争。建立新事物就好了。

Your group can achieve great things way beyond your means simply by showing people that they are appreciated.
只需向你的团队表达感激之情，他们就能取得超出你能力范围的伟大成就。

When someone tells you about the peak year of human history, the period of time when things were good before things went downhill, it will always be the years of when they were 10 years old — which is the peak of any human's existence.
当有人告诉你她/他的人生高峰在哪一年，那总是他们 10 岁的时候——那是所有人的人生高峰。

You are as big as the things that make you angry.
让你生气的事情有多大，你的心胸就有多大。

When speaking to an audience it's better to fix your gaze on a few people than to "spray" your gaze across the room. Your eyes telegraph to others whether you really believe what you are saying.
演讲时，把目光固定在几个人身上，比把目光洒满整个房间要好。你的眼睛会告诉别人你是否真的相信你所说的话。

Habit is far more dependable than inspiration. Make progress by making habits. Don't focus on getting into shape. Focus on becoming the kind of person who never misses a workout.
习惯远比灵感更可靠。通过养成习惯来取得进步。不要把注意力放在塑身上，而要专注于成为那种从不错过锻炼的人。

When negotiating, don't aim for a bigger piece of the pie; aim to create a bigger pie.
谈判时，不要把目标定在一块更大的蛋糕上，而是定在创造一个更大的蛋糕上。

If you repeated what you did today 365 more times will you be where you want to be next year?
如果你把今天所做之事重复 365 次，明年你会获得你想要的吗？

You see only 2% of another person, and they see only 2% of you. Attune yourselves to the hidden 98%.
你只看到一个人的 2%，他们也只看到你的 2%。让你自己与那隐藏的 98% 调和。

Your time and space are limited. Remove, give away, throw out things in your life that don't spark joy any longer in order to make room for those that do.
你的时间和空间是有限的。清除、放弃、扔掉生活中不再带来快乐的东西，以为那些真正带来快乐的东西腾出空间。

Our descendants will achieve things that will amaze us, yet a portion of what they will create could have been made with today's materials and tools if we had had the imagination. Think bigger.
我们的后代将取得令我们惊奇的成就，然而，如果我们有足够的想象力，他们的一部分创造可以基于今天的材料和工具来实现。想远一点。

For a great payoff be especially curious about the things you are not interested in.
为了获得巨大回报，要对自己不感兴趣的事情特别好奇。

Focus on directions rather than destinations. Who knows their destiny? But maintain the right direction and you'll arrive at where you want to go.
专注于方向而不是目的地。谁知道自己终将走向哪里呢。保持正确的方向，你就会到达你想去的地方。

Every breakthrough is at first laughable and ridiculous. In fact if it did not start out laughable and ridiculous, it is not a breakthrough.
每一个突破，一开始都令人觉得好笑、荒谬。事实上，如果它一开始不是这样，就不会是突破。

If you loan someone $20 and you never see them again because they are avoiding paying you back, that makes it worth $20.
如果你借给别人 20 块钱，而对方因为不想还钱所以不想见你，这 20 块钱就花得很值。

Copying others is a good way to start. Copying yourself is a disappointing way to end.
模仿别人是一种好的开始方式。重复自己却是一种令人失望的结束方式。

The best time to negotiate your salary for a new job is the moment AFTER they say they want you, and not before. Then it becomes a game of chicken for each side to name an amount first, but it is to your advantage to get them to give a number before you do.
为一份新工作谈判薪水的最佳时机是在他们说要你之后，而不是之前。虽然这变成了谁先说就谁获利的鸡肋游戏，但让他们在你之前给出一个数字对你是有利的。

Rather than steering your life to avoid surprises, aim directly for them.
与其避开生活中的意外，不如直接瞄准它们。

Don't purchase extra insurance if you are renting a car with a credit card.
如果你用信用卡租车，就不要购买额外保险。

If your opinions on one subject can be predicted from your opinions on another, you may be in the grip of an ideology. When you truly think for yourself your conclusions will not be predictable.
如果你对一个问题的看法可以从你对另一个问题的看法中预测出来，你可能被一种意识形态控制了。当你真正为自己思考，你的结论不会被预测。

Aim to die broke. Give to your beneficiaries before you die; it's more fun and useful. Spend it all. Your last check should go to the funeral home and it should bounce.
争取死时千金散尽。死前给你的受益人，这更有趣，更有用。花光所有的钱吧，你的最后一张支票应该交给殡仪馆，而且应该跳票。

The chief prevention against getting old is to remain astonished.
防止变老的主要方法是保持惊奇。
```

### [找出哪些 JavaScript 变量正在泄露到全局作用域](https://mmazzarolo.com/blog/2022-02-14-find-what-javascript-variables-are-leaking-into-the-global-scope/)
```
创建一个可丢弃的 iframe，将其指向 about:blank （以确保 window 对象处于干净状态）。
检查 iframe window 对象并存储其全局变量名。
移除 iframe。
```

### [3d东京](https://minitokyo3d.com/)

### Chrome 浏览器的离线翻译插件，基于浏览器新的 Translator API 和 Language Detector API，不用网络也能翻译。
> Translator Language Detector

### [vue2中使用自定义指令实现el-table虚拟列表](https://juejin.cn/post/7459039610396803110)

### [使用文件系统访问 API 入门](https://css-tricks.com/getting-started-with-the-file-system-access-api/)

### [你最大的客户可能是最大的瓶颈](https://densumes.dev/blog/fair-queue/)
```
当消息到达时（插入操作）：
我们将消息存储在专门为该特定客户端准备的队列中
我们检查该客户端的 ID 是否已经在我们的轮询调度器中
如果他们已经在轮转中，我们就完成了。他们会得到他们的机会
如果它们是新的，我们将它们的客户端 ID 添加到轮询队列的末尾

当工作准备好处理（读操作）时：
我们从我们的轮询调度器中获取下一个客户 ID
我们前往该客户的专用队列并获取它们的一条消息
处理完成后，我们检查他们是否还有更多工作等待
如果他们的队列是空的，他们自然会退出轮换
如果他们还有消息，我们将他们的客户端 ID 重新放到队伍的末尾
```

### [由 no-constant-binary-expression 捕获的有趣错误](https://eslint.org/blog/2022/07/interesting-bugs-caught-by-no-constant-binary-expression/)
```
+x == null 将始终为 false，因为 + 会将 x 转换为数字，而数字永远不会是 nullish。
{ ...foo } || DEFAULT 永远不会返回 DEFAULT，因为对象总是 truthy。

if (!whitelist.has(specifier.imported.name) == null) {
    return;
}

在尝试定义默认值时，人们会混淆像 a === b ?? c 这样的表达式，并假设它会被解析为 a === (b ?? c)。但实际上它会被解析为 (a === b) ?? c。

hasData = hasData || data !== {};
在这个例子中， hasData 总是被设置为 true，因为 data 永远不可能与一个新创建的对象具有引用相等性。

const newConfigValue = { ...configProfiles } ?? {};
JavaScript 错误的另一个常见类别是期望空对象为 nullish 或 falsy。对于来自 Python 等语言的开发者来说，这可能是一个容易犯的错误。

assert(startWidth => 0 && startWidth <= 1);
在这里，开发者本意是测试一个值是否大于或等于零（ >= 0），但意外地颠倒了字符的顺序，创建了一个返回 0 && startWidth <= 1 的箭头函数！

Thinking || allows for set operations: states.includes('VALID' || 'IN_PROGRESS')
思考 || 允许进行集合操作： states.includes('VALID' || 'IN_PROGRESS')
Thinking primitive functions pass through nulls: Number(x) == null
认为原始函数会通过 null： Number(x) == null
Not knowing primitive constructors return boxed primitives: new Number(x) === 10
不知道原始构造函数返回装箱原始值： new Number(x) === 10
```

### [使用 HTTP OPTIONS 发现功能](https://evertpot.com/discovering-features-with-http-options/)
```
OPTIONS 就是用于此目的的方法。你可能从 CORS 中知道这个 HTTP 方法，但它的通用目的是让客户端被动地发现"这里我能做什么？"
```

### shell:startup
> 按 Win + R 打开 "运行" 对话框，输入 shell:startup，然后按回车。这将打开 "启动" 文件夹。

### [马尔可夫链](https://setosa.io/blog/2014/07/26/markov-chains/)
> 马尔可夫链是一种随机过程，用于描述一个系统在不同状态之间转换的概率。它由一个状态集合和一个转移矩阵组成。每个状态都有一个概率分布，描述了从该状态转换到其他状态的概率。马尔可夫链可以用于模拟随机过程，例如股票价格、天气模式或交通流量。
> canvas

### HTTPS下A标签下载HTTP资源受限

### 指数退避算法

### [JavaScript Set有新功能啦，子、交、并、补轻松搞定](https://juejin.cn/post/7411416025729957928)
```
子，isSubsetOf/isSupersetOf/isDisjointFrom
交，intersection
并，union
补，difference/symmetricDifference
```

### [处理element ui table组件加了 show-overflow-tooltip 后, 悬浮无法复制问题](https://juejin.cn/post/7329194915683729446)
> 二次开发组件写法借鉴

### [C V大法：让你用最简单的方式使用Vue2 + Web Worker + js-xlsx 解析excel数据](https://juejin.cn/post/7010046891480055815)
> Web Worker

### [监听浏览器页面切换/刷新/关闭事件](https://www.jianshu.com/p/bc5d242aff09)
> visibilitychange

### [模块的特殊变量](https://langshift.dev/zh-cn/docs/js2py/module-02-module-system#23-%E6%A8%A1%E5%9D%97%E7%8A%84%E7%89%B9%E6%AE%8A%E5%8F%98%E8%87%8F)

### [动态导入](https://langshift.dev/zh-cn/docs/js2py/module-02-module-system#62-%E5%8A%A8%E6%80%81%E5%AF%BC%E5%85%A5)

### [特殊方法魔术方法](https://langshift.dev/zh-cn/docs/js2py/module-03-oop-functional#24-%E7%89%B9%E6%AE%8A%E6%96%B9%E6%B3%95%E9%AD%94%E6%9C%AF%E6%96%B9%E6%B3%95)

### [列表推导式](https://langshift.dev/zh-cn/docs/js2py/module-03-oop-functional#33-%E5%88%97%E8%A1%A8%E6%8E%A8%E5%AF%BC%E5%BC%8F)

### [Canvas也支持锥形渐变了createConicGradient方法](https://www.zhangxinxu.com/wordpress/2025/10/js-canvas-createconicgradient/?shrink=1)

### [CanvasRenderingContext2D：ellipse() 方法](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/ellipse)

### [elementUI 表格宽度自适应、不换行](https://www.jianshu.com/p/8b7ea304dc54)
> context.measureText方法可以测量文本的宽度

### 计算文本宽度
```js
export const textWidth = ({
    str,
    style = '12px PingFang HK',
    padding = 0
}) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    if (!context) {
        console.warn('Canvas上下文获取失败');
        return 0;
    }
    context.font = style;
    const textWidth = context.measureText(str).width;
    return textWidth + Number(padding);
};
```

### [一个 16.67 毫秒的帧](https://koolcodez.com/blog/inside-the-frame/)
> Performance monitor 控制台
```
首先，未优化的版本。它使用 top 和 left ，这会导致每帧都发生重排。
然后，优化的版本，它使用 transform 和 opacity 。
```

### [Canvas 变换](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Transformations#%E5%8F%98%E5%BD%A2)

### [Document.elementFromPoint()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/elementFromPoint)
> 这个方法返回文档中指定坐标位置的元素。它可以用于确定用户点击的元素，或者在需要知道元素位置的情况下使用。
> elementFromPoint

### [首次内容绘制 (FCP)](https://webdev.ac.cn/articles/fcp#what-is-a-good-fcp-score)
> 首次内容绘制 (FCP) 是衡量网页性能的关键指标。它表示浏览器在导航到网页后首次将任何文本或图像呈现给用户所需的时间。FCP 是用户感知性能的重要方面，因为它提供了页面开始加载的视觉反馈。

### [10 个被严重低估的 JS 特性，直接少写 500 行代码](https://juejin.cn/post/7568153532014559267)
> element.closest () 方法返回调用它的元素或其最近的祖先元素（也可以是相同的元素），该元素匹配指定的选择器字符串。如果没有匹配的元素，则返回 null。
> URL + URLSearchParams 可以用于构建 URL 字符串，同时添加查询参数。

### [高级动画](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Advanced_animations)

### [Date.prototype.setHours()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setHours)
> setHours() 方法根据本地时间设置 Date 对象的小时数。

### [Date.prototype.setTime()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime)
> setTime() 方法根据本地时间设置 Date 对象的毫秒数。

### [醒醒，该使用CookieStore新建和管理cookie了](https://www.zhangxinxu.com/wordpress/2025/11/js-cookiestore-cookie/)
> CookieStore 是一个用于管理浏览器 Cookie 的 API。它提供了一种简单的方式来设置、获取和删除 Cookie。
```js
cookieStore.delete()
cookieStore.get()
cookieStore.getAll()
cookieStore.set()
```

### [功能丰富、技术先进的开源工具网站](https://damngood.tools/tools/chat-pdf)


