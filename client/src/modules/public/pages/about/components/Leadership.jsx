import { motion } from "framer-motion";
import leadershipImg1 from "../../../../../assets/juno.jpg"; 
import leadershipImg2 from "../../../../../assets/alex.jpg";

const Leadership = () => {
  const leaders = [
    {
      name: "Juno Oosterwolde",
      title: "Founder and Group CEO, NIOSTGROUP International; CEO, NIOSTGROUP Logistics",
      bio: "Juno Oosterwolde leads the group’s overall strategic direction, corporate structuring, market development, and phased execution across the holding and its operating platforms. In addition to his executive leadership responsibilities, he also carries group-level responsibility for brand, digital, and communications.",
      image: leadershipImg1, 
      linkedin: "https://www.linkedin.com/in/juno-oosterwolde-54176136b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3ByJbLPf9GQM%2BtGZKG8OaneQ%3D%3D", 
    },
    {
      name: "Alexandre Fernandes",
      title: "Group CTO, NIOSTGROUP International",
      bio: "Alexandre Fernandes leads the group’s technology strategy, digital architecture, and technical development direction across the holding and its operating platforms. His role supports the design of scalable technology environments aligned with NIOSTGROUP International’s governance-first model, platform development priorities, and long-term international growth objectives.",
      image: leadershipImg2, 
      linkedin: "https://www.linkedin.com/in/alexandre-fernandes-architect?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxCoAROKETwStIZp9dzu5UA%3D%3D", 
    },
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-24">
    
      <div className="w-full max-w-full mx-auto px-6 sm:px-10 lg:px-20">
        
        {/* HEADER SECTION */}
        <div className="max-w-full mx-auto text-center mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            
            className="text-3xl md:text-4xl font-bold text-orange-500 mb-4"
          >
            Leadership & Governance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
           
            className="text-gray-600 text-base md:text-lg leading-relaxed"
          >
            NIOSTGROUP International is being led with a strong emphasis on structure, accountability,
            and long-term enterprise development.
          </motion.p>
        </div>

        {/* ALTERNATING LEADERS SECTION */}
        <div className="flex flex-col gap-20 md:gap-8">
          {leaders.map((leader, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-12 sm:gap-8  min-[1216px]:gap-24   items-center"
              >
                {/* TEXT CONTENT CONTAINER (Takes 7 columns on desktop) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -10 : 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                 
                  className={`md:border-l-2 md:border-orange-500/70 md:pl-10 space-y-2 md:col-span-8 ${isEven ? "md:order-1" : "md:order-2"}`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {leader.name}
                  </h3>
                  <p className="text-orange-500 font-semibold text-sm md:text-base leading-snug">
                    {leader.title}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base pt-1">
                    {leader.bio}
                  </p>

                  {/* LinkedIn Icon Link */}
                  <div className="pt-3">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors"
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </motion.div>

                {/* IMAGE CONTAINER (Takes 5 columns on desktop for better proportions) */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 10 : -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                 
                  className={`max-w-[300px] md:w-full md:col-span-4 m-auto  ${isEven ? "md:order-2" : "md:order-1"}`}
                >
                  {/* Fixed aspect ratio and max-height ensures the corporate headshot looks sharp and un-stretched */}
                  <div className="w-full   aspect-[3/4] sm:aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover object-top hover:scale-101 transition-transform duration-300"
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Leadership;
