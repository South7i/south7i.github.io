---
title: Git
---
## Git配置

```powershell
# 查看git已有配置信息
git config --list

# 配置个人用户信息
git config --global user.name "caleb"
git config --global user.email "caleb@gmail.com"
```

**配置默认仓库名称**

> GitHub宣布，自2020年10月1日起，在GitHub平台上创建的所有源代码存储库都将默认命名为main ，而非原本的master 。

这里我们也统一使用main分支作为默认分支名
```powershell
git config --global init.defaultBranch main
```

**配置SSH-Key**

- 替换为自己邮箱，执行下方命令，即可生成密钥

```powershell
 ssh-keygen -t rsa -C "caleb@gmail.com"
# 执行命令后需要进行3次或4次确认：
# 1.确认秘钥的保存路径（如果不需要改路径则直接回车）；
# 2.如果上一步置顶的保存路径下已经有秘钥文件，则需要确认是否覆盖（如果之前的秘钥不再需要则直接回车覆盖，如需要则手动拷贝到其他目录后再覆盖）；
# 3.创建密码（如果不需要密码则直接回车）；
# 4.确认密码如果不需要密码则直接回车)；
```
- 操作完成后，路径下会生成2个名为id_rsa和id_rsa.pub的文件

- 文本工具打开生成的id_rsa.pub文件，复制其中的内容
- 打开Github，Settings -> SSH and GPG keys
- 点击New SSH Key,将复制内容粘贴进去保存即可。



## Git基本操作

**创建仓库命令**

下表列出了 git 创建仓库的命令：

| 命令        | 说明                                   |
| :---------- | :------------------------------------- |
| `git init`  | 初始化仓库                             |
| `git clone` | 拷贝一份远程仓库，也就是下载一个项目。 |

------

**提交与修改**

Git 的工作就是创建和保存你的项目的快照及与之后的快照进行对比。

下表列出了有关创建与提交你的项目的快照的命令：

| 命令         | 说明                                     |
| :----------- | :--------------------------------------- |
| `git add`    | 添加文件到暂存区                         |
| `git status` | 查看仓库当前的状态，显示有变更的文件。   |
| `git diff`   | 比较文件的不同，即暂存区和工作区的差异。 |
| `git commit` | 提交暂存区到本地仓库。                   |
| `git reset`  | 回退版本。                               |
| `git rm`     | 将文件从暂存区和工作区中删除。           |
| `git mv`     | 移动或重命名工作区文件。                 |

**提交日志**

| 命令               | 说明                                 |
| :----------------- | :----------------------------------- |
| `git log`          | 查看历史提交记录                     |
| `git blame <file>` | 以列表形式查看指定文件的历史修改记录 |

**远程操作**

| 命令         | 说明               |
| :----------- | :----------------- |
| `git remote` | 远程仓库操作       |
| `git fetch`  | 从远程获取代码库   |
| `git pull`   | 下载远程代码并合并 |
| `git push`   | 上传远程代码并合并 |



## Git分支管理

**查看分支**

```powershell
# 查看本地所有分支
git branch 
# 查看远程所有分支
git branch -r 
# 查看本地和远程的所有分支
git branch -a
```

**新建分支**

```powershell
# 创建分支
git branch 「name」 
# 切换分支
git checkout 「name」
# 上面两条也可合并为
git checkout -b 「name」
```

**重命名分支**

```powershell
git branch -m 「name」 「new name」
```

**切换分支**

```powershell
git checkout 「name」
```

**删除分支**

```powershell
git branch -d 「name」
```

**合并分支**

```powershell
# 切换到需要合并到的分支
git checkout 「name」
# 将远端branchname分支合并到name分支
git merge 「branchname」

# 最重要一点，在操作结束，记得push提交修改
git push origin 「name」
```




## Git拓展