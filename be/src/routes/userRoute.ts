import express from "express";
// import { postCreateUser } from "../controllers/userController";
const {
  postCreateUser,
  postUpdateUser,
  delUser,
  getAllUser,
} = require("../controllers/userController");
const router = express.Router();

// post user
router.post("/create", postCreateUser);
// get all user
router.get("/users", getAllUser);
// post update user
router.put("/updateuser", postUpdateUser);
// del delete user
router.delete("/deluser", delUser);

export { router as userRoutes };
