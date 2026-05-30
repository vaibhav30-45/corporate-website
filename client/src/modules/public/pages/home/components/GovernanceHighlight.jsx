import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GovernanceHighlight = () => {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="w-full mx-auto px-8 sm:px-12 lg:px-20">

        {/* CONTENT */}
       <motion.div
  className="max-w-4xl"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>

  {/* TOP LABEL */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: true }}
    className="text-orange-500 font-semibold uppercase tracking-[2px] mb-4"
  >
    Governance Highlight
  </motion.p>

  {/* HEADING */}
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true }}
    className="text-3xl sm:text-4xl font-bold text-[#0c2438] mb-6 leading-tight"
  >
    Governance at the Core
  </motion.h2>

  {/* DESCRIPTION */}
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    viewport={{ once: true }}
    className="text-gray-600 text-base sm:text-lg leading-relaxed mb-5"
  >
    Governance sits at the center of the NIOSTGROUP
    International model. The group is being developed on
    the principle that structure, accountability, oversight,
    and disciplined execution are not secondary controls,
    but foundational operating requirements for sustainable
    long-term growth.
  </motion.p>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    viewport={{ once: true }}
    className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10"
  >
    Through governance-led platform development, strategic
    alignment, and institutional discipline, NIOSTGROUP
    International aims to create operating structures that
    support responsible expansion, stronger credibility,
    and long-term stakeholder confidence across international
    markets.
  </motion.p>

  {/* BUTTON */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <Link to="/governance">
      <button className="bg-orange-500 text-white px-7 py-3 rounded-lg font-medium hover:bg-orange-600 transition duration-300 shadow-lg hover:shadow-orange-500/30">
        View Governance
      </button>
    </Link>
  </motion.div>

</motion.div>
      </div>
    </section>
  );
};

export default GovernanceHighlight;