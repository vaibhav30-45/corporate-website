import { useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "../../../components/HeroSection";
import governanceImg from "../../../../../assets/governance image.png";
import {
  ShieldCheck,
  Lock,
  AlertTriangle,
  Megaphone,
} from "lucide-react";

const Policies = () => {
  const [activeId, setActiveId] = useState(null);

  const policies = [
    {
      id: 1,
      title: "Code of Conduct",
      short: "Guiding principles for ethical business behavior.",
      details:
        "This policy outlines the standards of integrity, professionalism, and ethical conduct expected from all employees and stakeholders. It ensures accountability and responsible decision-making.",
      icon: ShieldCheck,
    },
    {
      id: 2,
      title: "Data Privacy Policy",
      short: "Protection of sensitive and personal data.",
      details:
        "We ensure strict data protection measures to safeguard personal and organizational data. This includes compliance with privacy laws and secure data handling practices.",
      icon: Lock,
    },
    {
      id: 3,
      title: "Anti-Bribery Policy",
      short: "Zero tolerance for corruption and bribery.",
      details:
        "Our organization strictly prohibits bribery and corruption in any form. This policy ensures transparency and ethical dealings across all operations.",
      icon: AlertTriangle,
    },
    {
      id: 4,
      title: "Whistleblower Policy",
      short: "Encouraging transparency and reporting issues.",
      details:
        "We provide a secure mechanism for employees to report unethical practices without fear of retaliation, ensuring a transparent and fair work environment.",
      icon: Megaphone,
    },
  ];

  const toggleCard = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="bg-[#f5f7fa]">

      {/* 🔷 HERO */}
     <HeroSection
  title="Policies"
  description="Our policies ensure ethical practices, regulatory compliance, and responsible governance across all operations."
  image={governanceImg}
/>

      {/* 🔥 POLICY CARDS */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-20 space-y-5">

        {policies.map((policy, index) => {
          const isActive = activeId === policy.id;
          const Icon = policy.icon;

          return (
            <motion.div
              key={policy.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition"
              onClick={() => toggleCard(policy.id)}
            >

              {/* 🔹 TOP */}
              <div className="flex items-start gap-4 p-6">

                {/* SVG ICON */}
                <div className="bg-orange-50 p-2 rounded-lg">
                  <Icon className="w-5 h-5 text-orange-500" />
                </div>

                {/* TEXT */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {policy.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    {policy.short}
                  </p>
                </div>

                {/* + / - */}
                <motion.div
                  animate={{ rotate: isActive ? 45 : 0 }}
                  className="text-gray-400 text-xl font-light"
                >
                  +
                </motion.div>

              </div>

              {/* 🔹 EXPAND */}
              <motion.div
                initial={false}
                animate={{
                  height: isActive ? "auto" : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-2 border-t text-gray-600 text-sm leading-relaxed">
                  {policy.details}
                </div>
              </motion.div>

            </motion.div>
          );
        })}

      </section>

    </div>
  );
};

export default Policies;