import { GraphQLModule } from '@graphql-modules/core';
import { ContainerModuleConfig } from '..';

const portMapper = (exposedPort, ports) => ports.map(port => ({ exposedPort, hostIp: port.HostIp, hostPort: port.HostPort }));

const portsReducer = ports =>
  Object.keys(ports)
    .filter(port => ports[port])
    .reduce((allPorts, exposedPort) => [...allPorts, ...portMapper(exposedPort, ports[exposedPort])], []);

const networkItem = (name, network) => ({
  id: network.NetworkID,
  name: name,
  aliases: network.Aliases,
  gateway: network.Gateway,
  ipAddress: network.IPAddress,
  macAddress: network.MacAddress,
});

const networksReducer = networks => Object.keys(networks).reduce((acc, name) => [...acc, networkItem(name, networks[name])], []);

export default ({ config }: GraphQLModule<ContainerModuleConfig>) => ({
  ContainerNetworkSettings: {
    networks: state => networksReducer(state.Networks || []),
    ports: state => portsReducer(state.Ports || []),
  },
});
