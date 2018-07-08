#! /bin/bash
yarn build:server
docker build -t manojkmishra/airbnb:latest .
docker push manojkmishra/airbnb:latest
ssh root@167.99.11.233 "docker pull manojkmishra/airbnb:latest && docker tag manojkmishra/airbnb:latest dokku/airbnb:latest && dokku tags:deploy airbnb latest"