import { useSelector } from "react-redux";
import PolicyItem from "../components/PolicyItem";

const Policies = () => {
  const { policies } = useSelector((state) => state.governance);

  return (
    <div className="container">
      <h2 className="section-title">Policies</h2>

      <ul className="list">
        {policies.map((p) => (
          <PolicyItem key={p.id} {...p} />
        ))}
      </ul>
    </div>
  );
};

export default Policies;