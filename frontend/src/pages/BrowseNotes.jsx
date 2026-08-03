import { useEffect, useState } from "react";
import axios from "axios";
import { Search, Download } from "lucide-react";

export default function BrowseNotes() {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/notes"
      );

      setNotes(data.notes);
      setFilteredNotes(data.notes);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;

    setSearch(value);

    const result = notes.filter((note) =>
      note.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredNotes(result);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold text-center text-slate-900">
          Browse Notes
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Search and download study notes.
        </p>

        <div className="relative max-w-xl mx-auto mt-10">

          <Search
            className="absolute left-4 top-4 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={handleSearch}
            className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                    {loading ? (

            <div className="col-span-3 text-center py-10">
              <h2 className="text-2xl font-semibold">
                Loading Notes...
              </h2>
            </div>

          ) : filteredNotes.length === 0 ? (

            <div className="col-span-3 text-center py-10">
              <h2 className="text-2xl font-semibold text-gray-500">
                No Notes Found
              </h2>
            </div>

          ) : (

            filteredNotes.map((note) => (

              <div
                key={note._id}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >

                <h2 className="text-xl font-bold text-slate-800">
                  {note.title}
                </h2>

                <p className="text-gray-500 mt-2">
                  {note.subject}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {note.branch}
                  </span>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {note.semester}
                  </span>

                </div>

                <p className="mt-4 text-sm text-gray-500">
                  Uploaded By :
                  <span className="font-medium text-slate-700">
                    {" "}
                    {note.uploadedBy?.name}
                  </span>
                </p>

                {note.description && (
                  <p className="mt-3 text-gray-600 line-clamp-3">
                    {note.description}
                  </p>
                )}

                <a
                  href={note.fileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 w-full flex justify-center items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
                >
                  <Download size={18} />
                  Download PDF
                </a>

              </div>

            ))

          )}
                  </div>

      </div>

    </div>
  );
}
    