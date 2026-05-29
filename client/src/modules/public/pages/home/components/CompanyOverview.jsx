import { motion } from "framer-motion";

const CompanyOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="w-full  mx-auto px-8 sm:px-12 lg:px-20">

        {/* 🔥 HEADING ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-orange-500">
           Platform Development Approach
          </h2>
          <p className="text-gray-500 text-sm  mx-auto">
           NIOSTGROUP International is being developed as a holding platform that creates and aligns operating businesses within a structured governance framework. <br />  Its first operating platform, NIOSTGROUP Logistics, reflects this approach through a governance-led model focused on certified container leasing, smart logistics assets, and corridor-based execution. 
          </p>
        </motion.div>

        {/* 🔥 STAGGER CONTAINER */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >

          {/* CARD 1 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            className="border p-6 rounded-lg text-center hover:shadow-lg transition"
          >
            <img
              src="https://img.icons8.com/fluency/48/goal.png"
              alt="mission"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Our Mission</h3>
            <p className="text-sm text-gray-500">
             To build governance-led, asset-backed platforms that support disciplined growth, operating resilience, and long-term stakeholder value. 
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            className="border p-6 rounded-lg text-center hover:shadow-lg transition"
          >
            <img
              src="https://img.icons8.com/fluency/48/vision.png"
              alt="vision"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Our Vision</h3>
            <p className="text-sm text-gray-500">
              To become a trusted international holding group known for structured growth, responsible governance, and investment-ready platform development. 
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            className="border p-6 rounded-lg text-center hover:shadow-lg transition"
          >
            <img
              src="https://img.icons8.com/fluency/48/worldwide-location.png"
              alt="global"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Global Presence</h3>
          <div className="flex flex-col gap-3 text-sm text-gray-500 mt-3">

  <span className="flex items-center justify-center gap-2">
    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
    Australia, Panama
  </span>

  <span className="flex items-center justify-center gap-2">
    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
    Suriname, Guyana
  </span>

</div>
          </motion.div>

          {/* CARD 4 */}
          {/* <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            className="border p-6 rounded-lg text-center hover:shadow-lg transition"
          >
            <img
              src="https://img.icons8.com/fluency/48/artificial-intelligence.png"
              alt="innovation"
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold mb-2">Innovation Focus</h3>
            <p className="text-sm text-gray-500">
              Leveraging technology to drive growth and transformation.
            </p>
          </motion.div> */}

        </motion.div>

      </div>
    </section>
  );
};

export default CompanyOverview;
