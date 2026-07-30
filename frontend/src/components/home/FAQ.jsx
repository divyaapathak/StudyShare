import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is StudyShare?",
    answer:
      "StudyShare is a platform where students can upload and download study notes.",
  },
  {
    question: "Can I upload my own notes?",
    answer:
      "Yes. Registered users can upload PDF notes for other students.",
  },
  {
    question: "Is StudyShare free?",
    answer:
      "Yes, StudyShare is free for students.",
  },
  {
    question: "Which file format is supported?",
    answer:
      "Currently PDF files are supported.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
        >
          <h2 className="text-4xl font-bold text-center text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="text-center text-gray-600 mt-3">
            Everything you need to know about StudyShare.
          </p>
        </motion.div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{opacity:0,y:20}}
              whileInView={{opacity:1,y:0}}
              transition={{delay:index*0.1}}
              viewport={{once:true}}
              className="border rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold"
              >
                {faq.question}

                <ChevronDown
                  className={`transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-5 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}