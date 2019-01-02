import { GraphQLModule } from '@graphql-modules/core';
import { ContainerModuleConfig } from '..';

function parseArgsStringToArgv(value) {
  let myRegexp = /([^\s'"]+(['"])([^\2]*?)\2)|[^\s'"]+|(['"])([^\4]*?)\4/gi;
  let myString = value;
  let myArray = [];
  let match: any;

  do {
    match = myRegexp.exec(myString);
    if (match !== null) {
      myArray.push(match[1] || match[5] || match[0]);
    }
  } while (match !== null);

  return myArray;
}

export default ({ config }: GraphQLModule<ContainerModuleConfig>) => ({
  Mutation: {
    create: async (root: never, { options }) => {
      const parsedCmd = options.cmd ? parseArgsStringToArgv(options.cmd) : [];

      const container = await config.docker.container.create({
        Image: options.image,
        name: options.name,
        Cmd: parsedCmd,
      });

      if (options.start) {
        return container.start();
      }

      return container;
    },
    start: (root: never, { id }) => config.docker.container.get(id).start(),
    restart: (root: never, { id }) => config.docker.container.get(id).restart(),
    stop: (root: never, { id }) => config.docker.container.get(id).stop(),
    delete: async (root: never, { id, force }) => {
      await config.docker.container.get(id).delete({ force: !!force });

      return true;
    },
  },
});
