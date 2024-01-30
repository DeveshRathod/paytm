import express from "express";
import {
  signin,
  signup,
  update,
  getAll,
} from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.put("/", authMiddleware, update);
router.get("/bulk", authMiddleware, getAll);

export default router;
