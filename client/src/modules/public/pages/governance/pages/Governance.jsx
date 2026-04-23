import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BoardCard from "../components/BoardCard";
import ESGCard from "../components/ESGCard";
import PolicyItem from "../components/PolicyItem";
import ComplianceCard from "../components/ComplianceCard";
import governanceImg from "../../../../../assets/governance image.png";

const Governance = () => {
  const navigate = useNavigate();

  const { boardMembers = [], esgData = [], policies = [] } =
    useSelector((state) => state.governance || {});

  return (
    <div >

      {/* 🔷 HERO */}
        <div className="relative min-h-[60vh] flex items-center mt-[80px]">

  {/* BACKGROUND */}
  <div className="absolute inset-0">
    <img
      src={governanceImg}
      alt="governance"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[#0c2438]/70"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-20 text-white">

    <div className="max-w-2xl">

      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
        Governance
      </h1>

      <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
        Strong governance, ethical practices, sustainable growth. We are
        committed to the highest standards of accountability in everything we do.
      </p>

    </div>

  </div>

</div>
      {/* 🔷 BOARD */}
      <section className="bg-[#f5f7fa]  max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-20">

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-semibold text-orange-500">
              Board of Directors
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Our Board of Directors brings together diverse expertise.
            </p>
          </div>

          {/* ✅ NAVIGATION FIX */}
          <button
            onClick={() => navigate("/governance/board")}
            className="text-blue-600 text-sm"
          >
            View Board Details →
          </button>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {boardMembers.map((m) => (
            <BoardCard key={m.id} {...m} />
          ))}
        </div>

      </section>

      {/* 🔷 ESG */}
      <section className="bg-whitemax-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-20">

        <h2 className="text-3xl font-semibold text-orange-500 mb-3">
          ESG Framework
        </h2>

        <p className="text-gray-500 mb-12">
          Our ESG framework guides our approach to creating long-term value.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {esgData.map((item) => (
            <ESGCard key={item.id} {...item} />
          ))}
        </div>

      </section>

      {/* 🔷 POLICIES */}
     <section className="bg-[#f5f7fa] max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-20">

  <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">

    {/* LEFT */}
    <div>
      <h2 className="text-3xl font-semibold text-orange-500">
        Policies
      </h2>

      <h3 className="text-3xl font-semibold mt-4">
        Our Commitment to Responsible Practices
      </h3>

      <p className="text-gray-500 mt-3">
        Our policies define how we conduct business with integrity, respect, and accountability.
      </p>

      <button
        onClick={() => navigate("/governance/policies")}
        className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md 
        hover:bg-orange-600 hover:scale-105 transition"
      >
        View All Policies
      </button>
    </div>

    {/* RIGHT (WIDER CARD) */}
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden w-full">

      {policies.map((p, index) => (
        <PolicyItem key={p.id} {...p} index={index} />
      ))}

    </div>

  </div>

</section>
      {/* 🔷 COMPLIANCE */}
     <section className="bg-white max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-24">

  {/* HEADING */}
  <div className="mb-16">
    <h2 className="text-3xl font-semibold text-orange-500">
      Compliance
    </h2>

    <p className="text-gray-500 mt-3 max-w-xl">
      We comply with all applicable laws, regulations and global standards to ensure trust and accountability.
    </p>
  </div>

  {/* GRID */}
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