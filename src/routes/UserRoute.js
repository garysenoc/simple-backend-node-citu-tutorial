import express from "express";

const router = express.Router();

import { test, createUser, login } from "../controller/UserController.js";

router.post("/create-user", createUser);
router.post("/login-user", login);
router.get("/test", test);

export default router;

