import { GraphQLModule } from '@graphql-modules/core';
import { NetworkModuleConfig } from '..';
import { Network } from 'node-docker-api/lib/network';

export default ({ config }: GraphQLModule<NetworkModuleConfig>) => ({
  Network: {
    id: (n: Network & any) => n.id,
    created: (n: Network & any) => n.data.Created,
    driver: (n: Network & any) => n.data.Driver,
    name: (n: Network & any) => n.data.Name,
    options: (n: Network & any) => n.data.Options,
    scope: (n: Network & any) => n.data.Scope,
    labels: (n: Network & any) => Object.keys(n.data.Labels || {}).map(name => ({
      name,
      value: n.data.Labels[name],
    })),
    enableIPv6: (n: Network & any) => n.data.EnableIPv6,
    IPAM: (n: Network & any) => n.data.IPAM,
    internal: (n: Network & any) => n.data.Internal,
    attachable: (n: Network & any) => n.data.Attachable,
    ingress: (n: Network & any) => n.data.Ingress,
    configFrom: (n: Network & any) => n.data.ConfigFrom,
    configOnly: (n: Network & any) => n.data.ConfigOnly,
    containers: (n: Network & any) => n.data.Containers,
  },
  NetworkConfigFrom: {
    network: (i) => i.Network,
  },
  NetworkConfigIPAM: {
    driver: (i) => i.Driver,
    options: (i) => i.Options,
    config: (i) => i.Config,
  },
  NetworkConfigIPAMConfig: {
    subnet: (i) => i.Subnet,
    gateway: (i) => i.Gateway,
  },
});
