import { GraphQLModule } from '@graphql-modules/core';
import { loadResolversFiles, loadSchemaFiles } from '@graphql-modules/sonar';
import { mergeGraphQLSchemas, mergeResolvers } from '@graphql-modules/epoxy';
import { Docker } from 'node-docker-api';
import { containerModule } from '../container/index';

export interface ExecModuleConfig {
  docker: Docker;
}

export const execModule = new GraphQLModule<ExecModuleConfig>({
  name: 'exec',
  imports: [containerModule],
  typeDefs: mergeGraphQLSchemas(loadSchemaFiles(__dirname + '/schema/')),
  resolvers: mergeResolvers(loadResolversFiles(__dirname + '/resolvers/')),
});
