import { useNavigate } from "react-router-dom";

const News = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-100">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">

        <div className="flex justify-between items-center mb-12 flex-wrap gap-4">
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
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
                className="h-48 w-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded">
                Logistics
              </span>
            </div>

            <div className="p-5">
              <p className="text-xs text-gray-400 mb-2">20 Apr, 2026</p>
              <h3 className="font-semibold mb-2 text-lg">
                The Future of Logistics in a Digital World
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Discover how digital transformation is reshaping logistics.
              </p>

              <span className="text-blue-500 text-sm cursor-pointer hover:underline">
                Read More →
              </span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
                className="h-48 w-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded">
                Finance
              </span>
            </div>

            <div className="p-5">
              <p className="text-xs text-gray-400 mb-2">20 Apr, 2026</p>
              <h3 className="font-semibold mb-2 text-lg">
                Financial Strategies for Business Growth
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Learn key financial strategies for sustainable growth.
              </p>

              <span className="text-blue-500 text-sm cursor-pointer hover:underline">
                Read More →
              </span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
                className="h-48 w-full object-cover"
              />
              <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded">
                Technology
              </span>
            </div>

            <div className="p-5">
              <p className="text-xs text-gray-400 mb-2">20 Apr, 2026</p>
              <h3 className="font-semibold mb-2 text-lg">
                Emerging Trends in Technology Innovation
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Explore the latest technology trends shaping industries.
              </p>

              <span className="text-blue-500 text-sm cursor-pointer hover:underline">
                Read More →
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default News;