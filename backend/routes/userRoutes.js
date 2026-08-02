import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  getMyProfile,
  updateProfile,
  myNotes,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/me", protect, getMyProfile);
router.put("/update", protect, updateProfile);
router.get("/my-notes", protect, myNotes);

export default router;