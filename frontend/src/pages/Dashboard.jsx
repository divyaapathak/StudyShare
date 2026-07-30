import { Link } from "react-router-dom";
import {
  FileText,
  Upload,
  Download,
  Heart,
  BookOpen,
  Plus,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Notes",
      value: "120",
      icon: <FileText className="text-blue-600" size={28} />,
    },
    {
      title: "My Uploads",
      value: "15",
      icon: <Upload className="text-green-600" size={28} />,
    },
    {
      title: "Downloads",
      value: "320",
      icon: <Download className="text-purple-600" size={28} />,
    },
    {
      title: "Favorites",
      value: "8",
      icon: <Heart className="text-red-500" size={28} />,
    },
  ];

  const uploads = [
    "DBMS Notes.pdf",
    "Operating System.pdf",
    "Computer Networks.pdf",
    "Java Programming.pdf",
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

        {/* Heading */}

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-800">
            Welcome 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your notes and track your activity.
          </p>
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
                  <p className="text-gray-500">{item.title}</p>

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

        {/* Two Column Layout */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          {/* Recent Uploads */}

          <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-2xl font-semibold mb-5">
              Recent Uploads
            </h2>

            <div className="space-y-4">

              {uploads.map((note, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border rounded-xl p-4 hover:bg-slate-50"
                >
                  <span>{note}</span>

                  <span className="text-blue-600 font-medium">
                    PDF
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Popular Subjects */}

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