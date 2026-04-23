import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const News = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-100">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">

        {/* 🔥 HEADING ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-between items-center mb-12 flex-wrap gap-4"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">
              Latest News Insights
            </h2>
            <p className="text-gray-500 text-sm">
              Stay updated with our latest news, industry insights, and expert perspectives.
            </p>
          </div>

          <button
            onClick={() => navigate("/blog")}
            className="text-blue-500 text-sm hover:underline"
          >
            View All Articles →
          </button>
        </motion.div>

        {/* 🔥 CARDS CONTAINER (STAGGER) */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
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
            className="bg-white rounded-lg shadow hover:shadow-2xl transition overflow-hidden group cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
                className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded">
                Logistics
              </span>
            </div>

            <div className="p-5">
              <p className="text-xs text-gray-400 mb-2">20 Apr, 2026</p>
              <h3 className="font-semibold mb-2 text-lg group-hover:text-orange-500 transition">
                The Future of Logistics in a Digital World
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Discover how digital transformation is reshaping logistics.
              </p>

              <span className="text-blue-500 text-sm cursor-pointer hover:underline">
                Read More →
              </span>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            className="bg-white rounded-lg shadow hover:shadow-2xl transition overflow-hidden group cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded">
                Finance
              </span>
            </div>

            <div className="p-5">
              <p className="text-xs text-gray-400 mb-2">20 Apr, 2026</p>
              <h3 className="font-semibold mb-2 text-lg group-hover:text-orange-500 transition">
                Financial Strategies for Business Growth
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Learn key financial strategies for sustainable growth.
              </p>

              <span className="text-blue-500 text-sm cursor-pointer hover:underline">
                Read More →
              </span>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            className="bg-white rounded-lg shadow hover:shadow-2xl transition overflow-hidden group cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
                className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded">
                Technology
              </span>
            </div>

            <div className="p-5">
              <p className="text-xs text-gray-400 mb-2">20 Apr, 2026</p>
              <h3 className="font-semibold mb-2 text-lg group-hover:text-orange-500 transition">
                Emerging Trends in Technology Innovation
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Explore the latest technology trends shaping industries.
              </p>

              <span className="text-blue-500 text-sm cursor-pointer hover:underline">
                Read More →
              </span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default News;