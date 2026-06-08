
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiTruck,
  FiTrendingUp,
  FiGlobe,
  FiGrid,
  FiBriefcase,
  FiFileText
} from "react-icons/fi";

import HeroSection from "../../../public/components/HeroSection";
import heroImage from "../../../../assets/image 10 .webp";
import agro from "../../../../assets/agro.jpeg";
import port from "../../../../assets/port.jpeg";
import logisticsImg from "../../../../assets/Rectangle256.png";
import financeImg from "../../../../assets/financial.jpeg";
import { useEffect } from "react";
import {  useLocation } from "react-router-dom";

const sectorCards = [
  {
    title: "Logistics",
    link: "/sectors/logistics",
    icon: FiTruck,
    accent: "text-orange-500 bg-orange-100",
  },

  {
    
    title: "Maritime & Port",
    link: "/sectors/maritime",
    icon: FiGlobe,
    accent: "text-blue-500 bg-blue-100",
  },

  {
    title: "Agro-Industrial Manufacturing",
    link: "/sectors/agro-industrial",
    icon: FiGrid,
    accent: "text-emerald-500 bg-emerald-100",
  },

  {
    title: "Financial Infrastructure ",
    link: "/sectors/fintech",
    icon: FiTrendingUp,
    accent: "text-violet-500 bg-violet-100",
  },
];


const detailSections = [
  {
    title: "Logistics",
    subtitle:
      "NiostGroup is developing logistics-focused platforms designed to support asset-backed operations, corridor efficiency, and structured market execution in international trade environments.",

    image: logisticsImg,
    icon: <FiTruck />,
    accent: "orange",

    focus: [
      "Asset-backed operating platforms",
      "Corridor efficiency",
      "International logistics relevance",
      "Structured execution and deployment",
    ],
  },

  {
    title: "Maritime & Port",
    subtitle:
      "The group is being positioned to participate in maritime and port-linked opportunities through structured platform development, strategic infrastructure alignment, and governance-led sector participation.",

    image: port,
    icon: <FiGlobe />,
    accent: "blue",

    focus: [
      "Port-linked commercial environments",
      "Maritime infrastructure relevance",
      "Strategic platform positioning",
      "Governance-led expansion logic",
    ],
  },

  {
    title: "Agro-Industrial Manufacturing",
    subtitle:
      "NiostGroup recognizes agro-industrial manufacturing as a strategic sector where operational structure, asset discipline, and cross-border relevance can support long-term enterprise value.",

    image: agro,
    icon: <FiGrid />,
    accent: "emerald",

    focus: [
      "Productive industrial environments",
      "Asset discipline",
      "Cross-border value creation",
      "Long-term sector positioning",
    ],
  },

  {
    title: "Financial Infrastructure ",
    subtitle:
      "The group’s long-term vision includes participation in financial infrastructure and FinTech-related platforms where governance, regulatory discipline, and scalable structural design are essential.",

    image: financeImg,
    icon: <FiTrendingUp />,
    accent: "violet",

    focus: [
      "Regulated platform logic",
      "Governance and compliance orientation",
      "Scalable financial structures",
      "Long-term institutional opportunity",
    ],
  },
];
const SectorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const element = document.getElementById(
      location.hash.replace("#", "")
    );

    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }
}, [location]);

  return (
    <div className="bg-white">
      <HeroSection
        title="Strategic Sectors "
        description="We deliver expertise and innovative solutions across multiple sectors, driving growth, efficiency, and sustainable success."
        image={heroImage}
      />

      {/* Top Cards Section */}
      <section className="mx-auto px-5 sm:px-10 lg:px-20 py-12 sm:py-16 overflow-hidden">
       <div className="text-left mb-12">
  <p className="text-primary font-semibold uppercase tracking-[0.35em] mb-3">
    Our Key Sectors
  </p>

 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-corporate-navy mb-5 leading-tight">
    The industries where we build value.
  </h2>

  <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-4xl">
    NiostGroup International is being structured as a multi-industry
    holding group with a focus on sectors where governance, structure,
    and disciplined execution create long-term value. The group’s
    sector orientation reflects its intention to build credible,
    investment-ready platforms rather than fragmented standalone
    ventures.
  </p>
</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {sectorCards.map((sector) => {
            const Icon = sector.icon;

            return (
              <motion.button
                key={sector.title}
                onClick={() => navigate(sector.link)}
                whileHover={{ y: -6 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
               className="group rounded-[28px] border border-slate-200 bg-white p-5 sm:p-7 text-left shadow-sm transition hover:shadow-xl min-h-[140px]"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`${sector.accent} rounded-2xl p-4`}>
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-2xl font-semibold text-corporate-navy">
                    {sector.title}
                  </h3>
                </div>

                {/* <p className="text-gray-500 leading-relaxed mb-8">
                  {sector.description}
                </p>

                <span className="text-blue-600 font-medium group-hover:text-corporate-orange transition">
                  {sector.cta} →
                </span> */}
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Detail Sections */}
     <section className="bg-[#f7f9fb] py-12 sm:py-16 overflow-hidden">
        <div className="mx-auto px-5 sm:px-10 lg:px-20">
          <div className="grid gap-10">
            {detailSections.map((section, index) => (
              <motion.div
               id={
    section.title === "Logistics"
      ? "logistics"
      : section.title === "Maritime & Port"
      ? "maritime"
      : section.title === "Agro-Industrial Manufacturing"
      ? "agro-industrial"
      : "fintech"
  }                
                className="scroll-mt-28"
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className={`
                  grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-10
                  rounded-[32px]
              p-5 sm:p-6 lg:p-10
                  overflow-hidden
                  mb-12
                  ${section.accent === "orange"
                    ? "bg-orange-50/40"
                    : section.accent === "emerald"
                      ? "bg-emerald-50/40"
                      : "bg-violet-50/40"
                  }
                `}
              >
                {/* Left Image */}
                <div className="rounded-[24px] overflow-hidden">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-[240px] sm:h-[320px] lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Right Content */}
                <div className="flex flex-col justify-center">
                  <div className="mb-8">
                    {/* Section Icon & Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-sm ${section.accent === "orange"
                          ? "bg-primary text-white"
                          : section.accent === "emerald"
                            ? "bg-emerald-500 text-white"
                            : "bg-violet-500 text-white"
                          }`}
                      >
                        {section.icon}
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
                        {section.title}
                      </h2>
                    </div>

                    <p className="text-gray-600 text-base leading-relaxed ">
                      {section.subtitle}
                    </p>
                  </div>

                  {/* Strategic Focus */}
<div className="mt-6">
  <h3 className="text-xl font-bold text-gray-900 mb-4">
    Strategic Focus
  </h3>

  <div className="flex flex-col gap-3">
    {section.focus.map((point, idx) => (
      <div
        key={idx}
        className="flex items-center gap-3"
      >
        <span
          className={`w-2.5 h-2.5 rounded-full ${
            section.accent === "orange"
              ? "bg-primary"
              : section.accent === "emerald"
              ? "bg-emerald-500"
              : section.accent === "blue"
              ? "bg-blue-500"
              : "bg-violet-500"
          }`}
        ></span>

        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {point}
        </p>
      </div>
    ))}
  </div>
</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* WHAT WE BUILD SECTION */}
<section className="py-14 sm:py-20 bg-white overflow-hidden">
  <div className="mx-auto px-5 sm:px-10 lg:px-20">

    {/* HEADING */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-4xl mb-14"
    >
      <p className="text-primary font-semibold uppercase tracking-[0.3em] mb-3">
        Services Overview
      </p>

      <h2 className="text-4xl md:text-5xl font-bold text-corporate-navy mb-6">
        What We Build
      </h2>

      <p className="text-gray-600 leading-relaxed text-base md:text-lg">
        NiostGroup International is being built to provide at holding
        level and how its first operating platform is being positioned
        within that wider structure.
      </p>
    </motion.div>

    {/* CARDS */}
    <div className="flex flex-col gap-8">

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
       className="bg-[#f8fafc] border border-slate-200 rounded-[30px] p-5 sm:p-7 lg:p-10 shadow-sm hover:shadow-xl transition"
      >
       <div className="flex flex-col sm:flex-row items-start gap-5">

          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-100 text-primary flex items-center justify-center text-2xl shrink-0">
            <FiBriefcase />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-corporate-navy mb-4 leading-snug">
              Governance-Led Platform Development
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              NiostGroup International develops structured operating
              platforms designed around governance, strategic control,
              and long-term enterprise value.
            </p>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Holding-level structural oversight",
                "Governance-first design logic",
                "Platform alignment across jurisdictions",
                "Long-term development discipline",
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>

                  <p className="text-gray-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
        className="bg-[#f8fafc] border border-slate-200 rounded-[30px] p-5 sm:p-7 lg:p-10 shadow-sm hover:shadow-xl transition"
      >
        <div className="flex items-start gap-5">

          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-100 text-blue-500 flex items-center justify-center text-2xl shrink-0">
            <FiTruck />
          </div>

          <div>
           <h3 className="text-xl sm:text-2xl font-bold text-corporate-navy mb-4 leading-snug">
              Certified Container Leasing
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              Through its first operating platform, NiostGroup
              Logistics, the group is preparing to support industrial
              and trade-linked customers with certified containers and
              related logistics assets.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Certified asset model",
                "Corridor-oriented deployment",
                "Structured operational oversight",
                "Scalable commercial relevance",
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>

                  <p className="text-gray-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ y: -4 }}
       className="bg-[#f8fafc] border border-slate-200 rounded-[30px] p-5 sm:p-7 lg:p-10 shadow-sm hover:shadow-xl transition"
      >
        <div className="flex items-start gap-5">

          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-violet-100 text-violet-500 flex items-center justify-center text-2xl shrink-0">
            <FiFileText />
          </div>

          <div>
           <h3 className="text-xl sm:text-2xl font-bold text-corporate-navy mb-4 leading-snug">
              Strategic Corridor Execution
            </h3>

            <p className="text-gray-600 leading-relaxed mb-6">
              The group is being developed to support targeted
              expansion across selected international corridors
              through disciplined market prioritization, structural
              alignment, and phased execution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Corridor analysis and selection",
                "Cross-border operating logic",
                "Deployment planning",
                "International growth alignment",
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-500"></span>

                  <p className="text-gray-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  </div>
</section>
    </div>
  );
};

export default SectorPage;
