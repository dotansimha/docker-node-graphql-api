#/bin/bash

GIT_REVISION=`git log -1 --format="%H"`
docker login -u $DOCKER_USER -p $DOCKER_PASS

docker build -t dotansimha/docker-remote-graphql-api:$GIT_REVISION ./
docker tag dotansimha/docker-remote-graphql-api:$GIT_REVISION dotansimha/docker-remote-graphql-api:latest
docker push dotansimha/docker-remote-graphql-api
