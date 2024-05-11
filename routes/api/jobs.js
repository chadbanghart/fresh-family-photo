const express = require("express");
const router = express.Router();
const jobsCtrl = require("../../controllers/api/jobs");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// All paths start with /api/jobs

// GET /api/jobs (get all jobs posted)
router.get("/", ensureLoggedIn, jobsCtrl.getAllForUser);
// POST /api/jobs (create job)
router.post("/", jobsCtrl.create);
// PUT /api/jobs/:id
router.put("/:id", jobsCtrl.update);

module.exports = router;
