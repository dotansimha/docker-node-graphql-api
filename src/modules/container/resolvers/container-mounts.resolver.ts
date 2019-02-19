import { GraphQLModule } from '@graphql-modules/core';
import { ContainerModuleConfig } from '..';

export default ({ config }: GraphQLModule<ContainerModuleConfig>) => ({
  ContainerMount: {
    type: state => state.Type,
    source: state => state.Source,
    destination: state => state.Destination,
    mode: state => state.Mode,
    rw: state => state.RW,
    propagation: state => state.Propagation,
  },
});
