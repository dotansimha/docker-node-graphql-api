import { Docker } from 'node-docker-api';
import { GraphQLModule } from '@graphql-modules/core';
import { ApolloServer } from 'apollo-server';
import { containerModule } from './modules/container';

async function main(): Promise<void> {
  const port = process.env.PORT || 3000;
  const socketPath = process.env.DOCKER_SOCK || '/var/run/docker.sock';
  const docker = new Docker({ socketPath });

  const api = new GraphQLModule({
    name: 'app',
    imports: [containerModule.forRoot({ docker })],
  });

  const { schema, context } = api;
  const server = new ApolloServer({ schema, context });

  server.listen({ port, playground: true }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

main();
