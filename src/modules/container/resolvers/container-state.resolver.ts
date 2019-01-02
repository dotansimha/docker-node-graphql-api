import { GraphQLModule } from '@graphql-modules/core';
import { ContainerModuleConfig } from '..';

export default ({ config }: GraphQLModule<ContainerModuleConfig>) => ({
  ContainerState: {
    status: state => state.Status,
    running: state => state.Running,
    paused: state => state.Paused,
    restarting: state => state.Restarting,
    oomKilled: state => state.OOMKilled,
    dead: state => state.Dead,
    pid: state => state.Pid,
    exitCode: state => state.ExitCode,
    error: state => state.Error,
    startedAt: state => state.StartedAt,
    finishedAt: state => state.FinishedAt,
  },
});
