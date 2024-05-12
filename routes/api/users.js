const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/users");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

// All paths start with '/api/users'

// GET /api/users (get user for profile page)
router.get("/:id", ensureLoggedIn, usersCtrl.profile);
// POST /api/users (create/sign-up a user)
router.post("/", usersCtrl.create);
// POST /api/users/login (login a user)
router.post("/login", usersCtrl.login);

module.exports = router;
