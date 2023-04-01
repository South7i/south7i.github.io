---
title: Scoop
---

Scoop是Windows的命令行安装程序，是一个强大的包管理工具。
>
> 「一行代码」急速安装。💪
>
> 
>
> Scoop 来安装和管理我们的软件：
>
> - 集搜索、下载、安装、更新软件于一体：极大的降低了安装维护一个软件的成本，我们甚至不必在软件本身的复杂菜单中寻找那个更新按钮来更新软件自己
> - 将软件干干净净的安装到电脑的「用户文件夹」下：这样既不会污染路径也不会请求不必要的权限（UAC）
> - 在卸载软件的时候，能够尽量清空软件在电脑上存储的任何数据和痕迹
>
> 特别的，Scoop 最适合安装那种干净、小巧、开源的软件。并且，Scoop 也极度适合为开发者配置开发环境。

> [Scoop Git地址](https://github.com/ScoopInstaller/Scoop)



## [Quick Start](https://github.com/ScoopInstaller/Scoop/wiki/Quick-Start)

 ```powershell
 # 安装前 在 PowerShell 中输入下面内容，保证允许本地脚本的执行：
 Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
 ```

### 安装 Scoop 至自定义目录

Assuming the target directory is `C:\scoop`, in a PowerShell command console, run:

```powershell
$env:SCOOP='D:\environment\scoop\Main'
[environment]::setEnvironmentVariable('SCOOP',$env:SCOOP,'User')
```

### 安装 global apps 至自定义目录

Assuming the target directory is `C:\apps`, in an admin-enabled PowerShell command console, run:

```powershell
$env:SCOOP_GLOBAL='D:\environment\scoop\GlobalApps'
[environment]::setEnvironmentVariable('SCOOP_GLOBAL',$env:SCOOP_GLOBAL,'Machine')
```

### 安装 Scoop

In a PowerShell command console, run:

```powershell
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
```

or the shorter:

```powershell
iwr -useb get.scoop.sh | iex
```

Assuming you didn't see any error messages, Scoop is now ready to run.



## Scoop 使用方法

### Scoop 基础语法

 Scoop 命令的设计很简单，是「`scoop` + 动作 + 对象」的语法。其中「对象」是可省略的。

常用的几个基础动作有这些：

| 命令      | 动作         |
| --------- | ------------ |
| 🌟search   | 搜索软件名   |
| 🌟install  | 安装软件     |
| update    | 更新软件     |
| 🌟status   | 查看软件状态 |
| uninstall | 卸载软件     |
| info      | 查看软件详情 |
| home      | 打开软件主页 |

### 示例

```powershell
# 默认使用解压
scoop install 7zip
```

```

https://chaisw.cn/blog/1912.html

https://github.com/devblackops/Terminal-Icons

```



## 进阶配置

### 配置代理

```powershell
# clash默认端口7890
scoop config proxy localhost:7890

# 恢复系统代理
scoop config rm proxy
```



### bucket使用

> 所有的包管理器都会有相应的软件仓库 ，而 bucket 就是 Scoop 中的软件仓库。细心的你可能会发现 `scoop` 翻译为中文是 “舀”，而 `bucket` 是 “水桶”，所以安装软件可以理解为从水桶里舀水，似乎很形象的说。 Scoop 默认软件仓库（main bucket）软件数量是有限的，但是可以进行额外的添加。



```powershell
scoop bucket add extras 
scoop bucket add java 
scoop bucket add versions

# 安装三方bucket，dorado 涵盖国内常用软件
scoop bucket add dorado https://github.com/chawyehsu/dorado
```



### Aria2配置

> Aria2 安装后，Scoop 会自动调用 Aria2 进行多线程加速下载。

```powershell
scoop install aria2
```



与 Aria2 有关的设置选项：

- `aria2-enabled`: 开启 Aria2 下载，默认`true`
- `aria2-retry-wait`: 重试等待秒数，默认`2`
- `aria2-split`: 单任务最大连接数，默认`5`
- `aria2-max-connection-per-server`: 单服务器最大连接数，默认`5` ，最大`16`
- `aria2-min-split-size`: 最小文件分片大小，默认`5M`

优化其配置

```powershell
scoop config aria2-warning-enabled false

# aria2 在 Scoop 中默认开启
scoop config aria2-enabled true
# 关于以下参数的作用，详见aria2的相关资料
scoop config aria2-retry-wait 4
scoop config aria2-split 16
scoop config aria2-max-connection-per-server 16
scoop config aria2-min-split-size 4M
```



## 常用命令

#### 软件安装管理

```powershell
# 搜索
scoop search <appName>
# 安装
scoop install (-g) <appName>

# 更新 Scoop 自身
scoop update
# 更新某些app
scoop update <appName1> <appName2> 
# 更新所有 app （可能需要在apps目录下操作）   
scoop update *
# 禁止某程序更新   
scoop hold    
# 允许某程序更新   
scoop unhold  

# 卸载
scoop uninstall <appName>
```



#### 版本切换

```powershell
scoop reset <appName>
```



#### 清理安装包缓存

> Scoop 会保留下载的安装包，对于卸载后又想再安装的情况，不需要重复下载。但长期累积会占用大量的磁盘空间，如果用不到就成了垃圾。这时可以使用 `scoop cache` 命令来清理。

```powershell
# 显示安装包缓存
scoop cache show
# 删除所有的安装包缓存
scoop cache rm *

# 如果不希望安装和更新软件时保留安装包缓存，可以加上 -k
scoop install -k <app>
scoop update -k *
```

