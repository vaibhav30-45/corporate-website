import { useNavigate } from "react-router-dom";

const Sectors = () => {
  const navigate = useNavigate();

 const sectors = [
  {
    title: "Logistics",
    description:
      "Development of logistics-focused platforms designed to support asset-backed operations, corridor efficiency, and structured execution in international trade environments.",
  },

  {
    title: "Maritime & Port",
    description:
      "Participation in maritime and port-linked opportunities through structured platform development, strategic infrastructure alignment, and governance-led sector positioning.",
  },

  {
    title: "Agro-Industrial Manufacturing",
    description:
      "Focus on agro-industrial manufacturing as a strategic sector where operational structure, asset discipline, and cross-border relevance can support long-term enterprise value.",
  },

  {
    title: "Financial Infrastructure / FinTech",
    description:
      "Long-term interest in financial infrastructure and FinTech-related platforms where governance, regulatory discipline, and scalable structural design are essential.",
  },
];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="w-full  mx-auto px-8 sm:px-12 lg:px-20">

        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary">
               Strategic Sectors Preview 
            </h2>
            <p className="text-gray-500 text-sm">
             NiostGroup International is being structured as a multi-industry holding group with a focus on sectors <br /> where governance, 
             structure, and disciplined execution create long-term value. 
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
  onClick={() => navigate(`/sectors/${item.title.toLowerCase().replace(/\s+/g, "-")}`)}
  className="min-w-[260px] max-w-[320px] border p-6 relative hover:shadow-xl transition cursor-pointer flex flex-col justify-between"
>

                <div className={`absolute top-0 left-0 w-full h-1 bg-gray-300`}>
                </div>

                <h3 className="font-semibold mt-4 mb-2">
  {item.title}
</h3>

               <p className="text-sm text-gray-500 mb-4 leading-relaxed break-words">
  {item.description}
</p>

                {/* <span className="text-blue-500 text-sm hover:underline">
                  View Details →
                </span> */}
              </div>

            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Sectors;
