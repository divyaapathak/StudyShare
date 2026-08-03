import Note from "../models/Note.js";

// Upload Note
export const uploadNote = async (req, res) => {
  try {
    const { title, description, subject, semester, branch } = req.body;

const fileUrl = req.file?.path;

if (!fileUrl) {
  return res.status(400).json({
    success: false,
    message: "PDF file is required",
  });
}

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

// Delete Note
export const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    // Sirf jis user ne upload ki hai wahi delete kar sakta hai
    if (note.uploadedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    await note.deleteOne();

    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Note
export const getSingleNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)
      .populate("uploadedBy", "name email");

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    res.status(200).json({
      success: true,
      note,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Note
export const updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }

    // Sirf uploader update kar sakta hai
    if (note.uploadedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const { title, description, subject, semester, branch } = req.body;

    note.title = title || note.title;
    note.description = description || note.description;
    note.subject = subject || note.subject;
    note.semester = semester || note.semester;
    note.branch = branch || note.branch;

    if (req.file) {
      note.fileUrl = req.file.path;
    }

    await note.save();

    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      note,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Search & Filter Notes
export const searchNotes = async (req, res) => {
  try {
    const { subject, semester, branch, keyword } = req.query;

    let query = {};

    if (subject) {
      query.subject = { $regex: subject, $options: "i" };
    }

    if (semester) {
      query.semester = semester;
    }

    if (branch) {
      query.branch = { $regex: branch, $options: "i" };
    }

    if (keyword) {
      query.$or = [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ];
    }

    const notes = await Note.find(query).populate(
      "uploadedBy",
      "name email"
    );

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