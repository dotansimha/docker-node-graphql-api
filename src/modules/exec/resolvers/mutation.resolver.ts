import { GraphQLModule } from '@graphql-modules/core';
import { ExecModuleConfig } from '..';

const promisifyStream = stream =>
  new Promise((resolve, reject) => {
    stream.on('data', data => console.log(data.toString()));
    stream.on('end', resolve);
    stream.on('error', reject);
  });

export default ({ config }: GraphQLModule<ExecModuleConfig>) => ({
  Mutation: {
    exec: async (root: never, { options }) => {
      // const { docker } = config;
      // const { imageId, command } = options;

      // const container = await docker.container.create({ Image: imageId, Cmd: [command] });
      // container.start();

      // return container;
    },
  },
});
