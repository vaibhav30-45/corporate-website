import aboutImg from "../../../../../assets/image 04.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="w-full  mx-auto px-8 sm:px-12 lg:px-20 grid md:grid-cols-2 gap-10 items-center">
        {/* 🔥 IMAGE ANIMATION (LEFT) */}
        <motion.img
          src={aboutImg}
          alt="About"
          className="rounded-lg shadow-md object-cover w-full"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />

        {/* 🔥 TEXT ANIMATION (RIGHT) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h4 className="text-primary font-semibold mb-2">About NiostGroup</h4>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            A Structured Platform for Long-Term Growth{" "}
          </h2>

          <p className="text-gray-600 mb-6">
            NiostGroup International is being developed as a long-term,
            governance-first holding platform focused on operational discipline,
            strategic alignment, and sustainable international expansion. The
            organization is structured to create, oversee, and strengthen
            investment-ready operating platforms across logistics,
            infrastructure, digital ecosystems, and other high-impact sectors.
          </p>
          <p className="text-gray-600 mb-6">
            Through disciplined governance frameworks, scalable business
            structures, and long-term enterprise planning, NiostGroup
            International aims to position its ventures for responsible growth,
            cross-border collaboration, and enduring market relevance across
            selected international regions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
