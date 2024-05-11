const Job = require("../../models/job");

module.exports = {
  getAllForUser,
  create,
};

async function getAllForUser(req, res) {
  const jobs = await Job.find({ poster: req.user._id });
  res.json(jobs);
}

async function create(req, res) {
  req.body.poster = req.user._id;
  const job = await Job.create(req.body);
  res.json(job);
}
