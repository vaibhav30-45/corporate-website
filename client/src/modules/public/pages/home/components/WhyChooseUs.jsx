import whyImg from "../../../../../assets/why choose us.png";
import { FaMedal, FaCheckCircle, FaUsers } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="relative h-[450px] flex overflow-hidden">

      {/* LEFT CONTENT */}
      <div className="w-1/2 bg-[#0c2438] flex items-center clip-path-custom relative z-20">
        <div className="px-12 lg:px-20 text-white w-full">

          <h2 className="text-4xl font-bold mb-10">
            Why Choose Us
          </h2>

          {/* STATS */}
          <div className="flex items-center justify-between">

            {/* ITEM 1 */}
            <div className="flex items-center gap-3">
              <FaMedal className="text-orange-500 text-xl" />
              <div>
                <h3 className="text-lg font-semibold">10+</h3>
                <p className="text-gray-300 text-sm">
                  Years of Experience
                </p>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="h-10 w-px bg-gray-500"></div>

            {/* ITEM 2 */}
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-orange-500 text-xl" />
              <div>
                <h3 className="text-lg font-semibold">200+</h3>
                <p className="text-gray-300 text-sm">
                  Projects Completed
                </p>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="h-10 w-px bg-gray-500"></div>

            {/* ITEM 3 */}
            <div className="flex items-center gap-3">
              <FaUsers className="text-orange-500 text-xl" />
              <div>
                <h3 className="text-lg font-semibold">50+</h3>
                <p className="text-gray-300 text-sm">
                  Happy Clients
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-1/2 relative -ml-20">
        <img
          src={whyImg}
          alt="Why Choose Us"
          className="h-full w-full object-cover"
        />
      </div>

    </section>
  );
};

export default WhyChooseUs;