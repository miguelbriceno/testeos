# -*- ENCODING: UTF-8 -*-

git init

echo Please paste github repository URL:
read urlRepo

if [ $urlRepo == "" ]
then
while [ $urlRepo == "" ]
do
echo Please paste github repository URL:
read urlRepo
done
fi

git remote add origin $urlRepo
git add .
git commit -m "First commit"

echo Write the origin branch name:
read branchName

if [ $branchName == "" ]
then
while [ $branchName == "" ]
do
echo Please paste github repository URL:
read branchName
done
fi

git push -u origin $branchName


# End of the script 
exit
