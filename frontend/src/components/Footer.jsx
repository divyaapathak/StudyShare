import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-8">

          <div>
            <h2 className="text-2xl font-bold text-blue-400">
              StudyShare
            </h2>

            <p className="text-gray-400 mt-3">
              A platform where students can upload,
              browse and download study notes easily.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li><Link to="/">Home</Link></li>

              <li><Link to="/browse">Browse Notes</Link></li>

              <li><Link to="/login">Login</Link></li>

              <li><Link to="/register">Register</Link></li>

            </ul>

          </div>

          <div>

            <h3 className="font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              support@studyshare.com
            </p>

            <p className="text-gray-400 mt-2">
              +91 XXXXX XXXXX
            </p>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-500">
          © 2026 StudyShare. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}