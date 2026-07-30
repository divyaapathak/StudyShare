import { User, Mail, GraduationCap, Upload, Download, Edit } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">

      <div className="max-w-5xl mx-auto">

        {/* Profile Card */}
        <div className="bg-white rounded-3xl shadow-lg p-8">

          <div className="flex flex-col md:flex-row items-center gap-8">

            {/* Avatar */}
            <div className="w-36 h-36 rounded-full bg-blue-600 flex items-center justify-center text-white text-5xl font-bold">
              D
            </div>

            {/* User Details */}
            <div className="flex-1">

              <h1 className="text-3xl font-bold text-slate-800">
                Divya Pathak
              </h1>

              <div className="mt-5 space-y-3 text-gray-600">

                <p className="flex items-center gap-2">
                  <Mail size={18} />
                  divya@gmail.com
                </p>

                <p className="flex items-center gap-2">
                  <GraduationCap size={18} />
                  B.Tech CSE | Semester 6
                </p>

                <p className="flex items-center gap-2">
                  <User size={18} />
                  Student
                </p>

              </div>

              <button className="mt-6 flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
                <Edit size={18} />
                Edit Profile
              </button>

            </div>

          </div>

        </div>

        {/* Statistics */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <Upload className="mx-auto text-blue-600" size={35} />
            <h2 className="text-3xl font-bold mt-3">12</h2>
            <p className="text-gray-500">Uploaded Notes</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <Download className="mx-auto text-green-600" size={35} />
            <h2 className="text-3xl font-bold mt-3">85</h2>
            <p className="text-gray-500">Downloads</p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 text-center">
            <User className="mx-auto text-purple-600" size={35} />
            <h2 className="text-3xl font-bold mt-3">6</h2>
            <p className="text-gray-500">Favorite Subjects</p>
          </div>

        </div>

        {/* Recent Uploads */}

        <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Recent Uploads
          </h2>

          <div className="space-y-4">

            <div className="flex justify-between items-center border rounded-xl p-4">
              <div>
                <h3 className="font-semibold">DBMS Notes</h3>
                <p className="text-sm text-gray-500">Semester 4</p>
              </div>

              <span className="text-blue-600 font-semibold">
                PDF
              </span>
            </div>

            <div className="flex justify-between items-center border rounded-xl p-4">
              <div>
                <h3 className="font-semibold">Operating System</h3>
                <p className="text-sm text-gray-500">Semester 4</p>
              </div>

              <span className="text-blue-600 font-semibold">
                PDF
              </span>
            </div>

            <div className="flex justify-between items-center border rounded-xl p-4">
              <div>
                <h3 className="font-semibold">Computer Networks</h3>
                <p className="text-sm text-gray-500">Semester 5</p>
              </div>

              <span className="text-blue-600 font-semibold">
                PDF
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}