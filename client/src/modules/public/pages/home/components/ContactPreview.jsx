import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ContactPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="w-full mx-auto px-8 sm:px-12 lg:px-20">

       <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
       <p className="text-orange-500 font-semibold uppercase tracking-[2px] mb-3">
              Contact Preview
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0c2438] mb-6 leading-tight">
              Corporate Enquiries
            </h2>

            <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-8 max-w-2xl">
              For strategic enquiries, partnership discussions, or
              corporate communication, please contact NIOSTGROUP
              International through the channels provided on the
              Contact page.
            </p>

            {/* BUTTONS */}
            <motion.div
  className="flex flex-wrap gap-4"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.4 }}
  viewport={{ once: true }}
>  <Link to="/contact">
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition">
                  Contact Us
                </button>
              </Link>

              <Link to="/contact">
                <button className="border border-[#0c2438]/20 text-[#0c2438] px-6 py-3 rounded-lg font-medium hover:bg-[#0c2438] hover:text-white transition">
                  View Contact Details
                </button>
              </Link>
</motion.div>
           
</motion.div>
          

          {/* RIGHT MAP */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg border border-gray-200 h-[350px]">

            <iframe
              title="map"
              src="https://www.google.com/maps?q=Australia&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPreview;