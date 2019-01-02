import { GraphQLModule } from '@graphql-modules/core';
import { ImageModuleConfig } from '..';

export default ({ config }: GraphQLModule<ImageModuleConfig>) => ({
  Query: {
    images: () => config.docker.image.list(),
    image: (root, { id }) => config.docker.image.get(id),
  },
});
