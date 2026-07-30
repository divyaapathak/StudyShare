import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Upload, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              📚 Student Notes Sharing Platform
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Share Your
              <span className="text-blue-600"> Notes </span>
              & Learn Together
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Upload, browse and download study notes easily.
              Help your classmates and access quality study material
              anytime from anywhere.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/browse"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
              >
                Browse Notes
              </Link>

              <Link
                to="/upload"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl font-medium transition"
              >
                Upload Notes
              </Link>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <BookOpen size={30} className="text-blue-600" />
                  <div>
                    <h3 className="font-bold">DBMS Notes</h3>
                    <p className="text-gray-500 text-sm">Semester 4</p>
                  </div>
                </div>

                <button className="text-blue-600 font-semibold">
                  View
                </button>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Upload size={30} className="text-green-600" />
                  <div>
                    <h3 className="font-bold">Upload PDF</h3>
                    <p className="text-gray-500 text-sm">
                      Share your notes
                    </p>
                  </div>
                </div>

                <button className="text-green-600 font-semibold">
                  Upload
                </button>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="bg-white rounded-2xl shadow-xl p-6"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Download size={30} className="text-purple-600" />
                  <div>
                    <h3 className="font-bold">Download Notes</h3>
                    <p className="text-gray-500 text-sm">
                      Fast & Secure
                    </p>
                  </div>
                </div>

                <button className="text-purple-600 font-semibold">
                  Download
                </button>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}