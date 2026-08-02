import User from "../models/User.js";
import Note from "../models/Note.js";

// Get Logged In User
export const getMyProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Profile
export const updateProfile = async (req, res) => {
  try {
    const { name, college, branch, semester, profilePic } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.name = name || user.name;
    user.college = college || user.college;
    user.branch = branch || user.branch;
    user.semester = semester || user.semester;
    user.profilePic = profilePic || user.profilePic;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// My Uploaded Notes
export const myNotes = async (req, res) => {
  try {
    const notes = await Note.find({
      uploadedBy: req.user.id,
    });

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