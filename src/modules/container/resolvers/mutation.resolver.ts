import { GraphQLModule } from '@graphql-modules/core';
import { ContainerModuleConfig } from '..';

export default ({ config }: GraphQLModule<ContainerModuleConfig>) => ({
  Mutation: {
    create: async (root: never, { options }) => {
      const container = await config.docker.container.create({
        Image: options.image,
        name: options.name,
        Cmd: options.cmd,
        Env: options.env ? options.env.map(env => `${env.name}=${env.value}`) : [],
        Labels: options.labels ? options.labels.reduce((acc, label) => ({...acc, [label.name]: label.value}), {}) : {}
      });

      if (options.start) {
        return container.start();
      }

      return container;
    },
    start: (root: never, { id }) => config.docker.container.get(id).start(),
    restart: (root: never, { id }) => config.docker.container.get(id).restart(),
    stop: (root: never, { id }) => config.docker.container.get(id).stop(),
    kill: (root: never, { id }) => config.docker.container.get(id).kill(),
    delete: async (root: never, { id, force }) => {
      await config.docker.container.get(id).delete({ force: !!force });

      return true;
    },
  },
});
