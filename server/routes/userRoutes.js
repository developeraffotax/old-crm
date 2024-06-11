import express from "express";
import {
  deleteUser,
  getAllUsers,
  loginUser,
  registerUser,
  singleUser,
  updateRole,
  updateUser,
} from "../controllers/userController.js";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Register User
router.post("/register/user", registerUser);

// Login User
router.post("/login/user", loginUser);

// Get All Users
router.get("/get_all/users", requiredSignIn, getAllUsers);

// Get Single User
router.get("/get_user/:id", requiredSignIn, singleUser);

// Update Profile
router.put("/update_profile", requiredSignIn, updateUser);

// Update Role
router.put("/update_role/:id", requiredSignIn, isAdmin, updateRole);

// Delete User
router.delete("/delete_user/:id", requiredSignIn, isAdmin, deleteUser);

export default router;
