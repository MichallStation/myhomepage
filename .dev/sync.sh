#! /bin/sh
a=$(pwd)
w="$(cd "$(dirname "$0")" && pwd)"

if [ $@ ]; then
  mes=$@ 
else
  mes="update: data"
fi

cd $w/..
git add .
git commit -m "$mes"
git push
