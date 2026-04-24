// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import BoardCard from "../components/BoardCard";
// import ESGCard from "../components/ESGCard";
// import PolicyItem from "../components/PolicyItem";
// import ComplianceCard from "../components/ComplianceCard";
// import HeroSection from "../components/HeroSection"; // ✅ ADD THIS
// import governanceImg from "../../../../../assets/governance image.png";

// const Governance = () => {
//   const navigate = useNavigate();

//   const { boardMembers = [], esgData = [], policies = [] } =
//     useSelector((state) => state.governance || {});

//   return (
//     <div>

//       {/* 🔷 HERO (UPDATED) */}
//       <HeroSection
//         title="Governance"
//         description="Strong governance, ethical practices, sustainable growth. We are committed to the highest standards of accountability in everything we do."
//         image={governanceImg}
//       />

//       {/* 🔷 BOARD */}
//       <section className="bg-[#f5f7fa] max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-20">

//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h2 className="text-3xl font-semibold text-orange-500">
//               Board of Directors
//             </h2>
//             <p className="text-gray-500 text-sm mt-2">
//               Our Board of Directors brings together diverse expertise.
//             </p>
//           </div>

//           <button
//             onClick={() => navigate("/governance/board")}
//             className="text-blue-600 text-sm"
//           >
//             View Board Details →
//           </button>
//         </div>

//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {boardMembers.map((m) => (
//             <BoardCard key={m.id} {...m} />
//           ))}
//         </div>

//       </section>

//       {/* 🔷 ESG (UPDATED WITH BUTTON) */}
//       <section className="bg-white max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-20">

//         {/* HEADER WITH BUTTON */}
//         <div className="flex justify-between items-center mb-6">
//           <div>
//             <h2 className="text-3xl font-semibold text-orange-500">
//               ESG Framework
//             </h2>

//             <p className="text-gray-500 mt-2">
//               Our ESG framework guides our approach to creating long-term value.
//             </p>
//           </div>

//           {/* ✅ NEW BUTTON */}
//           <button
//             onClick={() => navigate("/governance/esg")}
//             className="text-blue-600 text-sm"
//           >
//             View More →
//           </button>
//         </div>

//         <div className="grid md:grid-cols-3 gap-10">
//           {esgData.map((item) => (
//             <ESGCard key={item.id} {...item} />
//           ))}
//         </div>

//       </section>

//       {/* 🔷 POLICIES */}
//       <section className="bg-[#f5f7fa] max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-20">

//         <div className="grid md:grid-cols-[1fr_1.4fr] gap-16 items-start">

//           {/* LEFT */}
//           <div>
//             <h2 className="text-3xl font-semibold text-orange-500">
//               Policies
//             </h2>

//             <h3 className="text-3xl font-semibold mt-4">
//               Our Commitment to Responsible Practices
//             </h3>

//             <p className="text-gray-500 mt-3">
//               Our policies define how we conduct business with integrity, respect, and accountability.
//             </p>

//             <button
//               onClick={() => navigate("/governance/policies")}
//               className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md 
//               hover:bg-orange-600 hover:scale-105 transition"
//             >
//               View All Policies
//             </button>
//           </div>

//           {/* RIGHT */}
//           <div className="bg-white rounded-xl border shadow-sm overflow-hidden w-full">
//             {policies.map((p, index) => (
//               <PolicyItem key={p.id} {...p} index={index} />
//             ))}
//           </div>

//         </div>

//       </section>

//       {/* 🔷 COMPLIANCE */}
//      {/* 🔷 COMPLIANCE */}
// <section className="bg-white max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-24">

//   {/* HEADER WITH BUTTON */}
//   <div className="flex justify-between items-center mb-16">

//     <div>
//       <h2 className="text-3xl font-semibold text-orange-500">
//         Compliance
//       </h2>

//       <p className="text-gray-500 mt-3 max-w-xl">
//         We comply with all applicable laws, regulations and global standards to ensure trust and accountability.
//       </p>
//     </div>

//     {/* ✅ NEW BUTTON */}
//     <button
//       onClick={() => navigate("/governance/compliance")}
//       className="text-blue-600 text-sm"
//     >
//       View More →
//     </button>

//   </div>

//   {/* GRID */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-10">

//     <ComplianceCard title="Regulatory Compliance" index={0} />
//     <ComplianceCard title="Global Standards" index={1} />
//     <ComplianceCard title="Risk Management" index={2} />
//     <ComplianceCard title="Continuous Monitoring" index={3} />

//   </div>

// </section>

//     </div>
//   );
// };

// export default Governance;


import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BoardCard from "../components/BoardCard";
import ESGCard from "../components/ESGCard";
import PolicyItem from "../components/PolicyItem";
import ComplianceCard from "../components/ComplianceCard";
import HeroSection from "../../../components/HeroSection";
import governanceImg from "../../../../../assets/governance image.png";

const Governance = () => {
  const navigate = useNavigate();

  const { boardMembers = [], esgData = [], policies = [] } =
    useSelector((state) => state.governance || {});

  return (
    <div>

      {/* 🔷 HERO */}
      <HeroSection
        title="Governance"
        description="Strong governance, ethical practices, sustainable growth. We are committed to the highest standards of accountability in everything we do."
        image={governanceImg}
      />

      {/* 🔷 BOARD */}
      <section className="bg-[#f5f7fa] max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-20">

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-semibold text-orange-500">
              Board of Directors
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Our Board of Directors brings together diverse expertise.
            </p>
          </div>

          <button
            onClick={() => {
              navigate("/governance/board");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-blue-600 text-sm hover:underline"
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
      <section className="bg-white max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-20">

        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-semibold text-orange-500">
              ESG Framework
            </h2>

            <p className="text-gray-500 mt-2">
              Our ESG framework guides our approach to creating long-term value.
            </p>
          </div>

          <button
            onClick={() => {
              navigate("/governance/esg");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-blue-600 text-sm hover:underline"
          >
            View More →
          </button>
        </div>

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
              onClick={() => {
                navigate("/governance/policies");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md 
              hover:bg-orange-600 hover:scale-105 transition"
            >
              View All Policies
            </button>
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
      <section className="bg-white max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-24">

        <div className="flex justify-between items-center mb-16">

          <div>
            <h2 className="text-3xl font-semibold text-orange-500">
              Compliance
            </h2>

            <p className="text-gray-500 mt-3 max-w-xl">
              We comply with all applicable laws, regulations and global standards to ensure trust and accountability.
            </p>
          </div>

          <button
            onClick={() => {
              navigate("/governance/compliance");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-blue-600 text-sm hover:underline"
          >
            View More →
          </button>

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