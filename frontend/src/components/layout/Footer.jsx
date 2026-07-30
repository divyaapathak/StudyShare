import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold">
            StudyShare
          </h2>

          <p className="text-gray-300 mt-3">
            A simple platform for students to
            share and access study notes.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2">

            <li><Link to="/">Home</Link></li>

            <li><Link to="/browse">Browse Notes</Link></li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">
            Contact
          </h3>

          <p>Email: support@studyshare.com</p>

          <p className="mt-2">
            Phone: +91 XXXXX XXXXX
          </p>

        </div>

      </div>

      <div className="border-t border-slate-700 mt-8 pt-5 text-center text-gray-400">

        © 2026 StudyShare. All Rights Reserved.

      </div>

    </footer>
  );
}