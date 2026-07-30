import { motion } from "framer-motion";
import {
  Brain,
  Database,
  Code2,
  Cpu,
  Globe,
  Server,
  Laptop,
  BookOpen,
} from "lucide-react";

const subjects = [
  {
    title: "Data Structures",
    icon: <Code2 size={30} />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Java",
    icon: <Laptop size={30} />,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Python",
    icon: <Brain size={30} />,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "DBMS",
    icon: <Database size={30} />,
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "Artificial Intelligence",
    icon: <Cpu size={30} />,
    color: "bg-pink-100 text-pink-700",
  },
  {
    title: "Operating System",
    icon: <Server size={30} />,
    color: "bg-cyan-100 text-cyan-700",
  },
  {
    title: "Computer Networks",
    icon: <Globe size={30} />,
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Web Development",
    icon: <BookOpen size={30} />,
    color: "bg-red-100 text-red-600",
  },
];

const Subjects = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-slate-900">
          Trending Subjects
        </h2>

        <p className="mt-4 text-center text-slate-600">
          Explore notes from the most popular engineering subjects.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer rounded-3xl bg-white p-8 shadow-lg transition-all"
            >
              <div
                className={`inline-flex rounded-2xl p-4 ${subject.color}`}
              >
                {subject.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {subject.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                View high-quality notes and study material.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subjects;