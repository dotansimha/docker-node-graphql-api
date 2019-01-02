import { GraphQLModule } from '@graphql-modules/core';
import { ContainerModuleConfig } from '..';

export default ({ config }: GraphQLModule<ContainerModuleConfig>) => ({
  Query: {
    containers: () => config.docker.container.list(),
    container: async (root: never, { id }) => config.docker.container.get(id),
  },
});
