const Job = require("../../models/job");
const User = require("../../models/user");
const uploadFile = require("../../config/upload-file");

module.exports = {
  getAllJobsForUser,
  getJobDetails,
  getAllJobsForBoard,
  getJobForApplication,
  getAppDetails,
  create,
  update,
  submitApp,
};

async function getJobDetails(req, res) {
  try {
    const { jobId } = req.params;
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).send("Job not found");
    }
    res.json(job);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}

async function getAppDetails(req, res) {
  const { applicantId } = req.params;
  const applicant = await User.findById(applicantId)
    .populate("photographerProfile")
    .exec();
  res.json(applicant);
}

async function submitApp(req, res) {
  try {
    const { id } = req.params; // job ID
    if (req.file) {
      console.log(req.file);

      const resumeUrl = await uploadFile(req.file);
      const { pitch } = req.body; // pitch text from form

      const job = await Job.findById(id);
      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }

      const application = {
        applicant: req.user._id,
        resume: resumeUrl,
        pitch,
      };

      job.applications.push(application);
      await job.save();

      res.json(application);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getJobForApplication(req, res) {
  const job = await Job.findById(req.params.id);
  res.json(job);
}

async function getAllJobsForUser(req, res) {
  const jobs = await Job.find({ poster: req.user._id });
  res.json(jobs);
}

async function getAllJobsForBoard(req, res) {
  const userId = req.user._id;
  const jobs = await Job.find({}).sort("date").exec();
  jobs.forEach((job) => {
    job.hasApplied = job.applications.some(
      (app) => app.applicant.toString() === userId.toString()
    );
  });
  res.json(jobs);
}

async function create(req, res) {
  req.body.poster = req.user._id;
  const job = await Job.create(req.body);
  res.json(job);
}

async function update(req, res) {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.send(job);
}
