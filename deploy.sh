HEROKU_API_KEY=$1
echo $HEROKU_API_KEY >> test-log.txt
cat text-log.txt
heroku create unbore-me
git push heroku master
