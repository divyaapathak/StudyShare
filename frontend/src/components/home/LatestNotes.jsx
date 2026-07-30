import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Star,
  Eye,
  Heart,
} from "lucide-react";

const notes = [
  {
    title: "Operating System Complete Notes",
    subject: "Operating System",
    semester: "Semester 4",
  },
  {
    title: "Java Programming Handbook",
    subject: "Java",
    semester: "Semester 3",
  },
  {
    title: "Python for Beginners",
    subject: "Python",
    semester: "Semester 2",

  },
];

const LatestNotes = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              Latest Notes
            </h2>

            <p className="mt-3 text-slate-600">
              Recently uploaded study material from our community.
            </p>
          </div>

          <button className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
            View All
          </button>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {notes.map((note, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg"
            >
              {/* PDF Preview */}
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500">
                <FileText size={70} className="text-white" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                  {note.subject}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {note.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {note.semester}
                </p>


                <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
                  <div className="flex items-center gap-1">
                    <Download size={16} />
                    {note.downloads}
                  </div>

                  
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
                    <Eye size={18} />
                    View
                  </button>

                  <button className="rounded-xl border border-slate-300 p-3 hover:bg-slate-100">
                    <Heart size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNotes;