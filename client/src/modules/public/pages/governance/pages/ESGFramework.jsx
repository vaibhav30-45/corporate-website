import { useSelector } from "react-redux";
import ESGCard from "../components/ESGCard";

const ESGFramework = () => {
  const { esgData } = useSelector((state) => state.governance);

  return (
    <div className="container">
      <h2 className="section-title">ESG Framework</h2>

      <div className="grid">
        {esgData.map((item) => (
          <ESGCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ESGFramework;