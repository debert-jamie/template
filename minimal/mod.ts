import { fastFileLoader, createBot, startBot } from "./deps.ts";
import { BOT_TOKEN, BOT_ID } from "./configs.ts";
import { logger } from "./src/utils/logger.ts";
import { events } from "./src/events/mod.ts";
// import "./fileloader.ts";

const log = logger({ name: "Main" });

log.info("Starting Bot, this might take a while...");

const paths = ["./src/events", "./src/commands"];
await fastFileLoader(paths).then(undefined, (err) => {
  log.fatal(`Unable to Import ${paths}`);
  log.fatal(err);
  Deno.exit(1);
});

const bot = createBot({
  token: BOT_TOKEN,
  botId: BOT_ID,
  intents: [],
  events
});

startBot(bot);
