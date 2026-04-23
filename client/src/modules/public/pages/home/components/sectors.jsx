import { useNavigate } from "react-router-dom";

const Sectors = () => {
  const navigate = useNavigate();

  const sectors = ["Corporate", "Logistics", "Foundation", "Institute"];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">

        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-orange-500">
               Sectors
            </h2>
            <p className="text-gray-500 text-sm">
              Creating Impact Across Sectors
            </p>
          </div>

          <button
            onClick={() => navigate("/sectors")}
            className="text-blue-500 text-sm hover:underline"
          >
            Explore All Sectors →
          </button>
        </div>

        {/* 🔥 SLIDER WRAPPER */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">

            {/* 🔥 DUPLICATE FOR INFINITE LOOP */}
            {[...sectors, ...sectors].map((item, i) => (

              <div
                key={i}
                onClick={() => navigate(`/sectors/${item.toLowerCase()}`)}
                className="min-w-[260px] border p-6 relative hover:shadow-xl transition cursor-pointer"
              >

                <div className={`absolute top-0 left-0 w-full h-1 bg-gray-300`}>
                </div>

                <h3 className="font-semibold mt-4 mb-2">{item}</h3>

                <p className="text-sm text-gray-500 mb-4">
                  Sample description text for this sector.
                </p>

                <span className="text-blue-500 text-sm hover:underline">
                  View Details →
                </span>
              </div>

            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Sectors;