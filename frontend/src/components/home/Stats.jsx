import { FileText, Users, BookOpen } from "lucide-react";

const stats = [
  {
    icon: <FileText size={32} className="text-blue-600" />,
    number: "120+",
    title: "Notes",
  },
  {
    icon: <Users size={32} className="text-blue-600" />,
    number: "50+",
    title: "Students",
  },
  {
    icon: <BookOpen size={32} className="text-blue-600" />,
    number: "12",
    title: "Subjects",
  },
];

export default function Stats() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-6">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-slate-50 rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
            >

              <div className="flex justify-center">
                {item.icon}
              </div>

              <h2 className="text-3xl font-bold mt-4">
                {item.number}
              </h2>

              <p className="text-gray-600 mt-2">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}