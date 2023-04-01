## [Node Version Manager](https://github.com/nvm-sh/nvm)



## Get Start

方式1、Scoop 安装

```powershell
scoop install -g nvm
```

方式2、[nvm-windows](https://github.com/coreybutler/nvm-windows)



## 常用命令

```powershell
# 查看本地node版本列表，可选参数available，显示所有可安装版本
nvm list [available]

# 安装指定版本node，可选参数arch，指定安装32或64位
nvm install <version> [arch]

# 使用指定版本node
nvm use <version>	

# 卸载指定版本node
nvm uninstall <version>		

# 查看node版本
node -v	

# 查看npm版本
npm -v	
```



## 更换Npm镜像

```powershell
#修改成淘宝镜像源
npm config set registry https://registry.npmmirror.com
# 验证
npm config get registry
# 返回https://registry.npmmirror.com，说明镜像配置成功。

# 恢复默认镜像
npm config set registry https://registry.npmjs.org
```



## 全局Npm配置

可设置全局包路径，使多版本node共用，切换时降低环境差异。
具体位置可自定义，最好安装路径不要太混乱

```powershell
npm config set prefix "E:\Environment\Scoop\GlobalApps\apps\nvm\npm\node_global"

npm config set cache "E:\Environment\Scoop\GlobalApps\apps\nvm\npm\node_cache"
```

在系统环境变量中添加

```powershell
%NPM_HOME%=E:\Environment\Scoop\GlobalApps\apps\nvm\npm
```

path中添加

```powershell
%NPM_HOME%\node_global
```



## 【可选】使用其他包管理器

推荐使用 pnpm来进行包管理，完全兼容 npm语法。

- 包安装速度极快
- 磁盘空间利用非常高效

```powershell
#pnpm
npm install -g pnpm

#yarn
npm install -g yarn 
```



## 【拓展】[PNPM](https://pnpm.io/)