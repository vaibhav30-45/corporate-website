import { useRef, useState } from "react";

import HeroSection from "../../../components/HeroSection";
import WhyWork from "../components/WhyWork";
import JobFilter from "../components/JobFilter";
import JobList from "../components/JobList";
import ApplyForm from "../components/ApplyForm";

import careerImg from "../../../../../assets/Careers-image.png";
import resumeImg from "../../../../../assets/Resume-image.png";

const CareersHome = () => {
  const jobSectionRef = useRef(null);
  const [showForm, setShowForm] = useState(false);

  // ✅ Smooth scroll with navbar offset
  const scrollToJobs = () => {
    const yOffset = -80; // adjust based on navbar height
    const element = jobSectionRef.current;

    if (element) {
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div>

      {/* HERO WRAPPER */}
      <div className="relative">

        <HeroSection
          title="Join Our Team"
          description="Be a part of our growing organization and build a rewarding career with us."
          image={careerImg}
        />

        {/* ✅ BUTTONS (FIXED CLICK ISSUE) */}
        <div className="absolute z-20 top-[70%] md:top-[75%] left-[2%] md:left-[7%] flex gap-6">

          {/* VIEW JOBS */}
          <button
            onClick={scrollToJobs}
            className="bg-orange-500 px-6 py-2 text-white font-medium 
                       hover:bg-orange-600 hover:scale-105 
                       active:scale-95 transition duration-200"
          >
            View Open Positions
          </button>

          {/* APPLY */}
          {/* <button
            onClick={() => setShowForm(true)}
            className="border border-white px-6 py-2 text-white 
                       hover:bg-white hover:text-black 
                       hover:scale-105 active:scale-95 
                       transition duration-200"
          >
            Apply Now
          </button> */}

        </div>

      </div>

      {/* WHY WORK */}
      <div className="py-16 px-6 md:px-16 bg-white">
        <WhyWork />
      </div>

      {/* OPEN POSITIONS */}
      <div
        ref={jobSectionRef}
        className="py-16 px-6 md:px-16 bg-gray-50"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-8">
          Open Positions
        </h2>

        <JobFilter />
        <JobList />
      </div>

      {/* RESUME SECTION */}
      <div
        className="relative h-[260px] md:h-[320px] flex items-center px-6 md:px-16"
        style={{
          backgroundImage: `url(${resumeImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0c2438]/70"></div>

        <div className="relative z-10 text-white max-w-lg">
          <h2 className="text-2xl md:text-3xl font-bold">
            Didn’t find a suitable role?
          </h2>

          <p className="mt-3 text-gray-300">
            Send us your resume and we’ll get in touch with you.
          </p>

          <button
            onClick={() => setShowForm(true)}
            className="mt-5 bg-orange-500 px-6 py-2 
                       hover:bg-orange-600 hover:scale-105 
                       active:scale-95 transition duration-200"
          >
            Send Resume
          </button>
        </div>
      </div>

      {/* ✅ APPLY FORM MODAL (USING YOUR COMPONENT) */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-lg w-[90%] md:w-[500px] relative shadow-lg">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-3 text-xl font-bold"
            >
              ×
            </button>

            {/* YOUR APPLY FORM */}
            <ApplyForm />

          </div>

        </div>
      )}

    </div>
  );
};

export default CareersHome;