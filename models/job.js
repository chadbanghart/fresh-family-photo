const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
  applicant: {
    type: Schema.Types.ObjectId,
    ref: "Photographer",
  },
  resume: { type: String },
  pitch: { type: String },
});

const jobSchema = new Schema({
  jobName: { type: String },
  date: { type: Date },
  location: { type: String },
  description: { type: String },
  poster: {
    type: Schema.Types.ObjectId,
    ref: "Poster",
  },
  Applications: [applicationSchema],
});

module.exports = mongoose.model("Job", jobSchema);
