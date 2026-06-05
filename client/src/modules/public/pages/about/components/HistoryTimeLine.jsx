import { motion } from "framer-motion";
import journeyImg from "../../../../../assets/journey.png"; //

const timeline = [
  { year: "2015", text: "Foundation concept initiated with focus on inclusive systems." },
  { year: "2018", text: "Expanded initiatives across logistics and economic infrastructure." },
  { year: "2022", text: "Strengthened global partnerships and scalable programs." },
];

const HistoryTimeline = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="w-full mx-auto px-8 sm:px-12 lg:px-20">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-primary mb-12 text-center"
        >
          Our Journey
        </motion.h2>

        {/* GRID LAYOUT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-md">
              <img
                src={journeyImg}
                alt="Our Journey"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE TIMELINE */}
         <div className="border-l-2 border-[#B96937] pl-6 space-y-10">
  {timeline.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: i * 0.2 }}
    >
      <h3 className="font-bold text-lg text-gray-800">
        {item.year}
      </h3>
      <p className="text-gray-600">
        {item.text}
      </p>
    </motion.div>
  ))}
</div>

        </div>

      </div>
    </div>
  );
};

export default HistoryTimeline;
