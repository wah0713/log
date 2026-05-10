### git提交本地分支到远程分支
> https://www.cnblogs.com/ydxblog/p/7988317.html
### git 部分指令
```bash
git status 查看提交状态
git log
git log origin/master
git reset --mixed commitID
git reset --soft HEAD^ // 上一个版本
git reset --soft HEAD~3 // HEAD^^^ 相当
git push origin dev:personal/you_dev 推送远程分支
git push origin -d personal/you_dev 删除远程分支
git branch -r 查看远程
git branch -a 查看所有分支
git branch -D 分支名 // 删除本地分支
git checkout personal/you_dev 切换分支
git cherry-pick -m commitID
git revert commitID // 只是一条当前提交，而不是从现在到目标提交之间的所有提交
git revert --help
git stash 储存
git stash pop 储存 出
```
### git checkout -b '新的分支名'
### [git push 命令](https://www.runoob.com/git/git-push.html)
### [git fetch 和git pull 的差别](https://www.cnblogs.com/windok/p/13291414.html)
### [Git 如何优雅地回退代码](https://www.cnblogs.com/zhenbianshu/p/12018714.html)
### [使用Git命令更改文件夹名称](https://www.dazhuanlan.com/2020/01/06/5e1299730482c/)
&gt; git vm oldName newName
### git hook
### [git reflog](https://blog.csdn.net/yuquan0821/article/details/114670541)
### git rebase -i  commitId (合并提交)
### git pull -r (git pull -rebase)
### git log --name-only
> 查询某次提交的文件列表
### git log --stat
> 显示每个log的commit 标题，并且显示哪几个文件被修改了，各个文件增加和删除了多少行。
### [Git 代码管理（代码提交和代码回退）](https://blog.csdn.net/weixin_43790276/article/details/100549799)
### [git 删除远程分支文件](https://blog.csdn.net/z2536083458/article/details/86622365)
### [(Git)合并多个commit](https://segmentfault.com/a/1190000007748862)
### [如何退出git rebase 命令行](https://segmentfault.com/q/1010000023739076)
### [Linux 命令](https://github.com/jaywcjlove/linux-command)

> linux-command


### 当前分支改名

git branch -m newName


### [git stash 命令实用指南 | Linux 中国](https://zhuanlan.zhihu.com/p/364339115)

```bash
git stash list
git stash pop stash@{1}
git stash clear 通过删除所有的暂存库来清空该列表。
git stash drop <stash_id> 从暂存列表中删除一个特定的暂存。
```


### [git 重命名远程分支名](https://segmentfault.com/a/1190000019539669)


### [GitHub CI/CD 基础，前端项目云服务器自动化部署](https://juejin.cn/post/7057776355450028045)

> cicd


### [SVG-Morpheus实现SVG图标图形间的补形动画](https://www.zhangxinxu.com/wordpress/2014/12/github-svg-morpheus-shape-path-free-transform/)


### [中国省市区数据](https://gitee.com/shadowy/china-city)


### [李跳跳](https://github.com/rongzhiy/LiTiaotiao)


### [Fetch GitHub Hosts](https://hosts.gitcdn.top/)

> hosts


### [本地持久存储](https://github.com/prazdevs/pinia-plugin-persistedstate)


### [宝宝字帖](https://github.com/jaywcjlove/copybook-generator)


### [git add 多个文件和文件夹的方法](https://blog.csdn.net/sphinx1122/article/details/89789929)

```bash
git config/*
```


### [科学 PDF 文档翻译及双语对照工具](https://github.com/Byaidu/PDFMathTranslate/blob/main/README_zh-CN.md)

> python 实现的科学文档翻译及双语对照工具


### [DashPlayer](https://github.com/solidSpoon/DashPlayer)

> 一款专为英语学习打造的视频播放器


### [DOOM Captcha](https://github.com/vivirenremoto/doomcaptcha)

> DOOM 风格的验证码


### [github收藏展示图](https://star-history.com/)


### [代码对比库](https://github.com/MrWangJustToDo/git-diff-view)

> Git Diff Component vue react


### [Web 终极拦截技巧（全是骚操作）](https://hughfenghen.github.io/posts/2023/12/23/web-spy/)


### [汇聚多个GPT](https://github.com/lencx/Noi)


### [cloudflare-ai-web](https://github.com/Jazee6/cloudflare-ai-web)

> 基于 Cloudflare Workers 的 AI 聊天机器人，支持上下文对话


### [前端模糊搜索](https://github.com/m31coding/fuzzy-search)


### [BabelDuck](https://github.com/Orenoid/BabelDuck)

> BabelDuck 是一个面向各水平层次语言学习者的高度可定制化 AI 口语对话练习应用，并对初学者更友好，旨在将口语表达练习的门槛与心智负担降至最低。
> 口语练习


### [30 天学 Python](https://github.com/Asabeneh/30-Days-Of-Python/blob/master/Chinese/04_strings.md)


### [监控chrome扩展是否被自己调接口](https://github.com/dnakov/little-rat)

> 🐀 小型 chrome 扩展，用于监控（并选择性地阻止）其他扩展的网络调用


### [本项目旨在打造一本开源免费、新手友好的数据结构与算法入门教程。](https://github.com/krahets/hello-algo)


### [支持 React 项目本地开发时页面上对应元素即可跳转到编辑器对应组件行列。](https://github.com/aaamoon/react1s)


### [Web 端实时防挡脸弹幕（基于机器学习）](https://hughfenghen.github.io/posts/2023/06/21/body-mask-danmaku/)


### [You-Get](https://github.com/soimort/you-get)

> pthon3 -m pip install you-get
> 一个命令行工具，用于下载视频、音频、图片、直播等互联网资源。
> 支持的网站包括 YouTube、Twitter、Facebook、Instagram、Bilibili、Vimeo、Twitch、Youku、AcFun 等。


### [桌面按键宠物](https://github.com/ayangweb/BongoCat)


### [通过在空闲时间预取或预呈现视口内链接来加快后续页面加载速度](https://github.com/GoogleChromeLabs/quicklink)

> 重点的是实现思路


### [眼动追踪](https://github.com/akchro/eyesite)


### [git 推荐默认配置](https://blog.gitbutler.com/how-git-core-devs-configure-git/)


### [git 工作树](https://opensource.com/article/21/4/git-worktree)


