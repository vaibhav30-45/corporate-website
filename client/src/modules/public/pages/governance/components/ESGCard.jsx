
import { useNavigate } from "react-router-dom";
import { Leaf, Users, Shield } from "lucide-react";

const icons = {
  Environmental: <Leaf className="text-primary" />,
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

     

    </div>
  );
};

export default ESGCard;
