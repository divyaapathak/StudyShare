
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UploadCloud } from "lucide-react";

export default function Upload() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    semester: "",
    branch: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      setFile(null);
      return;
    }

    if (selectedFile.type !== "application/pdf") {
      alert("Only PDF files are allowed");
      e.target.value = "";
      setFile(null);
      return;
    }

    if (selectedFile.size > 10 * 1024 * 1024) {
      alert("PDF size must be less than 10MB");
      e.target.value = "";
      setFile(null);
      return;
    }

    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a PDF file");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      const uploadData = new FormData();

      uploadData.append("title", formData.title);
      uploadData.append("subject", formData.subject);
      uploadData.append("semester", formData.semester);
      uploadData.append("branch", formData.branch);
      uploadData.append("file", file);

      const { data } = await axios.post(
        "http://localhost:5000/api/notes/upload",
        uploadData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(data.message || "Note uploaded successfully");

      navigate("/dashboard");
    } catch (error) {
      console.error("UPLOAD ERROR:", error);
      console.error("SERVER RESPONSE:", error.response?.data);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Upload Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-slate-800">
          Upload Notes
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Share your study material with other students.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >

          {/* Title */}
          <div>
            <label className="block mb-2 font-medium">
              Notes Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter notes title"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block mb-2 font-medium">
              Subject
            </label>

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Subject</option>
              <option>DBMS</option>
              <option>Operating System</option>
              <option>Computer Networks</option>
              <option>Java</option>
              <option>Data Structures</option>
              <option>Artificial Intelligence</option>
            </select>
          </div>

          {/* Branch */}
          <div>
            <label className="block mb-2 font-medium">
              Branch
            </label>

            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              placeholder="CSE"
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Semester */}
          <div>
            <label className="block mb-2 font-medium">
              Semester
            </label>

            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Semester</option>
              <option>Semester 1</option>
              <option>Semester 2</option>
              <option>Semester 3</option>
              <option>Semester 4</option>
              <option>Semester 5</option>
              <option>Semester 6</option>
              <option>Semester 7</option>
              <option>Semester 8</option>
            </select>
          </div>

          {/* PDF Upload */}
          <div>
            <label className="block mb-2 font-medium">
              Upload PDF
            </label>

            <label className="flex items-center justify-center gap-3 border-2 border-dashed border-blue-400 rounded-xl p-8 cursor-pointer hover:bg-blue-50 transition">

              <UploadCloud
                className="text-blue-600"
                size={32}
              />

              <span className="text-gray-600 text-center">
                {file ? file.name : "Choose PDF File"}
              </span>

              <input
                type="file"
                accept="application/pdf,.pdf"
                hidden
                onChange={handleFileChange}
                required
              />

            </label>

            <p className="text-sm text-gray-500 mt-2">
              PDF only • Maximum size: 10MB
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-xl font-semibold transition"
          >
            {loading ? "Uploading..." : "Upload Notes"}
          </button>

        </form>

      </div>
    </div>
  );
}
