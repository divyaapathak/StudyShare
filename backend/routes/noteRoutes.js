import express from "express";
import protect from "../middleware/authMiddleware.js";
import { uploadNote, getAllNotes } from "../controllers/noteController.js";

const router = express.Router();

router.post("/upload", protect, uploadNote);
router.get("/", getAllNotes);

export default router;