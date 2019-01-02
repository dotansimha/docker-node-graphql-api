import { GraphQLModule } from '@graphql-modules/core';
import { ImageModuleConfig } from '..';
import { Image } from 'node-docker-api/lib/image';

export default ({ config }: GraphQLModule<ImageModuleConfig>) => ({
  Image: {
    id: (i: Image & any) => i.data.Id,
    parentId: (i: Image & any) => i.data.ParentId,
    created: (i: Image & any) => i.data.Created,
    size: (i: Image & any) => i.data.Size,
    repoTags: (i: Image & any) => i.data.RepoTags || [],
  },
});
