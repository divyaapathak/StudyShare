import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="text-center"
        >
          <h2 className="text-4xl font-bold">
            Contact Us
          </h2>

          <p className="mt-3 text-gray-600">
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition text-center">
            <Mail className="mx-auto text-blue-600" size={38}/>
            <h3 className="font-semibold mt-4 text-lg">Email</h3>
            <p className="text-gray-600 mt-2">
              support@studyshare.com
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition text-center">
            <Phone className="mx-auto text-blue-600" size={38}/>
            <h3 className="font-semibold mt-4 text-lg">Phone</h3>
            <p className="text-gray-600 mt-2">
              +91 XXXXX XXXXX
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition text-center">
            <MapPin className="mx-auto text-blue-600" size={38}/>
            <h3 className="font-semibold mt-4 text-lg">Location</h3>
            <p className="text-gray-600 mt-2">
              India
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}