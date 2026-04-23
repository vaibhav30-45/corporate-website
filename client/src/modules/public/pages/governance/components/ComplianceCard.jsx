import { ShieldCheck, Globe, AlertTriangle, Activity } from "lucide-react";

const icons = [
  <ShieldCheck size={36} strokeWidth={3} />,
  <Globe size={36} strokeWidth={3} />,
  <AlertTriangle size={36} strokeWidth={3} />,
  <Activity size={36} strokeWidth={3} />,
];

const descriptions = [
  "We comply with all applicable laws and regulations.",
  "Aligned with international standards and industry best practices.",
  "Proactive approach to identify, assess and mitigate risks.",
  "Regular reviews to ensure ongoing compliance and improvement.",
];

const ComplianceCard = ({ title, index }) => {
  return (
    <div className="flex flex-col items-center text-center px-4">

      {/* ICON */}
      <div className="w-12 h-12 flex items-center justify-center text-orange-500 mb-5">
        {icons[index]}
      </div>

      {/* TITLE */}
      <h3 className="text-base font-semibold text-gray-800 leading-snug">
        {title}
      </h3>

      {/* DESC */}
      <p className="text-sm text-gray-500 mt-3 leading-relaxed max-w-[220px]">
        {descriptions[index]}
      </p>

    </div>
  );
};

export default ComplianceCard;