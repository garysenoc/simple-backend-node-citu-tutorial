import express from "express";
import log from "./utils/logger.js";
import connect from "./utils/db.js";
import "dotenv/config";

const app = express();

app.listen(process.env.PORT, async () => {
  log.info(`App is running at http://localhost:${process.env.PORT}`);

  await connect();
});

