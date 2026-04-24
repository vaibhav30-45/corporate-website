import { motion } from "framer-motion";

const HeroSection = ({ title, description, image }) => {
  return (
    <div className="relative min-h-[60vh] flex items-center mt-[80px] overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <motion.img
          src={image}
          alt="hero"
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0c2438]/70"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-20 text-white">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          className="max-w-2xl"
        >

          {/* TITLE */}
          <motion.h1
            variants={{
              hidden: { x: -80, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            {title}
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={{
              hidden: { x: -80, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            {description}
          </motion.p>

        </motion.div>

      </div>

    </div>
  );
};

export default HeroSection;