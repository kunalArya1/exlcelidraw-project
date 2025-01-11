import { createRoom, signin, signup } from "../controllers/user.controllers";

const { Router } = require("express");

const router = Router();

router.route("/signup").post(signup);
router.route("signin").post(signin);
router.route("/create-room").post(createRoom);

export default router;
