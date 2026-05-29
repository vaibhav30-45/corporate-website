import { motion } from "framer-motion";

const CompanyOverview = () => {
  return (
    <div className="w-full mx-auto px-8 sm:px-12 lg:px-20 py-20">
      
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-orange-500 mb-6"
      >
        Company Overview
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-600 leading-relaxed mb-6"
      >
        The group is being built to provide strategic direction, governance oversight, structural
        coordination, and long-term alignment across its operating platforms. Rather than functioning
       as a passive parent entity, NIOSTGROUP International is intended to serve as the central
       strategic and governance layer of the wider group.
      </motion.p>
{/* 
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-600 leading-relaxed"
      >
        Our approach combines traditional governance principles such as
        transparency, accountability, and responsibility with modern execution
        strategies including modular program design, pilot validation, and
        scalable partnerships.
      </motion.p> */}
    </div>
  );
};

export default CompanyOverview;
