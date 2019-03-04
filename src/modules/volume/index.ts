import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';
import { Docker } from 'node-docker-api';

export interface VolumeModuleConfig {
  docker: Docker;
}

export const volumeModule = new GraphQLModule<VolumeModuleConfig>({
  name: 'volume',
  typeDefs: mergeGraphQLSchemas(loadSchemaFiles(__dirname + '/schema/')),
  resolvers: mergeResolvers(loadResolversFiles(__dirname + '/resolvers/')),
});
