#! /bin/sh
a=$(pwd)
w="$(cd "$(dirname "$0")" && pwd)"

if [ $@ ]; then
  mes=$@ 
else
  mes="update: something news ✒"
fi

# yarn ci

git pull
node clean.js
cd $w/..
git add .
git commit -m "$mes"
git push
