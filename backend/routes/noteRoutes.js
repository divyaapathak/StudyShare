import express from "express";
import protect from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";
import {
  uploadNote,
  getAllNotes,
} from "../controllers/noteController.js";
import {
  uploadNote,
  getAllNotes,
  getSingleNote,
  deleteNote,
} from "../controllers/noteController.js";
import {
  uploadNote,
  getAllNotes,
  getSingleNote,
  deleteNote,
  updateNote,
} from "../controllers/noteController.js";
import {
  uploadNote,
  getAllNotes,
  getSingleNote,
  updateNote,
  deleteNote,
  searchNotes,
} from "../controllers/noteController.js";





const router = express.Router();

router.post(
  "/upload",
  protect,
  upload.single("file"),
  uploadNote
);

router.get("/", getAllNotes);
router.get("/search", searchNotes);
router.get("/:id", getSingleNote);
router.delete("/:id", protect, deleteNote);
router.put(
  "/:id",
  protect,
  upload.single("file"),
  updateNote
);


export default router;