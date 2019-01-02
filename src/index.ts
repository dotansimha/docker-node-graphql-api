import { Docker } from 'node-docker-api';
import { GraphQLModule } from '@graphql-modules/core';
import { ApolloServer } from 'apollo-server';
import { containerModule } from './modules/container';
import { imageModule } from './modules/image';
import { execModule } from './modules/exec';

async function main(): Promise<void> {
  const port = process.env.PORT || 3000;
  const socketPath = process.env.DOCKER_SOCK || '/var/run/docker.sock';
  const docker = new Docker({ socketPath });

  const api = new GraphQLModule({
    name: 'app',
    imports: [
      imageModule.forRoot({ docker }),
      containerModule.forRoot({ docker }),
      execModule.forRoot({ docker }),
    ],
  });

  const { schema, context } = api;
  const server = new ApolloServer({ schema, context });

  server.listen({ port, playground: true }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

main();
