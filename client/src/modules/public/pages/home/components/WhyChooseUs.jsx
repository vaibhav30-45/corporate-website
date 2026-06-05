import whyImg from "../../../../../assets/handshake.webp";
import { FaMedal, FaCheckCircle, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="w-full overflow-hidden bg-[#0c2438]">
      <div className="flex flex-col lg:flex-row min-h-[520px]">
        {/* LEFT SECTION */}
        <div className="relative w-full lg:w-[50%] bg-[#0A1534] text-white flex items-center">
          {/* DESKTOP DIAGONAL */}
          <div className="hidden lg:block absolute top-0 -right-24 w-48 h-[110%] bg-[#0A1534] skew-x-[-12deg] origin-top z-20"></div>

          <div className="relative z-30 w-full px-6 sm:px-10 lg:px-16 py-14">
            {/* HEADING */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Why NiostGroup
              </h2>

              <p>
                NiostGroup International is not being built as a conventional
                holding company. Its structure is intended to support stronger
                oversight, clearer capital discipline, and better alignment
                between governance, market strategy, and long-term value
                creation.
              </p>
            </motion.div>
            {/* STATS */}
            {/* FEATURES */}
            {/* FEATURES */}
            <div className="flex flex-col gap-5 max-w-[520px] mt-8">
              {/* CARD 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#B96937]/50 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-[#B96937]"></span>

                  <h3 className="text-lg font-semibold text-white">
                    Governance-First by Design
                  </h3>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  The group is being built on the principle that governance is
                  foundational to growth, not secondary to it.
                </p>
              </motion.div>

              {/* CARD 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#B96937]/50 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-[#B96937]"></span>

                  <h3 className="text-lg font-semibold text-white">
                    Structured Expansion
                  </h3>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  Cross-border development is intended to follow a disciplined
                  model grounded in strategic clarity, operating alignment, and
                  control.
                </p>
              </motion.div>

              {/* CARD 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#B96937]/50 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-[#B96937]"></span>

                  <h3 className="text-lg font-semibold text-white">
                    Strategic Sector Focus
                  </h3>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  The holding is being positioned around capital-intensive and
                  structurally important sectors where long-term value can be
                  built through disciplined execution.
                </p>
              </motion.div>

              {/* CARD 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#B96937]/50 transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-3 h-3 rounded-full bg-[#B96937]"></span>

                  <h3 className="text-lg font-semibold text-white">
                    Institutional Credibility
                  </h3>
                </div>

                <p className="text-sm text-gray-300 leading-relaxed">
                  The group’s architecture is being designed to support stronger
                  bankability, clearer oversight, and long-term stakeholder
                  confidence.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            w-full
            lg:w-[50%]
            min-h-[300px]
            sm:min-h-[400px]
            lg:min-h-full
            bg-cover
            bg-center
            bg-no-repeat
          "
          style={{
            backgroundImage: `url(${whyImg})`,
          }}
        ></div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
