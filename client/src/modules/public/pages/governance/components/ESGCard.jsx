// import { Leaf, Users, Shield } from "lucide-react";

// const icons = {
//   Environmental: <Leaf />,
//   Social: <Users />,
//   Governance: <Shield />,
// };

// const colors = {
//   Environmental: "text-orange-500",
//   Social: "text-green-500",
//   Governance: "text-purple-500",
// };

// const ESGCard = ({ title, desc }) => {
//   return (
//     <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition duration-300 cursor-pointer">

//       {/* ICON */}
//       <div className={`text-2xl mb-4 ${colors[title]} transition transform group-hover:scale-110`}>
//         {icons[title]}
//       </div>

//       {/* TITLE */}
//       <h3 className="font-semibold text-gray-800 text-base group-hover:text-orange-500 transition">
//         {title}
//       </h3>

//       {/* DESC */}
//       <p className="text-sm text-gray-500 mt-2 leading-relaxed">
//         {desc}
//       </p>

//       {/* LINK */}
//       <span className="text-blue-500 text-sm mt-4 inline-block group-hover:translate-x-1 transition">
//         Read More →
//       </span>

//     </div>
//   );
// };

// export default ESGCard;

import { useNavigate } from "react-router-dom";
import { Leaf, Users, Shield } from "lucide-react";

const icons = {
  Environmental: <Leaf className="text-orange-500" />,
  Social: <Users className="text-green-500" />,
  Governance: <Shield className="text-purple-500" />,
};

const ESGCard = ({ title, desc }) => {
  const navigate = useNavigate();

  return (
    <div className="group bg-white p-6 rounded-xl border hover:shadow-lg transition">

      <div className="mb-4 text-2xl">{icons[title]}</div>

      <h3 className="font-semibold text-gray-800">{title}</h3>

      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
        {desc}
      </p>

      {/* ✅ CLICK FIX */}
      <button
        onClick={() => navigate("/governance/esg")}
        className="text-blue-500 text-sm mt-4 inline-block"
      >
        Read More →
      </button>

    </div>
  );
};

export default ESGCard;