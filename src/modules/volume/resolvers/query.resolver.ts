import { GraphQLModule } from '@graphql-modules/core';
import { VolumeModuleConfig } from '..';

export default ({ config }: GraphQLModule<VolumeModuleConfig>) => ({
  Query: {
    volumes: () => config.docker.volume.list(),
    volume: (root, { id }) => config.docker.volume.list().then(volumes => volumes.find(volume => volume.id === id)),
  },
});
