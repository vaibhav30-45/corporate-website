import { useSelector, useDispatch } from "react-redux";
import JobCard from "./JobCard";
import { setPage } from "../../../../../redux/slices/careerSlice";

const JobList = () => {
  const dispatch = useDispatch();

  const { filteredJobs, currentPage, jobsPerPage } = useSelector(
    (state) => state.career
  );

  const indexOfLast = currentPage * jobsPerPage;
  const indexOfFirst = indexOfLast - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <div>

      {/* JOB CARDS */}
      <div className="mt-6">
        {currentJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => dispatch(setPage(i + 1))}
              className={`px-4 py-2 rounded border transition 
                ${
                  currentPage === i + 1
                    ? "bg-orange-500 text-white border-orange-500"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
            >
              {i + 1}
            </button>
          ))}

        </div>
      )}
    </div>
  );
};

export default JobList;