#/bin/bash

GIT_REVISION=`git log -1 --format="%H"`
docker build -t dotansimha/docker-remote-graphql-api:$GIT_REVISION -t dotansimha/docker-remote-graphql-api:latest ./
docker push dotansimha/docker-remote-graphql-api:$GIT_REVISION