import whyImg from "../../../assets/why choose us.png";

const WhyChooseUs = () => {
  return (
    <section className="relative h-auto md:h-[320px] overflow-hidden">

      <div className="relative md:absolute left-0 top-0 md:w-[55%] w-full h-full bg-[#0c2438] flex items-center">

        <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 py-10 text-white">

          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Why Choose Us
          </h2>

          <div className="flex flex-wrap gap-8">

            <div>
              <h3 className="font-bold">10+</h3>
              <p className="text-sm text-gray-300">Years of Experience</p>
            </div>

            <div>
              <h3 className="font-bold">200+</h3>
              <p className="text-sm text-gray-300">Projects Completed</p>
            </div>

            <div>
              <h3 className="font-bold">50+</h3>
              <p className="text-sm text-gray-300">Happy Clients</p>
            </div>

          </div>

        </div>
      </div>

      <img
        src={whyImg}
        alt="Why Choose Us"
        className="hidden md:block absolute right-0 top-0 w-[60%] h-full object-cover"
      />

    </section>
  );
};

export default WhyChooseUs;