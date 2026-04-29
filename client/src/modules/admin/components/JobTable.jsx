import { useState } from "react";
import { Pencil, Trash2, Eye } from "lucide-react";

const JobTable = ({ jobs = [], onEdit, onDelete, onViewApplications, getApplicationsCount }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // pagination logic
  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
  <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">

    {/* TABLE */}
    <div className="overflow-x-auto">
      <table className="w-full text-sm">

        <thead className="bg-gray-100 text-xs uppercase text-gray-600">
          <tr>
            <th className="p-4 text-left">Title</th>
            <th className="p-4">Location</th>
            <th className="p-4">Type</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-center">Applications</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {currentJobs.length > 0 ? (
            currentJobs.map((job) => (
              <tr
                key={job._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4 font-medium">{job.title}</td>
                <td className="p-4">{job.location}</td>
                <td className="p-4">{job.type}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      job.status === "open"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>

                <td className="p-4 text-center">
                  <button
                    onClick={() => onViewApplications(job)}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                  >
                    <Eye size={14} />
                    {getApplicationsCount(job._id)}
                  </button>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={() => onEdit(job)}
                      className="p-2 rounded-md hover:bg-blue-50 transition"
                    >
                      <Pencil size={16} className="text-blue-600" />
                    </button>

                    <button
                      onClick={() => onDelete(job._id)}
                      className="p-2 rounded-md hover:bg-red-50 transition"
                    >
                      <Trash2 size={16} className="text-red-500" />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="6"
                className="text-center p-6 text-gray-500"
              >
                No jobs found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div> 

    {/* PAGINATION */}
    {jobs.length > itemsPerPage && (
      <div className="flex justify-center items-center gap-2 p-4 border-t">

        <button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => goToPage(i + 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === i + 1
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>

      </div>
    )}


  </div>
);
};


export default JobTable;