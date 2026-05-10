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


