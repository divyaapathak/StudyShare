import { useEffect, useState } from "react";
import axios from "axios";
import {
  User,
  Mail,
  GraduationCap,
  Upload,
  Download,
  Edit,
  Save,
  X,
} from "lucide-react";

export default function Profile() {
  const [user, setUser] = useState({});
  const [notes, setNotes] = useState([]);
  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    college: "",
    branch: "",
    semester: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.get(
        "http://localhost:5000/api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(data.user);
      setNotes(data.notes || []);

      setFormData({
        name: data.user.name || "",
        college: data.user.college || "",
        branch: data.user.branch || "",
        semester: data.user.semester || "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfile = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await axios.put(
        "http://localhost:5000/api/users/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(data.message);

      setEditing(false);

      fetchProfile();
    } catch (error) {
      alert(error.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <div className="w-36 h-36 rounded-full bg-blue-600 flex items-center justify-center text-white text-5xl font-bold">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>

            <div className="flex-1">

              {!editing ? (

                                <>

                  <h1 className="text-3xl font-bold text-slate-800">
                    {user.name}
                  </h1>

                  <div className="mt-5 space-y-3 text-gray-600">

                    <p className="flex items-center gap-2">
                      <Mail size={18} />
                      {user.email}
                    </p>

                    <p className="flex items-center gap-2">
                      <GraduationCap size={18} />
                      {user.college}
                    </p>

                    <p className="flex items-center gap-2">
                      <User size={18} />
                      {user.branch} | Semester {user.semester}
                    </p>

                  </div>

                  <button
                    onClick={() => setEditing(true)}
                    className="mt-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
                  >
                    <Edit size={18} />
                    Edit Profile
                  </button>

                </>

              ) : (

                <div className="space-y-4">

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <input
                    type="text"
                    name="college"
                    value={formData.college}
                    onChange={handleChange}
                    placeholder="College"
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <input
                    type="text"
                    name="branch"
                    value={formData.branch}
                    onChange={handleChange}
                    placeholder="Branch"
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <input
                    type="text"
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    placeholder="Semester"
                    className="w-full border rounded-xl px-4 py-3"
                  />

                  <div className="flex gap-4">

                    <button
                      onClick={updateProfile}
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl"
                    >
                      <Save size={18} />
                      Save
                    </button>

                    <button
                      onClick={() => setEditing(false)}
                      className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl"
                    >
                      <X size={18} />
                      Cancel
                    </button>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>
                {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">

            <Upload
              className="mx-auto text-blue-600"
              size={35}
            />

            <h2 className="text-3xl font-bold mt-3">
              {notes.length}
            </h2>

            <p className="text-gray-500">
              Uploaded Notes
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">

            <Download
              className="mx-auto text-green-600"
              size={35}
            />

            <h2 className="text-3xl font-bold mt-3">
              {notes.reduce((total, note) => total + (note.downloads || 0), 0)}
            </h2>

            <p className="text-gray-500">
              Total Downloads
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">

            <User
              className="mx-auto text-purple-600"
              size={35}
            />

            <h2 className="text-3xl font-bold mt-3">
              {new Set(notes.map((note) => note.subject)).size}
            </h2>

            <p className="text-gray-500">
              Subjects Uploaded
            </p>

          </div>

        </div>

        {/* Recent Uploads */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            My Uploaded Notes
          </h2>

          {notes.length === 0 ? (

            <p className="text-center text-gray-500 py-8">
              No notes uploaded yet.
            </p>

          ) : (

            <div className="space-y-4">

              {notes.map((note) => (

                <div
                  key={note._id}
                  className="flex justify-between items-center border rounded-xl p-4 hover:bg-slate-50"
                >

                  <div>

                    <h3 className="font-semibold">
                      {note.title}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {note.subject} • Semester {note.semester}
                    </p>

                  </div>

                  <a
                    href={note.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                  >
                    View PDF
                  </a>

                </div>

              ))}

            </div>

          )}

        </div>
              </div>
    </div>
  );
}