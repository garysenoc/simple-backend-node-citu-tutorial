import express from "express";

const router = express.Router();

import { test, createUser } from "../controller/UserController.js";

router.get("/test", test);
router.post("/create-user", createUser);

export default router;

