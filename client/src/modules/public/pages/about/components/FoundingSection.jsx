import { motion } from "framer-motion";
import { MdOutlineAccountBalance, MdOutlineVerified, MdOutlineDiamond } from "react-icons/md";
import { TbCrosshair, TbArrowsSplit2, TbLeaf, TbClockHour4 } from "react-icons/tb";

const values = [
  { icon: <MdOutlineAccountBalance />, label: "Governance" },
  { icon: <MdOutlineVerified />, label: "Accountability" },
  { icon: <MdOutlineDiamond />, label: "Integrity" },
  { icon: <TbCrosshair />, label: "Discipline" },
  { icon: <TbCrosshair />, label: "Strategic Alignment" },
  { icon: <TbLeaf />, label: "Responsible Growth" },
  { icon: <TbClockHour4 />, label: "Long-Term Value Orientation", full: true },
];

const FoundingSection = () => {
  return (
    <section className="py-20 px-8 sm:px-12 lg:px-20">

    
      {/* Split Grid */}
      <div className="grid md:grid-cols-2 divide-x divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">

        {/* LEFT — Founding Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 relative"
        >
          {/* Blue accent bar */}
          <div className="absolute top-10 right-0 w-[3px] h-12 bg-orange-600 rounded-none" />

          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-orange-500 flex items-center gap-2 mb-5">
            
            Founding Narrative
          </p>

          <h2
            className=" text-4xl font-semibold leading-tight text-gray-900 mb-5"
           
          >
            Founding<br />Logic
          </h2>

          <div className="w-10 h-px bg-amber-400 mb-6" />

          <p className="text-sm md:text-base leading-relaxed text-gray-600  mb-4">
            <em
              className=" text-gray-900"
              
            >
              NIOSTGROUP International
            </em>{" "}
            is being formed to create a stronger alternative to loosely structured expansion models.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-600 ">
            The group is founded on the belief that long-term enterprise value requires{" "}
            <em
              className=" text-gray-900"
              
            >
              governance
            </em>
            , clarity of ownership, disciplined execution, and alignment between strategic intent
            and operating structure.
          </p>
        </motion.div>

        {/* RIGHT — Core Values */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-gray-50 p-10"
        >
          <p className="text-[11px] font-bold tracking-[0.14em] uppercase text-orange-500 flex items-center gap-2 mb-5">
            
            Core Values
          </p>

          <h2
            className=" text-4xl font-semibold leading-tight text-gray-900 mb-5"
          >
            What We<br />Stand For
          </h2>

          <div className="w-10 h-px bg-amber-400 mb-6" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {values.map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ borderColor: "#BA7517", backgroundColor: "#FAEEDA" }}
                className={`flex items-start gap-2.5 px-4 py-3 border border-gray-200 rounded-lg bg-white cursor-default transition-colors ${
                  v.full ? "sm:col-span-2" : ""
                }`}
              >
                <span className="text-amber-500 text-base mt-0.5">{v.icon}</span>
                <span className="text-sm font-medium text-gray-800">{v.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FoundingSection;