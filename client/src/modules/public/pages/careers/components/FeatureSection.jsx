import { Users, Lightbulb, HeartHandshake } from "lucide-react";

const data = [
  {
    icon: <Users className="text-orange-500" size={26} />,
    title: "Collaborative Culture",
    desc: "Work with talented professionals in a supportive environment.",
  },
  {
    icon: <Lightbulb className="text-green-500" size={26} />,
    title: "Innovation First",
    desc: "We encourage new ideas and creative thinking.",
  },
  {
    icon: <HeartHandshake className="text-pink-500" size={26} />,
    title: "Employee Wellbeing",
    desc: "We prioritize mental health and work-life balance.",
  },
];

const FeatureSection = () => {
  return (
    <div className="px-6 md:px-16 py-12 bg-white">

      <h2 className="text-2xl font-bold text-orange-500 mb-8">
        What Makes Us Different
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {data.map((item, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition"
          >
            <div className="mb-3">{item.icon}</div>

            <h3 className="font-semibold text-lg">{item.title}</h3>

            <p className="text-sm text-gray-500 mt-2">
              {item.desc}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default FeatureSection;