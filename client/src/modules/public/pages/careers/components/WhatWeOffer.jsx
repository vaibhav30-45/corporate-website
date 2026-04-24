import { TrendingUp, BookOpen, Scale } from "lucide-react";

const data = [
  {
    title: "Career Growth",
    desc: "Opportunities for growth and advancement.",
    icon: <TrendingUp className="text-orange-500" size={22} />,
  },
  {
    title: "Learning Development",
    desc: "Continuous learning through workshops and courses.",
    icon: <BookOpen className="text-green-500" size={22} />,
  },
  {
    title: "Work-Life Balance",
    desc: "Flexible work options and healthy environment.",
    icon: <Scale className="text-pink-500" size={22} />,
  },
];

const WhatWeOffer = () => {
  return (
    <div className="px-6 md:px-16 py-12">
      <h2 className="text-2xl font-bold text-orange-500 mb-6">
        What We Offer
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg p-6 
                       hover:shadow-md transition"
          >
            <div className="mb-3">{item.icon}</div>

            <h3 className="font-semibold">{item.title}</h3>

            <p className="text-sm text-gray-500 mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;