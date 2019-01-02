import { GraphQLModule } from '@graphql-modules/core';
import { ContainerModuleConfig } from '..';

export default ({ config }: GraphQLModule<ContainerModuleConfig>) => ({
  Query: {
    containers: () => config.docker.container.list(),
    container: async (root: never, { id }) => {
      const c = await config.docker.container.get(id);

      console.log(await c.status());

      return c;
    },
  },
});
