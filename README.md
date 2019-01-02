## Docker GraphQL API

This repo contains the source code of `dotansimha/docker-remote-graphql-api` docker image.

This image should run on the same server as your Docker engine, and it exposes GraphQL API for the Docker internal API.

It's useful if you need to have an easy API for Docker, for use cases like containers pool.

It's using [node-docker-api](https://www.npmjs.com/package/node-docker-api) behind the scenes, and exposes an easy-to-use GraphQL API.

## How to use?

```
docker run --name docker-api-graphql -d -p 8080:8080 -v /var/run/docker.sock:/var/run/docker.sock dotansimha/docker-remote-graphql-api
```

Your GraphQL API will be available now in: `http://YOUR-SERVER:8080/graphql`

If you wish to have access to the GraphQL Playground (GraphiQL), add `-e NODE_ENV-"development"` to your run command, then go to `http://YOUR-SERVER:8080/graphiql`
