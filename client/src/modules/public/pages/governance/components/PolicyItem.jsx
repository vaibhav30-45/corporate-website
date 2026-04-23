// import { Shield, Lock, AlertTriangle, Megaphone } from "lucide-react";

// const icons = [
//   <Shield className="text-orange-500" />,
//   <Lock className="text-orange-500" />,
//   <AlertTriangle className="text-orange-500" />,
//   <Megaphone className="text-orange-500" />,
// ];

// const descriptions = [
//   "Guiding principles for ethical and responsible business conduct.",
//   "Ensuring the privacy and protection of stakeholder information.",
//   "Zero tolerance towards bribery and corruption in all forms.",
//   "Encouraging transparency and protecting whistleblower.",
// ];

// const PolicyItem = ({ name, index }) => {
//   return (
//     <div className="flex items-start justify-between px-5 py-4 hover:bg-gray-50 transition">

//       {/* LEFT */}
//       <div className="flex gap-3">
//         <div className="mt-1 text-lg">
//           {icons[index]}
//         </div>

//         <div>
//           <h4 className="text-sm font-semibold text-gray-800">
//             {name}
//           </h4>
//           <p className="text-xs text-gray-500 mt-1">
//             {descriptions[index]}
//           </p>
//         </div>
//       </div>

//       {/* RIGHT ARROW */}
//       <span className="text-gray-400 text-lg">→</span>

//     </div>
//   );
// };

// export default PolicyItem;

import { useNavigate } from "react-router-dom";
import { Shield, Lock, AlertTriangle, Megaphone } from "lucide-react";

const icons = [
  <Shield className="text-orange-500" />,
  <Lock className="text-orange-500" />,
  <AlertTriangle className="text-orange-500" />,
  <Megaphone className="text-orange-500" />,
];

const descriptions = [
  "Guiding principles for ethical and responsible business conduct.",
  "Ensuring the privacy and protection of all stakeholder information.",
  "Zero tolerance towards bribery and corruption in all forms.",
  "Encouraging transparency and protecting whistleblower.",
];

const PolicyItem = ({ name, id, index }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center px-5 py-4 border-b hover:bg-gray-50 transition">

      {/* LEFT */}
      <div className="flex gap-3">
        <div className="text-lg mt-1">{icons[index]}</div>

        <div>
          <h4 className="text-sm font-semibold text-gray-800">
            {name}
          </h4>
          <p className="text-xs text-gray-500 mt-1">
            {descriptions[index]}
          </p>
        </div>
      </div>

      {/* RIGHT CLICKABLE ARROW */}
      <button
        onClick={() => navigate(`/governance/policies/${id}`)}
        className="text-gray-400 text-lg hover:text-blue-500"
      >
        →
      </button>

    </div>
  );
};

export default PolicyItem;