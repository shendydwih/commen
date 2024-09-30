import express from "express";

import { create } from "../controllers/UsersControllers.js";

const router = express.Router();

router.post("/users", create);

export default router;