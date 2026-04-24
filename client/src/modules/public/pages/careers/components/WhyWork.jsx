import { TrendingUp, BookOpen, Scale } from "lucide-react";

const data = [
  {
    title: "Growth Opportunities",
    desc: "We provide continuous learning and career growth opportunities for all employees.",
    icon: <TrendingUp className="text-orange-500" size={24} />,
  },
  {
    title: "Learning Environment",
    desc: "Work with experienced professionals and enhance your skills every day.",
    icon: <BookOpen className="text-green-500" size={24} />,
  },
  {
    title: "Work-Life Balance",
    desc: "We believe in maintaining a healthy balance between work and personal life.",
    icon: <Scale className="text-pink-500" size={24} />,
  },
];

const WhyWork = () => {
  return (
    <div className="bg-gray-50 py-16 px-6 md:px-16">

      {/* TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-10">
        Why Work With Us
      </h2>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg p-6 
                       hover:shadow-md transition duration-300"
          >

            {/* ICON */}
            <div className="mb-4">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="font-semibold text-gray-800 text-lg">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-500 text-sm mt-2 leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default WhyWork;