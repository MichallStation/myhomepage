#! /bin/sh
a=$(pwd)
w="$(cd "$(dirname "$0")" && pwd)"

if [ $@ ]; then
  mes=$@ 
else
  mes="update: something news ✒"
fi

# yarn ci

node clean.js
git pull
cd $w/..
git add .
git commit -m "$mes"
git push
