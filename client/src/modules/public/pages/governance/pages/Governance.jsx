import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BoardCard from "../components/BoardCard";
import ESGCard from "../components/ESGCard";
import PolicyItem from "../components/PolicyItem";
import ComplianceCard from "../components/ComplianceCard";
import HeroSection from "../../../components/HeroSection";
import governanceImg from "../../../../../assets/governance image.png";
import { motion } from "framer-motion";
import { FiShield, FiCheckCircle } from "react-icons/fi";
import { ShieldCheck, Lock, FileCheck } from "lucide-react";
import { getLeadershipMembers } from "../../../../../services/leadershipService";
import { useState, useEffect } from "react";

const Governance = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);

  const { esgData = [], policies = [] } = useSelector(
    (state) => state.governance || {},
  );

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await getLeadershipMembers();

        console.log("Leadership API Response:", response);

        setMembers(response.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div>
      {/* 🔷 HERO */}
      <HeroSection
        title="Governance"
        description="Strong governance, ethical practices, sustainable growth. We are committed to the highest standards of accountability in everything we do."
        image={governanceImg}
      />

      {/* 🔷 BOARD */}
      <section className="bg-[#f5f7fa]  mx-auto px-8 sm:px-12 lg:px-20 py-20">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-semibold text-primary">
              Board of Directors
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Our Board of Directors brings together diverse expertise.
            </p>
          </div>

          {/* <button
            onClick={() => {
              navigate("/governance/board");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-blue-600 text-sm hover:underline"
          >
            View Board Details →
          </button> */}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {members.map((m) => (
            <BoardCard
              key={m._id}
              name={m.name}
              position={m.position}
              image={m.image}
            />
          ))}
        </div>
      </section>
      {/* GOVERNANCE SECTION */}
      <section className="py-14 sm:py-20 bg-[#f8fafc] overflow-hidden">
        <div className="mx-auto px-5 sm:px-10 lg:px-20">
          {/* TOP CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mb-14"
          >
            <p className="text-primary font-semibold uppercase tracking-[0.3em] mb-3">
              Governance
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-corporate-navy mb-6 leading-tight">
              Governance
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
              Governance sits at the center of the NiostGroup International
              model. The group is being built on the principle that structure,
              accountability, and oversight are not secondary controls, but
              foundational operating requirements.
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-200 rounded-[30px] p-5 sm:p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-100 text-primary flex items-center justify-center text-2xl">
                  <FiShield />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-corporate-navy leading-snug">
                  Governance Overview
                </h3>
              </div>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                NiostGroup International is being developed as a
                governance-first holding structure. Its intended role is to
                establish clear ownership logic, strategic oversight, policy
                alignment, capital discipline, and cross-entity accountability
                across the group.
              </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white border border-slate-200 rounded-[30px] p-5 sm:p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-100 text-blue-500 flex items-center justify-center text-2xl">
                  <FiCheckCircle />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-corporate-navy leading-snug">
                  Core Governance Areas
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  "Holding structure and oversight philosophy",
                  "Leadership and decision-making alignment",
                  "Capital discipline",
                  "Policy framework",
                  "Cross-entity accountability",
                  "Long-term institutional credibility",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary mt-2 shrink-0"></span>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🔷 ESG */}
      <section className="bg-white  mx-auto px-8 sm:px-12 lg:px-20 py-20">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-semibold text-primary">
              ESG Framework
            </h2>

            <p className="text-gray-500 mt-2">
              Our ESG framework guides our approach to creating long-term value.
            </p>
          </div>

          {/* <button
            onClick={() => {
              navigate("/governance/esg");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-blue-600 text-sm hover:underline"
          >
            View More →
          </button> */}
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {esgData.map((item) => (
            <ESGCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      {/* 🔷 POLICIES */}
      <section className="bg-[#f5f7fa]  mx-auto px-8 sm:px-12 lg:px-20 py-20">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-semibold text-primary">Policies</h2>

            <h3 className="text-3xl font-semibold mt-4">
              Our Commitment to Responsible Practices
            </h3>

            <p className="text-gray-500 mt-3">
              Dedicated policy pages should be maintained and updated as the
              corporate structure evolves.
            </p>
            <div className="mt-10 flex gap-6">
              {/* Shield */}
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  rotate: [0, 4, -4, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center shadow-sm"
              >
                <ShieldCheck className="w-7 h-7 text-primary" />
              </motion.div>

              {/* Lock */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, -8, 8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center shadow-sm"
              >
                <Lock className="w-7 h-7 text-primary" />
              </motion.div>

              {/* File */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center shadow-sm"
              >
                <FileCheck className="w-7 h-7 text-primary" />
              </motion.div>
            </div>
            {/* <button
              onClick={() => {
                navigate("/governance/policies");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md 
              hover:bg-orange-600 hover:scale-105 transition"
            >
              View All Policies
            </button> */}
          </div>

          {/* RIGHT */}
          <div className="bg-white rounded-xl border shadow-sm overflow-hidden w-full">
            {policies.map((p, index) => (
              <PolicyItem key={p.id} {...p} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 COMPLIANCE */}
      <section className="bg-white  mx-auto px-8 sm:px-12 lg:px-20 py-24">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-primary">Compliance</h2>

            <p className="text-gray-500 mt-3 ">
              Compliance-related registrations, certifications, and regulatory
              references will be updated as the relevant entities and operating
              activities are formally established.
            </p>
          </div>

          {/* <button
            onClick={() => {
              navigate("/governance/compliance");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-blue-600 text-sm hover:underline"
          >
            View More →
          </button> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-10">
          <ComplianceCard title="Regulatory Compliance" index={0} />
          <ComplianceCard title="Global Standards" index={1} />
          <ComplianceCard title="Risk Management" index={2} />
          <ComplianceCard title="Continuous Monitoring" index={3} />
        </div>
      </section>
    </div>
  );
};

export default Governance;
