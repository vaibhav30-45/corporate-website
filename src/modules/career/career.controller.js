const service = require("./career.service");

// JOB CREATE
exports.createJob = async (req, res) => {
  try {
    const job = await service.createJob(req.body);
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PUBLIC JOBS
exports.getJobs = async (req, res) => {
  const jobs = await service.getAllJobs();
  res.json(jobs);
};

// JOB DETAIL
exports.getJob = async (req, res) => {
  const job = await service.getJobBySlug(req.params.slug);
  res.json(job);
};

// ADMIN JOBS
exports.getJobsAdmin = async (req, res) => {
  const jobs = await service.getAllJobsAdmin();
  res.json(jobs);
};

// UPDATE
exports.updateJob = async (req, res) => {
  const job = await service.updateJob(req.params.id, req.body);
  res.json(job);
};

// DELETE
exports.deleteJob = async (req, res) => {
  await service.deleteJob(req.params.id);
  res.json({ message: "Deleted" });
};

// APPLY
exports.apply = async (req, res) => {
  try {
    const data = req.body;

    if (req.file) {
      data.resume = `/uploads/${req.file.filename}`;
    }

    const app = await service.applyJob(data);
    res.status(201).json(app);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ADMIN APPLICATIONS
exports.getApplications = async (req, res) => {
  const apps = await service.getApplications();
  res.json(apps);
};

// ADMIN APPLICATIONS COUNT BY JOB
exports.getApplicationsCountByJob = async (req, res) => {
  const counts = await service.getApplicationsCountByJob();
  res.json(counts);
};