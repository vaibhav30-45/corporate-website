import { useNavigate } from "react-router-dom";
import { MapPin, Briefcase, Clock } from "lucide-react";

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    // 🔥 scroll to top BEFORE navigation
    window.scrollTo({
      top: 0,
      behavior: "instant", // or "smooth"
    });

    navigate(`/careers/${job.slug}`);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 
                    flex flex-col md:flex-row md:items-center md:justify-between 
                    hover:shadow-md transition duration-300">

      {/* LEFT CONTENT */}
      <div className="flex gap-4">

        {/* ICON */}
        <div className="text-orange-500 text-2xl mt-1">
          {"</>"}
        </div>

        <div>
          {/* TITLE */}
          <h3 className="text-lg font-semibold text-gray-800">
            {job.title}
          </h3>

          {/* META INFO */}
          <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm mt-2">

            <span className="flex items-center gap-1">
              <MapPin size={14} /> {job.location}
            </span>

            <span className="flex items-center gap-1">
              <Briefcase size={14} /> {job.type}
            </span>

            <span className="flex items-center gap-1">
              <Clock size={14} /> {job.experience}
            </span>

          </div>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-sm mt-3 max-w-xl">
            {job.description}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="mt-4 md:mt-0">
        <button
          onClick={handleNavigate}
          className="text-blue-600 font-medium flex items-center gap-1 hover:underline"
        >
          View Details →
        </button>
      </div>

    </div>
  );
};

export default JobCard;