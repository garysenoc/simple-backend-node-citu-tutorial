import mongoose from "mongoose";
import log from "./logger.js";
import "dotenv/config";

const connect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    log.info("database connected");
  } catch (err) {
    log.error("Could not connect to database");
    process.exit(1);
  }
};

export default connect;

