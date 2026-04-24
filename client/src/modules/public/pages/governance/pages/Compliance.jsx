import { motion } from "framer-motion";
import HeroSection from "../../../components/HeroSection";
import governanceImg from "../../../../../assets/governance image.png";
import {
  ShieldCheck,
  Globe,
  AlertTriangle,
  Activity,
} from "lucide-react";

const Compliance = () => {
  const complianceData = [
    {
      title: "Regulatory Compliance",
      icon: ShieldCheck,
      description:
        "We adhere to all applicable laws, regulations, and statutory requirements across jurisdictions.",
      points: [
        "Legal & regulatory adherence",
        "Periodic audits & reviews",
        "Compliance reporting",
      ],
    },
    {
      title: "Global Standards",
      icon: Globe,
      description:
        "Our processes align with globally recognized standards to ensure consistency and quality.",
      points: [
        "ISO & industry standards",
        "Best practice frameworks",
        "Continuous benchmarking",
      ],
    },
    {
      title: "Risk Management",
      icon: AlertTriangle,
      description:
        "We proactively identify, assess, and mitigate risks to safeguard operations and stakeholders.",
      points: [
        "Risk identification systems",
        "Mitigation strategies",
        "Regular monitoring",
      ],
    },
    {
      title: "Continuous Monitoring",
      icon: Activity,
      description:
        "We continuously track compliance performance to ensure accountability and improvement.",
      points: [
        "Real-time monitoring",
        "Internal controls",
        "Performance evaluation",
      ],
    },
  ];

  return (
    <div className="bg-[#f5f7fa]">

      {/* 🔷 HERO */}
      <HeroSection
        title="Compliance"
        description="We ensure strict compliance with all regulatory and legal standards, fostering trust, transparency, and accountability across our operations."
        image={governanceImg}
      />

      {/* 🔥 OVERVIEW */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">
            Our Approach to Compliance
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg">
            We are committed to maintaining the highest standards of compliance
            across all our operations. Our governance framework ensures that we
            operate with integrity, transparency, and accountability while
            meeting all legal and regulatory obligations.
          </p>
        </motion.div>

      </section>

      {/* 🔥 CARDS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pb-24">

        <div className="grid sm:grid-cols-2 gap-10">

          {complianceData.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >

                {/* 🔹 ICON + TITLE */}
                <div className="flex items-start gap-4 mb-4">

                  <div className="bg-orange-50 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>

                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* POINTS */}
                <ul className="space-y-2 text-gray-600 text-sm">
                  {item.points.map((point, i) => (
                    <li key={i}>✔ {point}</li>
                  ))}
                </ul>

              </motion.div>
            );
          })}

        </div>

      </section>

      {/* 🔥 TRUST BLOCK */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl font-semibold text-gray-800 mb-6"
          >
            Building Trust Through Compliance
          </motion.h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Our compliance culture is built on trust, accountability, and
            continuous improvement. We ensure that all stakeholders can rely on
            our processes, systems, and governance standards.
          </p>

        </div>
      </section>

    </div>
  );
};

export default Compliance;