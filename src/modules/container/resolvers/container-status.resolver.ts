import { GraphQLModule } from '@graphql-modules/core';
import { ContainerModuleConfig } from '..';

export default ({ config }: GraphQLModule<ContainerModuleConfig>) => ({
  ContainerStatus: {
    created: containerStatus => containerStatus.data.Created,
    path: containerStatus => containerStatus.data.Path,
    name: containerStatus => containerStatus.data.Name,
    imageSha: containerStatus => containerStatus.data.Image,
    state: containerStatus => containerStatus.data.State,
    config: containerStatus => containerStatus.data.Config,
    mounts: containerStatus => containerStatus.data.Mounts,
    networkSettings: containerStatus => containerStatus.data.NetworkSettings,
  },
});
