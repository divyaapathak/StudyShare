import Note from "../models/Note.js";

// Upload Note
export const uploadNote = async (req, res) => {
  try {
    const { title, description, subject, semester, branch, fileUrl } = req.body;

    if (!title || !subject || !semester || !branch || !fileUrl) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields",
      });
    }

    const note = await Note.create({
      title,
      description,
      subject,
      semester,
      branch,
      fileUrl,
      uploadedBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Note uploaded successfully",
      note,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Notes
export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().populate("uploadedBy", "name email");

    res.status(200).json({
      success: true,
      count: notes.length,
      notes,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};