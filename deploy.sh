#!/bin/bash
set +x

export HEROKU_API_KEY=76cbb385-bd79-4cca-8287-3edb88fc094d
echo $HEROKU_API_KEY
echo $HEROKU_API_KEY > test-log.txt
cat test-log.txt
heroku create unbore-me

git push heroku master
