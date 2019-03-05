import { GraphQLModule } from '@graphql-modules/core';
import { NetworkModuleConfig } from '..';

export default ({ config }: GraphQLModule<NetworkModuleConfig>) => ({
  Query: {
    networks: () => config.docker.network.list(),
    network: (root, { id }) => config.docker.network.list().then(networks => networks.find((network: any) => network.id === id || network.data.Name === id)),
  },
});
