import { Container } from 'node-docker-api/lib/container';
import { GraphQLModule } from '@graphql-modules/core';
import { ContainerModuleConfig } from '..';

export default ({ config }: GraphQLModule<ContainerModuleConfig>) => ({
  Container: {
    id: (c: Container & any) => c.data.Id,
    names: (c: Container & any) => c.data.Names,
    image: (c: Container & any) => c.data.Image,
    imageId: (c: Container & any) => c.data.Image,
    command: (c: Container & any) => c.data.Command,
    created: (c: Container & any) => String(c.data.Created),
    state: (c: Container & any) => c.data.State,
    status: (c: Container & any) => c.data.Status,
    log: async (c: Container) =>
      c
        .logs({
          follow: false,
          stdout: true,
          stderr: true,
        })
        .then((stream: any) => {
          return new Promise((resolve, reject) => {
            let result = '';

            stream.on('data', (data: Buffer) => (result += data.toString()));
            stream.on('error', (err: Error) => reject(err));
            stream.on('close', () => resolve(result));
          });
        }),
  },
});
