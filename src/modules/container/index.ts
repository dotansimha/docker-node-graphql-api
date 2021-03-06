import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';
import { Docker } from 'node-docker-api';
import { imageModule } from '../../modules/image';

export interface ContainerModuleConfig {
  docker: Docker;
}

export const containerModule = new GraphQLModule<ContainerModuleConfig>({
  name: 'container',
  imports: [imageModule],
  typeDefs: mergeGraphQLSchemas(loadSchemaFiles(__dirname + '/schema/')),
  resolvers: mergeResolvers(loadResolversFiles(__dirname + '/resolvers/')),
});
