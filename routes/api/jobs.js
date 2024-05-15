const express = require("express");
const router = express.Router();
const jobsCtrl = require("../../controllers/api/jobs");
const ensureLoggedIn = require("../../config/ensureLoggedIn");
const upload = require("multer")();

// All paths start with /api/jobs

// GET /api/jobs/myjobs (get all jobs posted by poster)
router.get("/myjobs", ensureLoggedIn, jobsCtrl.getAllJobsForUser);
// GET /api/jobs/job/:jobId
router.get("/job/:jobId", ensureLoggedIn, jobsCtrl.getJobDetails);
// GET /api/jobs/board (get all jobs for job board)
router.get("/board", jobsCtrl.getAllJobsForBoard);
// GET /api/jobs/application/:id (get job for application)
router.get("/application/:id", jobsCtrl.getJobForApplication);
// GET /api/jobs/applicants/:applicantId (get applicant detials)
router.get("/applicants/:applicantId", jobsCtrl.getAppDetails);
// POST /api/jobs (create job)
router.post("/", jobsCtrl.create);
// POST /api/jobs/application/:id (submit application)
router.post(
  "/application/:id",
  ensureLoggedIn,
  upload.single("resume"),
  jobsCtrl.submitApp
);
// PUT /api/jobs/:id
router.put("/:id", jobsCtrl.update);

module.exports = router;
