import HeroSection from "../../../components/HeroSection";

import FeatureSection from "../components/FeatureSection";
import TestimonialsSection from "../components/TestimonialsSection";

import careerImg from "../../../../../assets/Careers-image.png";

const LifeAtCompany = () => {
  return (
    <div>

      {/* ✅ HERO (REUSABLE) */}
      <HeroSection
        title="Life at Our Company"
        description="Experience a culture of innovation, collaboration, and growth where every individual is empowered to succeed."
        image={careerImg}
      />

      {/* INTRO */}
      <div className="px-8 sm:px-12 lg:px-20 py-12 bg-gray-50">
        <div className="">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Our Culture
          </h2>

          <p className="text-gray-600 leading-relaxed">
            At our company, we believe that great ideas come from great people.
            We foster a collaborative and inclusive environment where creativity
            thrives, and every team member is encouraged to contribute, learn,
            and grow. Our workplace is designed to inspire innovation while
            maintaining a strong work-life balance.
          </p>
        </div>
      </div>

      {/* FEATURES */}
      <FeatureSection />

      {/* EXPERIENCE */}
      <div className="px-8 sm:px-12 lg:px-20 py-12 bg-gray-50">

        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">
              Work. Learn. Grow.
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We provide opportunities for continuous learning and professional
              growth through mentorship programs, workshops, and hands-on
              experience. Whether you're starting your career or advancing to
              the next level, we support your journey every step of the way.
            </p>
          </div>

          <div className="h-[200px] md:h-[250px] bg-gradient-to-r from-[#A04F23] via-[#B96937] to-[#D3854D] rounded-lg flex items-center justify-center text-white text-lg font-semibold">
  Your Growth Journey Starts Here
</div>

        </div>

      </div>

      {/* TESTIMONIALS */}
      <TestimonialsSection />

    </div>
  );
};

export default LifeAtCompany;
