

import { useNavigate } from "react-router-dom";
import {
  Shield,
  Lock,
  FileText,
  Cookie,
  Scale,
  AlertTriangle,
  Info,
} from "lucide-react";


const icons = [
      // Policy Links
  <Lock className="text-orange-500" />,         // Privacy Policy
  <Scale className="text-orange-500" />,        // Terms & Conditions
  <Cookie className="text-orange-500" />,       // Cookie Policy
  <Shield className="text-orange-500" />,       // Code of Conduct
  <AlertTriangle className="text-orange-500" />, // Anti-Corruption Policy
  <Info className="text-orange-500" />,         // Disclaimer
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


    </div>
  );
};

export default PolicyItem;
