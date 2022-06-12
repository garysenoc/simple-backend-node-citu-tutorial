import express from "express";
import log from "./utils/logger.js";
import connect from "./utils/db.js";
import "dotenv/config";

import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(express.json());

app.use("/user", UserRoute);

app.listen(process.env.PORT, async () => {
  log.info(`App is running at http://localhost:${process.env.PORT}`);

  await connect();
});

