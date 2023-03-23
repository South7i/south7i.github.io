#!/usr/bin/env sh
 
# 忽略错误
set -e
 
# 构建
pnpm run build
 
# 进入待发布的目录
cd docs/.vitepress/dist
 
git init
git add -A
git commit -m 'deploy'
 
git push -f git@github.com:South7i/south7i.github.io.git main:gh-pages  #提交到这个分支
 
cd -
 
rm -rf docs/.vitepress/dist  #删除dist文件夹