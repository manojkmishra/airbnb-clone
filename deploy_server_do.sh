#! /bin/bash
yarn build:server
heroku container:push --app=frozen-brook-28503 web
heroku container:release --app=frozen-brook-28503 web
#docker build -t manojkmishra/airbnb:latest .
#docker push manojkmishra/airbnb:latest
#ssh root@178.128.146.169 "docker pull manojkmishra/airbnb:latest && docker tag manojkmishra/airbnb:latest dokku/airbnb:latest && dokku tags:deploy airbnb latest"