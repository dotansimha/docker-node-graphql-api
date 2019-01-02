import { Container } from 'node-docker-api/lib/container';
import { GraphQLModule } from '@graphql-modules/core';
import { ContainerModuleConfig } from '..';

export default ({ config }: GraphQLModule<ContainerModuleConfig>) => ({
  Container: {
    id: (c: Container) => c.id,
    status: (c: Container) => c.status(),
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
