import { useDispatch, useSelector } from "react-redux";
import { setFilter, clearFilter } from "../../../../../redux/slices/careerSlice";

const JobFilter = () => {
  const dispatch = useDispatch();
  const { jobs, filters } = useSelector((state) => state.career);

  // UNIQUE VALUES
  const locations = [...new Set(jobs.map((j) => j.location))];
  const departments = [...new Set(jobs.map((j) => j.department))];
  const types = [...new Set(jobs.map((j) => j.type))];

  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">

      {/* LOCATION */}
      <select
        value={filters.location}
        onChange={(e) =>
          dispatch(setFilter({ key: "location", value: e.target.value }))
        }
        className="border px-4 py-2 rounded text-gray-600"
      >
        <option value="">Location</option>
        {locations.map((loc, i) => (
          <option key={i} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      {/* DEPARTMENT */}
      <select
        value={filters.department}
        onChange={(e) =>
          dispatch(setFilter({ key: "department", value: e.target.value }))
        }
        className="border px-4 py-2 rounded text-gray-600"
      >
        <option value="">Department</option>
        {departments.map((dep, i) => (
          <option key={i} value={dep}>
            {dep}
          </option>
        ))}
      </select>

      {/* JOB TYPE */}
      <select
        value={filters.type}
        onChange={(e) =>
          dispatch(setFilter({ key: "type", value: e.target.value }))
        }
        className="border px-4 py-2 rounded text-gray-600"
      >
        <option value="">Job Type</option>
        {types.map((type, i) => (
          <option key={i} value={type}>
            {type}
          </option>
        ))}
      </select>

      {/* CLEAR */}
      <button
        onClick={() => dispatch(clearFilter())}
        className="text-orange-500 font-medium ml-auto"
      >
        ✕ Clear Filter
      </button>

    </div>
  );
};

export default JobFilter;