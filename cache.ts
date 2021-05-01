import { Collection, DiscordenoMessage } from "./deps.ts";
import { ButtonCollector, MessageCollector, ReactionCollector } from "./src/types/collectors.ts";
import { Argument, Command, PermissionLevels } from "./src/types/commands.ts";
import { CustomEvents } from "./src/types/events.ts";
import { Monitor } from "./src/types/monitors.ts";
import { Task } from "./src/types/tasks.ts";

export const bot = {
  arguments: new Collection<string, Argument>(),
  commands: new Collection<string, Command>(),
  eventHandlers: {} as CustomEvents,
  guildPrefixes: new Collection<string, string>(),
  guildLanguages: new Collection<string, string>(),
  messageCollectors: new Collection<string, MessageCollector>(),
  reactionCollectors: new Collection<string, ReactionCollector>(),
  buttonCollectors: new Collection<string, ButtonCollector>(),
  inhibitors: new Collection<
    string,
    (
      message: DiscordenoMessage,
      command: Command,
    ) => Promise<boolean> | boolean
  >(),
  monitors: new Collection<string, Monitor>(),
  permissionLevels: new Collection<
    PermissionLevels,
    (
      message: DiscordenoMessage,
      command: Command,
    ) => Promise<boolean> | boolean
  >(),
  tasks: new Collection<string, Task>(),
  runningTasks: [] as number[],
  memberLastActive: new Collection<string, number>(),
};
