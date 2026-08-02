import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/noteRoutes.js";
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
import authRoutes from "./routes/authRoutes.js";
app.get("/", (req, res) => {
  res.send("StudyShare Backend Running");
});
app.use("/api/auth", authRoutes);
app.use("/api/notes", noteRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});