
import { motion } from "framer-motion";
import HeroSection from "../../../components/HeroSection";
import governanceImg from "../../../../../assets/governance image.png";
import { useEffect, useState } from "react";
import { getLeadershipMembers } from "../../../../../services/leadershipService";

const BoardOfDirectors = () => {
  const [boardMembers, setBoardMembers] = useState([]);
 

   useEffect(() => {
  const fetchData = async () => {
    const response = await getLeadershipMembers();
    setBoardMembers(response.data || []);
  };

  fetchData();
}, []);

     
  return (
    <div className="bg-white">
      {/* 🔷 HERO SECTION */}
      <HeroSection
        title="Board of Directors"
        description="Meet our leadership team guiding the organization with vision and strategic direction."
        image={governanceImg}
      />

      {/* 🔥 STORYTELLING SECTION */}
      <section className="w-full mx-auto max-w-screen-2xl px-8 sm:px-12 lg:px-20 py-28 space-y-28">
        {boardMembers.map((member, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
             key={member._id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-10 md:gap-14 items-center"
            >
              {/* IMAGE CONTAINER */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className={`overflow-hidden rounded-3xl shadow-2xl ${isEven ? "md:order-1" : "md:order-2"}`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[320px] sm:h-[420px] object-cover transition duration-700 hover:scale-105"
                />
              </motion.div>

              {/* TEXT CONTAINER */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`space-y-5 ${isEven ? "md:order-2" : "md:order-1"}`}
              >
                <h2 className="text-3xl font-bold text-gray-900">
                  {member.name}
                </h2>

               <p className="text-primary font-medium text-lg">
  {member.position}
</p>

               <p className="text-gray-600 leading-relaxed text-lg">
  {member.bio}
</p>

                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✔</span> Strategic leadership
                    & decision-making
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✔</span> Governance and
                    compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✔</span> Driving innovation
                    and growth
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
};

export default BoardOfDirectors;
