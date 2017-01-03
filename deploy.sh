#!/bin/bash
set +x

cd dist

#Initialize git and commit the existing build
git init
git config --local user.email "rvimal@gmail.com"
git config --local user.name "vimal"
git add .
git commit -m "Build ${BUILD_NUMBER}"


export HEROKU_API_KEY=76cbb385-bd79-4cca-8287-3edb88fc094d
export HEROKU_APP=unbore-me

heroku destroy --confirm unbore-me
heroku create unbore-me

if [ "" != "$(git remote |grep -e '^heroku$')" ]; then
        git remote rm heroku
fi


git remote add heroku git@heroku.com:${HEROKU_APP}.git


git push -f heroku ${GIT_BRANCH}:master
