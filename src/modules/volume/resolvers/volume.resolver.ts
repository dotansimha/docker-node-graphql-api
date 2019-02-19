import { GraphQLModule } from '@graphql-modules/core';
import { VolumeModuleConfig } from '..';
import { Volume } from 'node-docker-api/lib/volume';

export default ({ config }: GraphQLModule<VolumeModuleConfig>) => ({
  Volume: {
    id: (i: Volume & any) => i.id,
    created: (i: Volume & any) => i.data.Created,
    driver: (i: Volume & any) => i.data.Driver,
    labels: (i: Volume & any) => i.data.Labels || [],
    mountpoint: (i: Volume & any) => i.data.Mountpoint,
    name: (i: Volume & any) => i.data.Name,
    options: (i: Volume & any) => i.data.Options,
    scope: (i: Volume & any) => i.data.Scope,
  },
});
