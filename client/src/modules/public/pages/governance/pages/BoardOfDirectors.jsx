import { useState } from "react";
import { useSelector } from "react-redux";
import BoardCard from "../components/BoardCard";
import governanceImg from "../../../../../assets/governance image.png";

const BoardOfDirectors = () => {
  const { boardMembers = [] } = useSelector(
    (state) => state.governance || {}
  );

  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div>

      {/* 🔷 HERO */}
      <div className="relative min-h-[50vh] flex items-center mt-[80px]">
        <div className="absolute inset-0">
          <img src={governanceImg} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#0c2438]/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 text-white">
          <h1 className="text-4xl font-bold">Board of Directors</h1>
          <p className="text-gray-300 mt-2">
            Meet our leadership team guiding the organization.
          </p>
        </div>
      </div>

      {/* 🔷 BOARD */}
      <div className="bg-[#f5f7fa]">

        <section className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-20">

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

            {boardMembers.map((member) => (
              <div key={member.id} onClick={() => setSelectedMember(member)}>
                <BoardCard {...member} />
              </div>
            ))}

          </div>

          {/* 🔥 DETAIL EXPAND */}
          {selectedMember && (
            <div className="mt-16 bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-2 gap-10">

              {/* IMAGE */}
              <div>
                <img
                  src={selectedMember.image}
                  className="rounded-xl w-full max-w-md"
                />
              </div>

              {/* CONTENT */}
              <div>

                <h2 className="text-2xl font-semibold text-orange-500 mb-2">
                  {selectedMember.name}
                </h2>

                <p className="text-gray-500 mb-4">
                  {selectedMember.role}
                </p>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {selectedMember.name} plays a key role in guiding the
                  organization with strong leadership, governance, and strategic vision.
                </p>

                <h3 className="font-semibold mb-2">Key Responsibilities</h3>

                <ul className="list-disc pl-5 text-gray-600 space-y-2">
                  <li>Strategic decision-making</li>
                  <li>Ensuring compliance and governance</li>
                  <li>Driving business growth</li>
                </ul>

                {/* CLOSE BUTTON */}
                <button
                  onClick={() => setSelectedMember(null)}
                  className="mt-6 text-blue-500"
                >
                  Close ✕
                </button>

              </div>

            </div>
          )}

        </section>

      </div>

    </div>
  );
};

export default BoardOfDirectors;