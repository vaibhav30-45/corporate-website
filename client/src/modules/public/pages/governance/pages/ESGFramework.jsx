import { motion } from "framer-motion";
import HeroSection from "../../../components/HeroSection";
import governanceImg from "../../../../../assets/governance image.png";

const ESGFramework = () => {
  const esgPillars = [
    {
      title: "Environmental",
      color: "from-green-400 to-green-600",
      icon: "🌱",
      description:
        "We are committed to minimizing our environmental impact through sustainable practices.",
      points: [
        "Carbon footprint reduction",
        "Energy efficiency initiatives",
        "Waste management & recycling",
      ],
      metric: "↓ 35% Emissions",
    },
    {
      title: "Social",
      color: "from-blue-400 to-blue-600",
      icon: "🤝",
      description:
        "We prioritize people, communities, and inclusive growth through responsible practices.",
      points: [
        "Employee well-being programs",
        "Diversity & inclusion",
        "Community engagement",
      ],
      metric: "10K+ Lives Impacted",
    },
    {
      title: "Governance",
      color: "from-purple-400 to-purple-600",
      icon: "🏛️",
      description:
        "Strong governance ensures transparency, accountability, and ethical business conduct.",
      points: [
        "Board independence",
        "Ethical compliance",
        "Risk management systems",
      ],
      metric: "100% Compliance",
    },
  ];

  return (
    <div className="bg-[#f5f7fa]">

      {/* 🔷 HERO SECTION */}
     <HeroSection
  title="ESG Framework"
  description="Our Environmental, Social, and Governance principles guide sustainable growth and responsible business practices."
  image={governanceImg}
/>
      {/* 🔥 ESG PILLARS */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">

        <div className="grid md:grid-cols-3 gap-12">

          {esgPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >

              {/* 🌈 GLOW */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${pillar.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition`}
              ></div>

              {/* 💎 CARD */}
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 h-full hover:-translate-y-3 transition duration-300">

                {/* ICON */}
                <div className="text-4xl mb-4">{pillar.icon}</div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {pillar.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 mb-5">
                  {pillar.description}
                </p>

                {/* POINTS */}
                <ul className="space-y-2 text-gray-600 mb-6">
                  {pillar.points.map((point, i) => (
                    <li key={i}>✔ {point}</li>
                  ))}
                </ul>

                {/* METRIC */}
                <div>
                  <span
                    className={`text-sm font-semibold text-white px-4 py-2 rounded-full bg-gradient-to-r ${pillar.color}`}
                  >
                    {pillar.metric}
                  </span>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      {/* 🔥 PREMIUM COMMITMENT SECTION */}
      <section className="bg-gradient-to-b from-white to-[#f5f7fa] py-24">

        <div className="max-w-5xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-10 text-center"
          >

            {/* ✨ TOP LINE */}
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6 rounded-full"></div>

            {/* TITLE */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Commitment to Sustainability
            </h2>

            {/* TEXT */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              We are dedicated to embedding ESG principles into every aspect of our
              operations. By aligning sustainability with innovation, we aim to create
              long-term value while contributing positively to society and the
              environment.
            </p>

            {/* ✨ HIGHLIGHTS */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>🌍 Sustainable Growth</span>
              <span>🤝 Social Impact</span>
              <span>⚖️ Ethical Governance</span>
            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default ESGFramework;