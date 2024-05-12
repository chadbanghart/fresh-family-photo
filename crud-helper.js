// Connect to the database
require("dotenv").config();
require("./config/database");

// Require the Mongoose models
const User = require("./models/user");
const Job = require("./models/job");
const Poster = require("./models/posterProfile");
const Photo = require("./models/photoProfile");

// Local variables will come in handy for holding retrieved documents
let user, job, poster, photo;
let users, jobs, posters, photos;
