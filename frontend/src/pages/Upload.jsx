import { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function Upload() {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    semester: "",
    description: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    console.log(file);

    alert("Notes Uploaded Successfully!");
  };

  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-8">

        <h1 className="text-3xl font-bold text-center text-slate-800">
          Upload Notes
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Share your study material with other students.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          {/* Title */}
          <div>
            <label className="block mb-2 font-medium">
              Notes Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Enter notes title"
              value={formData.title}
              onChange={handleChange}
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

          {/* Description */}
          <div>
            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="4"
              name="description"
              placeholder="Write a short description..."
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* PDF Upload */}
          <div>
            <label className="block mb-2 font-medium">
              Upload PDF
            </label>

            <label className="flex items-center justify-center gap-3 border-2 border-dashed border-blue-400 rounded-xl p-8 cursor-pointer hover:bg-blue-50 transition">
              <UploadCloud className="text-blue-600" size={32} />

              <span>
                {file ? file.name : "Choose PDF File"}
              </span>

              <input
                type="file"
                accept=".pdf"
                hidden
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Upload Notes
          </button>

        </form>
      </div>
    </div>
  );
}