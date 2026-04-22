import aboutImg from "../../../assets/home about image.png";

const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 grid md:grid-cols-2 gap-10 items-center">

        <img src={aboutImg} alt="About" className="rounded-lg shadow-md object-cover w-full" />

        <div>
          <h4 className="text-orange-500 font-semibold mb-2">About US</h4>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Driving the Future</h2>

          <p className="text-gray-600 mb-6">
            NIF is a multi-entity ecosystem focused on logistics,
            social development, and education.
          </p>

          <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;