import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  FileText,
  Upload,
  Download,
  Heart,
  BookOpen,
  Plus,
  LogOut,
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser) {
      setUser(storedUser);
    }

    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/notes"
      );

      setNotes(data.notes);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const stats = [
    {
      title: "Total Notes",
      value: notes.length,
      icon: <FileText className="text-blue-600" size={28} />,
    },
    {
      title: "My Uploads",
      value: notes.filter(
        (note) => note.uploadedBy?._id === user?._id
      ).length,
      icon: <Upload className="text-green-600" size={28} />,
    },
    {
      title: "Downloads",
      value: 0,
      icon: <Download className="text-purple-600" size={28} />,
    },
    {
      title: "Favorites",
      value: 0,
      icon: <Heart className="text-red-500" size={28} />,
    },
  ];

  const subjects = [
    "DBMS",
    "Operating System",
    "Computer Networks",
    "Java",
    "DSA",
    "AI",
  ];
    return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-8">

          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              Welcome 👋 {user?.name}
            </h1>

            <p className="text-gray-500 mt-2">
              Manage your notes and track your activity.
            </p>
          </div>

          <button
            onClick={logout}
            className="mt-4 md:mt-0 flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl transition"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >
              <div className="flex justify-between items-center">

                <div>
                  <p className="text-gray-500">
                    {item.title}
                  </p>

                  <h2 className="text-3xl font-bold mt-2">
                    {item.value}
                  </h2>
                </div>

                {item.icon}

              </div>
            </div>
          ))}

        </div>

        {/* Quick Actions */}

        <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

          <h2 className="text-2xl font-semibold mb-5">
            Quick Actions
          </h2>

          <div className="flex flex-wrap gap-4">

            <Link
              to="/upload"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
            >
              <Plus size={20} />
              Upload Notes
            </Link>

            <Link
              to="/notes"
              className="flex items-center gap-2 border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl transition"
            >
              <BookOpen size={20} />
              Browse Notes
            </Link>

          </div>

        </div>

        {/* Two Columns */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          {/* Recent Notes */}

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-2xl font-semibold mb-5">
              Recent Notes
            </h2>

            <div className="space-y-4">

              {loading ? (

                <p>Loading...</p>

              ) : notes.length === 0 ? (

                <p>No Notes Found</p>

              ) : (

                notes.slice(0, 5).map((note) => (

                  <div
                    key={note._id}
                    className="flex justify-between items-center border rounded-xl p-4 hover:bg-slate-50"
                  >

                    <div>

                      <h3 className="font-semibold">
                        {note.title}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {note.subject}
                      </p>

                    </div>

                    <span className="text-blue-600 font-medium">
                      PDF
                    </span>

                  </div>

                ))

              )}

            </div>

          </div>

          {/* Subjects */}

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-2xl font-semibold mb-5">
              Popular Subjects
            </h2>

            <div className="flex flex-wrap gap-3">

              {subjects.map((subject, index) => (

                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                >
                  {subject}
                </span>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}