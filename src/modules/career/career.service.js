const Job = require("./job.model");
const Application = require("./application.model");

// JOBS
const createJob = async (data) => {
  return await Job.create(data);
};

const getAllJobs = async () => {
  return await Job.find({ status: "open" }).sort({ createdAt: -1 });
};

const getJobBySlug = async (slug) => {
  return await Job.findOne({ slug });
};

const getAllJobsAdmin = async () => {
  return await Job.find().sort({ createdAt: -1 });
};

const updateJob = async (id, data) => {
  return await Job.findByIdAndUpdate(id, data, { new: true });
};

const deleteJob = async (id) => {
  return await Job.findByIdAndDelete(id);
};

// APPLICATION
const applyJob = async (data) => {
  return await Application.create(data);
};

const getApplications = async () => {
  return await Application.find().populate("jobId").sort({ createdAt: -1 });
};

const getApplicationsCountByJob = async () => {
  return await Application.aggregate([
    {
      $group: {
        _id: "$jobId",
        count: { $sum: 1 }
      }
    },
    {
      $lookup: {
        from: "jobs",
        localField: "_id",
        foreignField: "_id",
        as: "job"
      }
    },
    {
      $unwind: "$job"
    },
    {
      $project: {
        jobId: "$_id",
        count: 1,
        jobTitle: "$job.title"
      }
    }
  ]);
};

module.exports = {
  createJob,
  getAllJobs,
  getJobBySlug,
  getAllJobsAdmin,
  updateJob,
  deleteJob,
  applyJob,
  getApplications,
  getApplicationsCountByJob
};