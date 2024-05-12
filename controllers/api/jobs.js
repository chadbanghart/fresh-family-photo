const Job = require("../../models/job");
const User = require("../../models/user");

module.exports = {
  getAllJobsForUser,
  getAllJobsForBoard,
  getJobForApplication,
  getAppDetails,
  create,
  update,
  submitApp,
};

async function getAppDetails(req, res) {
  const { applicantId } = req.params;
  const applicant = await User.findById(applicantId);
  res.json(applicant);
}

async function submitApp(req, res) {
  const job = await Job.findById(req.params.id);
  const application = {
    applicant: req.user._id,
    resume: req.body.resume,
    pitch: req.body.pitch,
  };

  job.applications.push(application);
  await job.save();
  res.json(application);
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
  const jobs = await Job.find({});
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
