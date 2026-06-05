import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="w-full mx-auto px-8 sm:px-12 lg:px-20 grid md:grid-cols-2 gap-10">

        {[
          {
            title: "Our Mission",
            text: "To build governance-led, asset-backed platforms that support disciplined growth, operating resilience, and long-term stakeholder value.",
          },
          {
            title: "Our Vision",
            text: "To become a trusted international holding group known for structured growth, responsible governance, and investment-ready platform development.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-8 bg-white rounded-xl shadow-lg border"
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default MissionVision;
