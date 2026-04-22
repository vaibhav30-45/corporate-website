import heroBg from "../../../assets/Group_95.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">

      <div className="absolute inset-0">
        <img src={heroBg} alt="hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#0c2438]/75"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 pt-24 pb-16 text-white">
        <div className="max-w-2xl">

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Building a Global <br />
            Digital Ecosystem
          </h1>

          <p className="text-gray-300 mb-8 text-base sm:text-lg">
            Driving sustainable growth through logistics, education,
            and social impact across continents.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button className="bg-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition">
              Get Started
            </button>

            <button className="border border-white/40 px-6 py-3 rounded-md font-semibold hover:bg-orange-500 hover:border-orange-500 transition">
              Our Services
            </button>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 border-t border-white/20 pt-6">

            <div className="flex items-center gap-3">
              <span className="text-orange-500 text-lg">↗</span>
              <div>
                <h3 className="font-bold">4+</h3>
                <p className="text-sm text-gray-300">Continents</p>
              </div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-white/20"></div>

            <div className="flex items-center gap-3">
              <span className="text-orange-500 text-lg">⬛</span>
              <div>
                <h3 className="font-bold">Multi-Entity</h3>
                <p className="text-sm text-gray-300">Digital Ecosystem</p>
              </div>
            </div>

            <div className="hidden sm:block h-10 w-px bg-white/20"></div>

            <div className="flex items-center gap-3">
              <span className="text-orange-500 text-lg">◎</span>
              <div>
                <h3 className="font-bold">Sustainable</h3>
                <p className="text-sm text-gray-300">Growth & Impact</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;