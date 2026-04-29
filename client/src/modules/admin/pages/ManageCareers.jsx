import { useEffect, useState } from "react";
import { Briefcase, CheckCircle2, Clock, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import JobForm from "../../admin/components/JobForm";
import JobTable from "../../admin/components/JobTable";

import {
  getAdminJobs,
  createJob,
  updateJob,
  deleteJob,
  getApplicationsCountByJob,
} from "../../../services/careerService";


const AdminJobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [applicationsCount, setApplicationsCount] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

 const navigate = useNavigate();

  // fetch jobs
  const fetchJobs = async () => {
    const res = await getAdminJobs();
    setJobs(res.data);
  };

  // fetch applications count
  const fetchApplicationsCount = async () => {
    try {
      const res = await getApplicationsCountByJob();
      setApplicationsCount(res.data);
    } catch (error) {
      console.error('Error fetching applications count:', error);
    }
  };

  useEffect(() => {
    fetchJobs();
    fetchApplicationsCount();
  }, []);

  // debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // filtered jobs
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  // stats
  const totalJobs = jobs.length;
  const openJobs = jobs.filter((j) => j.status === "open").length;
  const closedJobs = jobs.filter((j) => j.status === "closed").length;

  const statsData = [
    { label: "Total Jobs", value: totalJobs, icon: Briefcase, color: "bg-blue-600", bg: "bg-blue-50" },
    { label: "Open Jobs", value: openJobs, icon: CheckCircle2, color: "bg-green-600", bg: "bg-green-50" },
    { label: "Closed Jobs", value: closedJobs, icon: Clock, color: "bg-red-600", bg: "bg-red-50" },
  ];

  // create / update
  const handleSubmit = async (data) => {
    if (selectedJob) {
      await updateJob(selectedJob._id, data);
    } else {
      await createJob(data);
    }

    setSelectedJob(null);
    setShowForm(false);
    fetchJobs();
  };



  // delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this job?")) return;
    await deleteJob(id);
    fetchJobs();
  };

  // get applications count for a job
  const getApplicationsCountForJob = (jobId) => {
    const countData = applicationsCount.find(count => count.jobId === jobId);
    return countData ? countData.count : 0;
  };

  // handle view applications
  // const handleViewApplications = (job) => {
  //   // Navigate to applications page with job filter
  //   window.location.href = `/admin/applications?job=${job._id}`;
  // };

  const handleViewApplications = (job) => {
  navigate(`/admin/applications?job=${job._id}`);
};

   const handleEdit = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  return (
    <div className="max-w-7xl mx-auto py-6 space-y-8 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-corporate-navy tracking-tight">Manage Careers</h1>
          <p className="text-gray-500 mt-2 max-w-2xl">Create, update and monitor job positions using a clean admin layout consistent with blogs and news.</p>
        </div>

        <button
          onClick={() => {
            setSelectedJob(null);
            setShowForm(true);
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg shadow"
        >
          + Add Job
        </button>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="relative w-full lg:w-1/2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-corporate-orange/20 focus:border-corporate-orange outline-none transition-all text-sm"
          />
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {statsData.map((card) => (
          <div key={card.label} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div className={`${card.bg} p-3 rounded-2xl`}>
                <card.icon size={20} className={card.color.replace('bg-', 'text-')} />
              </div>
              <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">{card.label}</p>
            </div>
            <h2 className="text-3xl font-bold text-corporate-navy mt-5">{card.value}</h2>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">

          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden">

            {/* HEADER */}
            <div className="flex justify-between items-center px-6 py-4 border-b bg-gray-50">
              <h2 className="font-semibold text-lg">
                {selectedJob ? "Edit Job" : "Create Job"}
              </h2>

              <button
                onClick={() => setShowForm(false)}
                className="text-xl font-bold text-gray-500 hover:text-black"
              >
                ×
              </button>
            </div>

            {/* FORM */}
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              <JobForm
                onSubmit={handleSubmit}
                selectedJob={selectedJob}
                clearEdit={() => setSelectedJob(null)}
              />
            </div>

          </div>
        </div>
      )}

      {/* TABLE */}
      <JobTable
        jobs={filteredJobs}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onViewApplications={handleViewApplications}
        getApplicationsCount={getApplicationsCountForJob}
      />

    </div>
  );
};

export default AdminJobsPage;