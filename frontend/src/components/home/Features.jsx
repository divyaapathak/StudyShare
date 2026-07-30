import {
  Upload,
  Download,
  Search,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: <Upload size={35} />,
    title: "Upload Notes",
    desc: "Upload PDF notes easily.",
  },
  {
    icon: <Download size={35} />,
    title: "Download Notes",
    desc: "Access notes anytime.",
  },
  {
    icon: <Search size={35} />,
    title: "Search Notes",
    desc: "Find notes quickly.",
  },
  {
    icon: <Smartphone size={35} />,
    title: "Responsive",
    desc: "Works on mobile and desktop.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Why Choose StudyShare?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-lg transition"
            >

              <div className="text-blue-600 flex justify-center">
                {feature.icon}
              </div>

              <h3 className="font-semibold text-xl mt-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 mt-2">
                {feature.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}