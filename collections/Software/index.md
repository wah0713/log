### postcss-fixie
> npm https://www.npmjs.com/package/postcss-fixie
### tortoisegit
> 代码提交工具
### beyond compare
> 文件比较工具
### gitlens
### .md文件
> [基本使用](https://www.cnblogs.com/liugang-vip/p/6337580.html)
### jquery.chm
> [jquery使用手册](http://jquery.cuishifeng.cn/)
### Fiddler
### schtasks /create /tn 任务名 /sc 任务类别 /st 命令开始时间 /tr 要运行的命令
```bash
schtasks /create /tn '关机' /tr 'shutdown /s /t 1' /sc once /st 15:00
```
### [我教你百度](https://iwo.im/?q=我教你百度)
### vscode TODO 代办
### [uni-app](https://uniapp.dcloud.io/)
>是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、Web（响应式）、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。
### [avuejs](https://www.avuejs.com/)
>Avue 是一个采用Element框架低代码前端框架，它使用 JSON 配置来生成页面，可以减少页面开发工作量，极大提升效率
### [【vue】使用vue-cli4.0快速搭建一个项目](https://blog.csdn.net/liyunkun888/article/details/102738377)
### [从 0 开始手把手带你搭建一套规范的 Vue3.x 项目工程环境](https://juejin.cn/post/6951649464637636622)
### [Vue项目接入Eslint与+Prettier+Husky自动格式化代码](https://blog.csdn.net/weixin_42826294/article/details/107374982)
### 执行一下命令可修复prettier
```bash
npm run lint --fix
```
### [前端规范：eslint与prettier使用（干货）](https://blog.csdn.net/weixin_45077178/article/details/107226551)
### [HTTP中GET，POST和PUT的区别](https://blog.csdn.net/qq_36183935/article/details/80570062)
### [node中的express框架，nodemon设置修改代码后服务自动重启](https://blog.csdn.net/a419419/article/details/78831869)
### [使用axios调用后端接口](https://blog.csdn.net/kid_hw/article/details/93927253)
### [简单的nginx代理demo的详细步骤](https://blog.csdn.net/weixin_44706322/article/details/103256636)
### [nginx 相关命令 nginx -s reload/stop/quit](https://blog.csdn.net/weixin_34356138/article/details/85996493)
### ngxin loadction正则语法
```Shell
location ~* \.json$ {
    root html;
    add_header Access-Control-Allow-Origin 'http://localhost:8080';
    add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,OPTIONS;
}
```
### vscode的快捷键
#### ctrl+c（光标所在行，不需要选中直接） 直接复制整行
#### ctrl+f 光标在文件中直接f3查找下一个
#### ctrl+h 直接替换
#### ctrl+回城  切换到下一行
#### ctrl+shitf+回城 切换到上一行
### [前端真题](https://bitable.feishu.cn/app8Ok6k9qafpMkgyRbfgxeEnet?table=tblzZHf2Ix3YtxPM&view=vew9iquA45)
### vite几乎秒开的体验，且运行速度不会随着包的增大而变慢
### [commonjs 与 esm 的区别](https://juejin.cn/post/6844903861166014478)
### [vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2)
### [vite-plugin-legacy](https://www.npmjs.com/package/vite-plugin-legacy)
### [vite-plugin-legacy兼容旧浏览器](https://www.bookstack.cn/read/vitejs-2.0-beta-en/cc39a9ad791e3c94.md)
```js
// vite.config.js
import legacy from '@vitejs/plugin-legacy'
exportdefault {
    plugins: [
        legacy({
            targets: ['defaults', 'not IE 11']
        })
    ]
}
```
### [vue-cli 迁移 vite2 实践小结](https://segmentfault.com/a/1190000039371430)
### [vite的周边](https://github.com/vitejs/awesome-vite)
### [面试 Javascript 中的 CJS, AMD, UMD 和 ESM是什么？](https://blog.csdn.net/weixin_39363245/article/details/114391500)
### [vite 源码解读](https://github.com/lubanproj/vite_read)
### [npx](https://www.ruanyifeng.com/blog/2019/02/npx.html) 想要解决的主要问题，就是调用项目内部安装的模块。比如，项目内部安装了测试工具 Mocha。
### chrome >show [rendering](https://blog.csdn.net/sd19871122/article/details/97895109) paint flashing
### [vue Mastery 视频](https://www.vuemastery.com/)
### [vuex官方购物车案例](https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart)
### [使用 NuxtJS 充满信心地构建您的下一个 Vue.js 应用程序。 一个 开源 框架，让 Web 开发变得简单而强大。](https://zh.nuxtjs.org/)
### [VUE中的过滤器filters用法](https://blog.csdn.net/xjtarzan/article/details/80265294/)
### &lt;%= %&gt; webpack
### [怎么保存退出vi编辑](https://www.cnblogs.com/love-feng/p/12340629.html)
### vue genesiss
### [ssr与csr](https://blog.csdn.net/xiaoxian_xian/article/details/109104607)
### [table标签](https://www.jianshu.com/p/7c768011f25a)
### [了解HTML锚点](https://www.cnblogs.com/xiaohuochai/p/5007282.html)
### [Service Worker基础知识整理](https://www.cnblogs.com/BoatGina/p/10422361.html)
### [vue-devtools及launch-editor调试工具安装及使用](https://www.jianshu.com/p/33a992fc8187)
### [vue-devtools工具点击open in editor 自动跳转到对应的组件页面](https://blog.csdn.net/weixin_45695727/article/details/112986249)
### [学习 launch-editor 源码整体架构，探究 vue-devtools「在编辑器中打开组件」功能实现原理...](https://blog.csdn.net/u012384510/article/details/116456903)
### [Vue CLI4.0 webpack配置属性——productionSourceMap](https://blog.csdn.net/weixin_44869002/article/details/105832031)
> 设置打包后项目源码不可见
### [发布es6写的npm包遇到了这个坑](https://www.jianshu.com/p/8f335a84e44d)
> lib问题
### [Node.js中package.json中库的版本号详解(^和~区别)](https://blog.csdn.net/superjunjin/article/details/76034076)
### [npm 和 yarn 常用指令解读和比较](https://blog.csdn.net/xunyicao_e/article/details/110930736)
> yarn install --update-checksums
&gt; 当与对应包的校验不一致时， 更新 yarn.lock 文件和已安的依赖装包
### [component：(resolve) =&gt; require](https://www.cnblogs.com/dzkjz/p/12364882.html)
### [第 94 题：vue 在 v-for 时给每项元素绑定事件需要用事件代理吗？为什么？](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/145)
### [vue修饰符--可能是东半球最详细的文档（滑稽）](https://segmentfault.com/a/1190000016786254)
### [github访问加速](https://zhuanlan.zhihu.com/p/75994966)
### [使用 github.com.cnpmjs.org 时 git push 报错: Connection refused](https://blog.csdn.net/qq_33567644/article/details/112282618)
### [windows下快速删除node_modules](https://www.cnblogs.com/yeminglong/p/12620473.html)
### [活用yarn resolutions统一版本大幅减小产物包体积（优化之最后的倔强）](https://blog.csdn.net/qq_21567385/article/details/112644629)
### amazon (S3)
&gt; 是一个公开的服务，Web 应用程序开发人员可以使用它存储数字资产，包括图片、视频、音乐和文档。 S3 提供一个 RESTful API 以编程方式实现与该服务的交互。
### awesome-你想学的东西
&gt; github
### [Github项目关注按钮](https://buttons.github.io/)
### [Chosen 是一个 jQuery 插件，它使长而笨重的选择框更加用户友好。](https://harvesthq.github.io/chosen/)
### [谷歌的文本对比库](https://github.com/google/diff-match-patch/wiki/API)
&gt; 要对文本文件的进行比较的时候，可以考虑使用google-diff-match-patch算法，它可以对文本文件进行比较、匹配和生成补丁的操作。
### [Chrome常用URL命令（伪URL）](https://www.cnblogs.com/EasonJim/p/7877704.html)
&gt; chrome://chrome-urls/
### [JS算法](https://github.com/thealgorithms/javascript)
### [免费的编程中文书籍索引](https://github.com/justjavac/free-programming-books-zh_CN)
### [前端面试秘籍](https://github.com/yisainan/web-interview)
### [人生重开模拟器](https://github.com/VickScarlet/lifeRestart)
### [前端登录，这一篇就够了](https://blog.csdn.net/u011192674/article/details/107101526/)
### [node餐饮demo](https://github.com/bailicangdu/node-elm)
&gt; nodejs + express + mongodb + mongoose + es6/7 + vue + element-ui
### [Airbnb JavaScript 风格指南](https://github.com/lin-123/javascript)
### [npm ora](https://www.jianshu.com/p/52bed753d5be)
### [npm chalk](https://blog.csdn.net/u013530539/article/details/79073938)
### [vim模式](https://www.runoob.com/linux/linux-vim.html)
&gt; 1、:q! 退出编辑
&gt; 两个大写Z 保存
### [git reflog](https://blog.csdn.net/yuquan0821/article/details/114670541)
### git rebase -i  commitId (合并提交)
### git pull -r (git pull -rebase)
### [分享8个非常实用的Vue自定义指令](https://juejin.cn/post/6906028995133833230)
### [DRY、KISS、YAGNI三原则的理解](https://segmentfault.com/a/1190000020208797)
### [CI/CD](https://blog.csdn.net/QbitAI/article/details/99366085)
### [快速删除node_modules目录的方法](https://blog.csdn.net/WU5229485/article/details/82985205)
### [Vue 鼠标选中文本 @mouseup 结合 window.getSelection().toString()](https://blog.csdn.net/sunshineTing2/article/details/111477277)
### [npm cloc](https://blog.csdn.net/baidu_35120637/article/details/109148623)
### webpack-to-vite npm
### [jsPlumb的中文文档](https://www.jianshu.com/p/e61dd8ec781b)
### [iframe的使用和 contentWindow、parent以及postMessage通信方式](https://www.cnblogs.com/nangezi/p/12706672.html)
&gt; contentWindow.postMessage 父给子发消息
&gt; parent.postMessage 子发给父消息
### [全面总结 Vue 3.0 的新特性](https://blog.csdn.net/qq_27318177/article/details/119170748)
### [Vue3.0入门指南](https://www.jianshu.com/p/b219ae8b689d)
### https ssl
### [网络协议概述：物理层、连接层、网络层、传输层、应用层详解](https://www.cnblogs.com/dengyibing/p/5563082.html)
### [从输入URL到页面加载的全过程](https://www.cnblogs.com/xiaohuochai/p/9193083.html)
### vscode -&gt;帮助 -&gt;切换开发人员工具
&gt; vscode自带控制台
### [解决VSCode保存后，函数前自动加上空格，导致报错的问题；以及如何在保存代码时按照ESLint格式化代码](https://www.pianshen.com/article/51381265716/)
### [Vue使用NProgress npm](https://blog.csdn.net/wn1245343496/article/details/82151273)
&gt; NProgress是页面跳转是出现在浏览器顶部的进度条
### [TinyMCE](http://tinymce.ax-z.cn/)
&gt; TinyMCE：功能强大、所见即所得的富文本编辑器
### [使用vue-cli生成的vendor.js文件太大](https://blog.csdn.net/blueberry_liang/article/details/80320607)
### [node里读取命令行参数](https://blog.csdn.net/weixin_34292402/article/details/93318423)
&gt; process.env process.argv node 参数
### [store.js使用简介 npm](https://gist.github.com/reygreen1/7226325)
> tore.js 优先选择 localStorage 来进行存储，在 IE6 和 IE7 下降级使用userData来达到目的。 没有使用 flash ，不会减慢你的页面加载速度。也没有使用 cookies ，不会使你的网络请求变得臃肿。store.js 依赖 JSON 来序列化数据进行存储。
### [Webpack Bundle Analyzer插件的使用](https://segmentfault.com/a/1190000017716736)
### [webpack配置中的ExtractTextPlugin插件认识](https://www.jianshu.com/p/ed3c98ba5474)
### [webpack配置别名alias](https://www.cnblogs.com/Jimc/p/10282969.html)
### [webpack基础](https://www.jianshu.com/p/13bdbefd6189)
### [webpack-module配置详解](https://blog.csdn.net/qq_44708990/article/details/116758235)
### [前端小白入门webpack中对于css、less、图片的处理](https://blog.csdn.net/weixin_43916611/article/details/111708384)
### [webpack：hash、chunkhash、contenthash三者区别](https://www.cnblogs.com/gaoht/p/14005850.html)
### [基于 webpack 的持久化缓存方案](https://github.com/pigcan/blog/issues/9)
### [vs code 插件change-case, 修改变量名 驼峰和常量等](https://my.oschina.net/ahaoboy/blog/4715119)
### [如何在VS code上优雅地刷leetcode](https://blog.csdn.net/engineerxin/article/details/99875113)
### [webpack devtool](https://doc.codingdict.com/webpack-cn-doc/configuration/devtool/)
### [webpack的chunkFilename详细说明](https://blog.csdn.net/wu_xianqiang/article/details/113121793)
### [colorspace](https://mycolor.space/?hex=%23415FFF&sub=1)
> 配色
### [五十种最好的开源爬虫](https://www.cnblogs.com/jscs/p/13672785.html)
### [chrome 动画标签](https://blog.csdn.net/weixin_49012647/article/details/116424935)
> chrome animations
### [Visual Studio Code 提高效率的快捷方式](https://juejin.cn/post/7066978065326276644)
### [修改.gitignore文件不生效](https://www.cnblogs.com/az4215/p/15597942.html)
> git ignore 文件 改名
```bash
清除本地当前的Git缓存
      git rm -r --cached .
```
### [Airbnb CSS / Sass 指南](https://github.com/Zhangjd/css-style-guide)
### [figma](https://baike.baidu.com/item/figma/60281951)
### [vue-cli3.0 使用postcss-plugin-px2rem（推荐）和 postcss-pxtorem（postcss-px2rem）自动转换px为rem 的配置方法；](https://www.cnblogs.com/taohuaya/p/10274993.html)
> px rem
### [了解页面的生命周期](https://www.zhangxinxu.com/wordpress/2021/11/js-visibilitychange-pagehide-lifecycle/)
### [小tip: CSS3下的渐变文字效果实现](https://www.zhangxinxu.com/wordpress/2011/04/%e5%b0%8ftipcss3%e4%b8%8b%e7%9a%84%e6%b8%90%e5%8f%98%e6%96%87%e5%ad%97%e6%95%88%e6%9e%9c%e5%ae%9e%e7%8e%b0/)
### [这几个高级前端常用的API，你用到了吗？](https://juejin.cn/post/7028744289890861063)
> MutationObserver
> IntersectionObserver
> getComputedStyle
> requestAnimationFrame
### [利用废弃的html rel import实现页面include功能](https://www.zhangxinxu.com/wordpress/2021/07/html-rel-import-include/)

### [tampermonkey官网文档](https://www.tampermonkey.net/documentation.php)

### [Tampermonkey中文文档](https://www.cnblogs.com/grubber/p/12560522.html)

### [斗鱼开放平台 接口文档](https://open.douyu.com/)

### [纯前端JS zip打包文件并下载](https://www.zhangxinxu.com/wordpress/2019/08/js-zip-download/)

> jszip FileSaver js-xlsx

### [webpack-bundle-analyzer 优化实战](https://juejin.cn/post/7035951233907032077)

> webpack-bundle-analyzer webpack bundle analyzer

### [开源项目 CDN 加速服务站合集：除了BootCDN，你还知道其他免费的前端开源项目 CDN 加速服务吗](https://blog.csdn.net/Yi2008yi/article/details/122882237)

### [前端主题切换方案](https://juejin.cn/post/7134594122391748615)

### [数学标记语言MathML简介、工具及兼容](https://www.zhangxinxu.com/wordpress/2018/10/mathml-%e5%85%bc%e5%ae%b9-%e5%b7%a5%e5%85%b7/)


### [VSCode快捷编辑html的方法](https://blog.csdn.net/qq_36507046/article/details/125725826)

> html 快捷

### [Node卸载超详细步骤](https://blog.csdn.net/m0_51945510/article/details/127710792)

> node

### [nvm安装、node安装及node版本切换管理](https://juejin.cn/post/7249585135800336444)

> nvm node

### [bpmn-js](https://bpmn.io/toolkit/bpmn-js/)

> bpmn

### [squoosh](https://github.com/googlechromelabs/squoosh)

> Squoosh是一款图像压缩网络应用程序，可通过多种格式缩小图像大小。

> https://squoosh.app/


### [浏览器调试工具如何查看placeholder值](https://blog.csdn.net/qq_36485978/article/details/97897798)

> placeholder


### [Chrome-查看DOM元素绑定的事件【工具篇】](https://blog.csdn.net/weixin_38080573/article/details/105200212)

> getEventListeners


### [2024 最新最全 VS Code 插件推荐！](https://juejin.cn/post/7384765023343394827)


### [VS Code配置使用 Python，超详细配置指南，看这一篇就够了](https://blog.csdn.net/weixin_49895216/article/details/131696960)

> python环境配置


### [Python 的许多命令行实用程序](https://www.pythonmorsels.com/cli-tools/)

> python 命令行工具


### [字幕工具箱](https://zm.i8k.tv/)


### [卸载软件](https://uninstalr.com/ )


### url -O <URL>

`url -O <URL>` 不是一个标准的命令行命令。它可能是对某些工具（如 `wget` 或 `curl` ）的误解或拼写错误。以下是对可能情况的解释：

---

#### 1. **可能是 `wget -O <URL>` **

`wget` 是一个常用的命令行工具，用于从网络下载文件。 `-O` 选项用于指定下载文件的保存名称。

##### 正确用法：

```bash
wget -O 文件名 <URL>
```

##### 示例：

```bash
wget -O myfile.zip https://example.com/path/to/file.zip
```

* 这会将 `https://example.com/path/to/file.zip` 下载并保存为 `myfile.zip`。

---

#### 2. **可能是 `curl -O <URL>` **

`curl` 是另一个常用的命令行工具，用于传输数据。 `-O` 选项用于将文件下载到当前目录，并使用远程文件的名称。

##### 正确用法：

```bash
curl -O <URL>
```

##### 示例：

```bash
curl -O https://example.com/path/to/file.zip
```

* 这会将 `https://example.com/path/to/file.zip` 下载到当前目录，并保留原始文件名（如 `file.zip`）。

---

#### 3. ** `url` 不是一个标准命令**

如果你确实看到了 `url -O <URL>` ，可能是以下情况：
* 拼写错误，实际想用的是 `wget` 或 `curl`。
* 某些自定义脚本或工具中定义了 `url` 命令。

---

#### 总结

* 如果你想下载文件，建议使用 `wget` 或 `curl`。
* 如果 `url` 是某个特定工具或脚本中的命令，请检查相关文档或上下文。

如果你有更多上下文或具体需求，可以告诉我，我会进一步帮你解答！


### [功能丰富、技术先进的开源工具网站](https://damngood.tools/tools/chat-pdf)


### [【实战】Chrome V3插件开发，只看这一篇文章就够了](https://juejin.cn/post/7229238405406294074)

### [PicHoro](https://github.com/Kuingsmile/PicHoro)
> PicHoro 是一款基于 Flutter 的手机端云存储平台/图床管理和文件上传/下载工具，最新版本 V3.0.1。

### [本地 Office 网页版](https://github.com/ranuts/document)
> 本地 Office 网页版，支持 Office 文档在线预览、编辑、下载、分享等功能。

### [简单的 Chromium AI](https://github.com/kstonekuan/simple-chromium-ai)
> 简单的 Chromium AI，支持 Chromium 浏览器的 AI 助手功能。

### [pixpin](https://pixpin.cn/docs/start/what-is-pixpin)
> pixpin 是一个基于 AI 的图片编辑工具。取字

### [Lumma](https://github.com/geosmart/lumma)
> 写日记

### [🚀 WebCurl - 极简网页版API调试神器](https://github.com/o8oo8o/WebCurl)

### [Kite](https://kite.kagi.com/ccc74663-a271-43a3-b54d-afd23fb936cb/business?data_lang=zh-Hans)
> 看新闻

### [nesbox](https://nesbox.xianqiao.wang/)
> 游戏

### [Pip-Helper - 画中画助手](https://github.com/yaolifeng0629/Pip-Helper/blob/main/README.zh.md)

### [速查表](https://wangchujiang.com/reference/index.html)

### [emoji混合](https://tikolu.net/emojimix)

### [emoji厨房](https://emojikitchen.dev/)

### [emoji供应商](https://emoji.supply/kitchen/)

### [一个 GitHub Action，用于创建存储库的 SVG 图。在文章中阅读更多内容。](https://github.com/githubocto/repo-visualizer)

### [json转ts](https://xietiansheng.github.io/json-to-any-web/)
> json-to-any-web 是一个在线工具，可以将 JSON 数据转换为 TypeScript 类型定义。

### [vue-js-cron](https://github.com/abichinger/vue-js-cron)
> 一个基于 Vue.js 的 cron 表达式编辑器。

### [cron-parser](https://github.com/harrisiirak/cron-parser)
> 一个用于解析 cron 表达式的 JavaScript 库。

### [pkg](https://github.com/vercel/pkg)
> 这个命令行界面使您能够将您的 Node.js 项目打包成一个可执行文件，即使在没有安装 Node.js 的设备上也能运行。

### [地图edia](https://mapedia.cc/view/5d12cb947706814e12ba5e3b449910b1)
> 孔子周游列国

### [你想了解哪个仓库？](https://deepwiki.com/)

### [VideoAdGuard - B站视频植入广告检测器](https://github.com/Warma10032/VideoAdGuard)

### [卫星图](https://rammb-slider.cira.colostate.edu/?sat=himawari&sec=full_disk&x=11136&y=11296&z=0&angle=0&im=60&ts=3&st=0&et=0&speed=130&motion=loop&p%5B0%5D=geocolor&opacity%5B0%5D=1&pause=20250923020000&slider=-1&hide_controls=0&mouse_draw=0&follow_feature=0&follow_hide=0&s=rammb-slider&draw_color=FFD700&draw_width=6&map=1&lat=0)

### [Tesseract-OCR Windows 64-bit 5.5.0 安装与使用指南](https://blog.csdn.net/gs80140/article/details/148138997)

### [paddleOCR理解及识别手写体，手写公式，表格](https://blog.csdn.net/m0_68926749/article/details/134843387)
```bash
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple paddlepaddle
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple paddleocr
```

### [通用OCR产线使用教程](https://www.paddleocr.ai/latest/version3.x/pipeline-usage/OCR.html#422)

### [浏览器指纹检测器](https://fingerprint.goldenowl.ai/)
> 该工具旨在揭示您在浏览互联网时共享的数据，并通过自定义您授予的权限来帮助您加强隐私保护。它不使用 cookies，也不收集、存储或传输任何个人信息。

### [本项目基于 Bilibili 的 index-tts，提供 LoRA 单说话人 / 多说话人 的微调方案，用于提升精品说话人合成音频的 韵律和自然度。](https://github.com/asr-pub/index-tts-lora/blob/main/README_zh.md)

### [开始音乐创作之旅](https://learningmusic.ableton.com/zh-Hans/)

### [酷炫开源游戏](https://github.com/michelpereira/awesome-open-source-games)

### [ThreeJs 制作的魔方游戏，支持自定义魔方阶级（目前界面上只开放 2-10 阶魔方）。](https://pengfeiw.github.io/rubiks-cube/)

### [正则表达式可视化工具](https://regex-vis.com/)

### [Python项目管理神器 PDM，用它管理项目爽到飞起！](https://juejin.cn/post/7503596255122161690)

### [泄露记录](https://databreach.com/)

### [Magentic-UI](https://github.com/microsoft/magentic-ui)
> Magentic-UI 是一个以人为中心的 AI 代理研究原型，可解决复杂的网络和编码任务，这些任务可能需要监控。

### playwright
> Playwright 是一个用于自动化浏览器操作的强大工具，支持多种浏览器（如 Chrome、Firefox、Safari）和平台（如 Windows、macOS、Linux）。

### [umy-ui 一套为开发者准备的基于 Vue 2.0 的桌面端组件库，完美解决表格万级数据渲染卡顿，编辑表格卡顿问题](https://github.com/popo-fishes/umy-ui)

### [SingleFile](https://github.com/gildas-lormeau/SingleFile)
> SingleFile 是一个兼容 Chrome、Firefox（桌面版和移动版）、Microsoft Edge、Safari、Vivaldi、Brave、Waterfox、Yandex 浏览器和 Opera 的网络扩展（以及一个命令行工具）。

### [矩阵乘法](http://matrixmultiplication.xyz/)

### [全球儿歌乐园](https://beddysongs.com/zh)

### [Alabaster 配色方案](https://github.com/tonsky/sublime-scheme-alabaster#variations-1)

### [纯前端 LaTeX 公式识别工具](https://github.com/alephpi/Texo)

### [中国节假日](https://github.com/vsme/chinese-days)

### [完整的多说话人语音生成 Web 应用](https://github.com/zhao-kun/VibeVoiceFusion/blob/main/README_zh.md)
> VibeVoiceFusion 是一个Web 应用，用于生成高质量、多说话人的合成语音，具备声音克隆功能。基于微软的 VibeVoice 模型（AR + 扩散架构），本项目提供完整的全栈解决方案，包含直观的用户界面、项目管理和先进的显存优化功能。

### [WeFinance](https://github.com/JasonRobertDestiny/WeFinance/blob/main/README_zh-CN.md#%E7%AE%97%E6%B3%95%E6%B7%B1%E5%BA%A6%E8%A7%A3%E6%9C%AF%E6%9C%9A)
> AI驱动的个人财务助理 - 基于Vision LLM技术，将账单图片转化为可执行的财务洞察

### [OCR Arena](https://www.ocrarena.ai/battle)
> OCR Arena 是一个基于 Vision LLM 技术的在线 OCR 服务，它可以将图片中的文本转化为可编辑的文本。

### [HumanLayer](https://www.humanlayer.dev/blog/writing-a-good-claude-md)
> HumanLayer 是一个基于 Claude 技术的在线写作助手，它可以帮助用户提高写作效率和质量。

### [Code996](https://github.com/hellodigua/code996)
> Code996 是一个开源项目，它提供了一个平台，让开发人员可以在其中编写和运行代码。

### [黑客新闻](https://news.ycombinator.com/)


### [VS Code Playground](https://pawelcislo.com/posts/my-vs-code-playground/#vscodedev)




### [Tree 树形目录可视化生成器](https://devtool.tech/tree)

&gt; Markdown 列表与 ASCII 树形结构双向转换工具，支持 Tab 键缩进

### [MCP Advisor - MCP服务器智能发现服务](https://mcp.so/zh/server/mcpadvisor/istarwyh)

&gt; 通过自然语言查询发现和推荐 Model Context Protocol 服务器，帮助 AI 助手找到合适的 MCP 服务

### [女娲 Nuwa - 蒸馏牛人思维方式的AI工具](https://github.com/alchaincyf/nuwa-skill)

&gt; 将乔布斯、马斯克、芒格、费曼等名人的认知框架蒸馏成可运行的 Skill，在 Claude Code 中直接调用

### [MCP.so - MCP服务器目录](https://mcp.so/zh)

&gt; 发现和探索各种 Model Context Protocol 服务器的平台

### [ModelScope 魔搭 - AI模型社区](https://modelscope.cn/home)

&gt; 汇聚优质 AI 模型、数据集和创空间的中文 AI 模型平台

### [Can I Run AI locally?](https://www.canirun.ai/)

&gt; 检测你的机器可以运行哪些AI模型，基于浏览器API估算GPU、VRAM等硬件参数适配情况

### [离线应用搜索](https://lixian.online)

&gt; Edge Add-ons 插件搜索工具，支持按名称搜索或粘贴ID、ProductId、商店链接

### [rename.tools - 文件批量重命名工具](https://rename.tools/zh/app)

&gt; 可视化规则链编辑器，支持导入文件或文件夹进行批量重命名操作

### [Learn Claude Code](https://claude.nagdy.me/)

&gt; 12个交互式模块学习 Claude Code，包含终端模拟器、配置构建器和测验，无需安装即可练习

### [CC Unpacked - Claude Code 源代码探索](https://ccunpacked.dev/#agent-loop)

&gt; 深入探索 Claude Code 的代理循环、工具系统、命令目录和隐藏功能，直接从源码映射

### 简约翻译

&gt; 简洁高效的翻译工具或服务，提供轻量化的文本翻译功能
