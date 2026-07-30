import { Search, Download } from "lucide-react";

const notes = [
  {
    id: 1,
    title: "DBMS Notes",
    subject: "Database",
    semester: "Semester 4",
  },
  {
    id: 2,
    title: "Operating System",
    subject: "OS",
    semester: "Semester 4",
  },
  {
    id: 3,
    title: "Computer Networks",
    subject: "CN",
    semester: "Semester 5",
  },
  {
    id: 4,
    title: "Java Programming",
    subject: "Java",
    semester: "Semester 3",
  },
  {
    id: 5,
    title: "Data Structures",
    subject: "DSA",
    semester: "Semester 3",
  },
  {
    id: 6,
    title: "Artificial Intelligence",
    subject: "AI",
    semester: "Semester 6",
  },
];

export default function BrowseNotes() {
  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold text-center text-slate-900">
          Browse Notes
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Search and download study notes.
        </p>

        {/* Search */}

        <div className="relative max-w-xl mx-auto mt-10">

          <Search
            className="absolute left-4 top-4 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search notes..."
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {notes.map((note) => (

            <div
              key={note.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >

              <h2 className="text-xl font-semibold">
                {note.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {note.subject}
              </p>

              <span className="inline-block mt-3 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {note.semester}
              </span>

              <button
                className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl flex justify-center items-center gap-2 hover:bg-blue-700 transition"
              >
                <Download size={18} />
                Download
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}