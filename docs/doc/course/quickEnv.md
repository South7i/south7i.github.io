---
title: 5分钟开发环境搭建
---
> 前提：
>
> 以下安装教程基于Windows环境，且已安装Scoop包管理器（强烈推荐！！）
>
> 参考安装以及常用命令：[Scoop](./scoop.md)



## Git

> Git 是一个开源的分布式版本控制系统，用于敏捷高效地处理任何或小或大的项目。
> Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。

```powershell
scoop install -g git
```

[git配置以及常用命令](./git.md)



## JDK
> Java Development ToolKit(Java开发工具包)。JDK是整个JAVA的核心，包括了Java运行环境（Java Runtime Envirnment），一堆Java工具（javac/java/jdb等）和Java基础的类库（即Java API 包括rt.jar）。
>

```powershell
scoop bucket add java
# 搜索jdk版本
scoop serach jdk
# 可以根据结果自行选择安装版本 我这里安装的 openjdk8-redhat 以及 openjdk17
scoop install -g openjdk8-redhat
scoop install -g openjdk17

# 查看jdk当前版本
java -version

# 切换版本 例：scoop reset openjdk17
scoop reset <java>[@<version>] 
```



## NVM
> [Node Version Manager](https://github.com/nvm-sh/nvm)，[node.js](https://nodejs.org/en/)的版本管理器

```powershell
scoop install -g nvm

# 查看所有可安装node版本
nvm list available

# 选择LTS最新版本，此刻我这里选择18.15.0
nvm install 18.15.0

# 查看node版本
node -v

# 查看npm版本
npm -v
```

[学习更多nvm使用以及node配置](./nvm.md)



## Maven
> [Maven](https://maven.apache.org/)是一个项目管理工具，它包含了一个对象模型。一组标准集合，一个依赖管理系统。和用来运行定义在生命周期阶段中插件目标和逻辑。

```
scoop install -g maven
```

[maven配置以及使用](./maven.md)
