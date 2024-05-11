const Job = require("../../models/job");

module.exports = {
  getAllForUser,
  getAllJobsForBoard,
  create,
  update,
};

async function getAllForUser(req, res) {
  const jobs = await Job.find({ poster: req.user._id });
  res.json(jobs);
}

async function getAllJobsForBoard(req, res) {
  const jobs = await Job.find({});
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
