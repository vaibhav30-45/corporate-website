import { useNavigate } from "react-router-dom";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Frontend Developer",
    text: "Amazing learning environment and supportive team.",
  },
  {
    name: "Neha Verma",
    role: "UI/UX Designer",
    text: "Creative freedom and growth opportunities are great.",
  },
  {
    name: "Rahul Singh",
    role: "Backend Developer",
    text: "Perfect work-life balance and culture.",
  },
];

const TestimonialsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">

      <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-orange-500">
              Testimonials
            </h2>
            <p className="text-gray-500 text-sm">
              What Our Employees Say
            </p>
          </div>

          <button
            onClick={() => navigate("/careers")}
            className="text-blue-500 text-sm hover:underline"
          >
            Join Us →
          </button>

        </div>

        {/* 🔥 SLIDER */}
        <div className="overflow-hidden">

          <div className="flex gap-6 animate-scroll hover:[animation-play-state:paused]">

            {/* 🔥 DUPLICATE FOR LOOP */}
            {[...testimonials, ...testimonials].map((item, i) => (

              <div
                key={i}
                className="min-w-[300px] bg-white border border-gray-200 rounded-lg p-6 
                           hover:shadow-lg transition"
              >

                {/* TEXT */}
                <p className="text-gray-600 text-sm italic mb-4">
                  "{item.text}"
                </p>

                {/* USER */}
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {item.role}
                  </p>
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;