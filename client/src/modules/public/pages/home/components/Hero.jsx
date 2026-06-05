import heroBg from "../../../../../assets/hero-banner.jpeg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="hero"
          className="w-full h-full object-cover object-top sm:object-center"
        />

        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      <div className="relative z-10 w-full mx-auto px-5 sm:px-10 lg:px-20 pt-28 sm:pt-32 pb-12 sm:pb-16 text-white">
        <div className="">
          {/*  SUB HEADING */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white  tracking-[2px] sm:tracking-[3px] text-[11px] sm:text-sm md:text-base font-semibold mb-4 sm:mb-6"
          >
            Governance-First International Holding Structure
          </motion.h2>

          {/* 🔥 HEADING ANIMATION */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] sm:leading-tight mb-6 sm:mb-8 max-w-4xl"
          >
            Structured Holdings. <br />
            Aligned Growth.
          </motion.h1>

          {/* 🔥 PARAGRAPH ANIMATION */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 mb-12 text-base sm:text-lg leading-relaxed max-w-3xl"
          >
            NiostGroup International is a governance-first holding structure,
            developing investment ready platforms across logistics,
            infrastructure, and strategic international sectors.
          </motion.p>

          {/* 🔥 BUTTON ANIMATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 sm:mb-10 w-full sm:w-auto"
          >
            <Link to="/sectors">
              <button className="border border-white/40 px-5 py-2.5 rounded-md text-sm sm:text-base font-semibold hover:bg-[#B96937] hover:border-[#B96937] hover:scale-105 active:scale-95 transition">
                Learn More
              </button>
            </Link>
            <Link to="/contact">
              <button className="bg-gradient-to-r from-[#A04F23] via-[#B96937] to-[#D3854D] px-5 py-2.5 rounded-md text-sm sm:text-base font-semibold text-white hover:scale-105 active:scale-95 transition">
                Contact Us
              </button>
            </Link>
          </motion.div>

          {/* 🔥 STATS ANIMATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-5 sm:gap-10 border-t border-white/20 pt-6"
          >
            <div className="flex items-center gap-3">
              <span className="text-[#B96937] text-lg">↗</span>
              <div>
                <h3 className="font-bold">Governance first </h3>
                <p className="text-sm text-gray-300">Operating Philosophy</p>
              </div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-white/20"></div>

            <div className="flex items-center gap-3">
              <span className="text-orange-500 text-lg">⬛</span>
              <div>
                <h3 className="font-bold"> multi sector</h3>
                <p className="text-sm text-gray-300">strategic sector </p>
              </div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-white/20"></div>

            <div className="flex items-center gap-3">
              <span className="text-[#B96937] text-lg">↗</span>
              <div>
                <h3 className="font-bold"> international</h3>
                <p className="text-sm text-gray-300">expansion Oriented</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
