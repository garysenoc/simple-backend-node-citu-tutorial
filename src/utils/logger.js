import logger from "pino";

const log = logger({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: `mm/d/yyyy hh:mm:ss`,
    },
  },
});

export default log;

