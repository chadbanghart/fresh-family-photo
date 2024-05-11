import { useEffect, useState } from "react";
import * as jobsAPI from "../../utilities/jobs-api";
import CreateEventForm from "../../components/CreateEventForm/CreateEventForm";
import JobCard from "../../components/JobCard/JobCard";
import "./MyJobsPage.css";

export default function MyJobsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(function () {
    async function getJobs() {
      const jobs = await jobsAPI.getAllJobsForUser();
      setJobs(jobs);
    }
    getJobs();
  }, []);

  async function handleAddEvent(eventData) {
    const job = await jobsAPI.add(eventData);
    setJobs([...jobs, job]);
  }

  async function handleJobUpdate(jobId, updatedJob) {
    const updated = await jobsAPI.updateJob(jobId, updatedJob);
    setJobs(jobs.map((job) => (job._id === jobId ? updated : job)));
  }

  return (
    <>
      <h1>My Jobs</h1>
      {jobs.length ? (
        <div className="job-grid">
          {jobs.map((job) => (
            <JobCard
              job={job}
              key={job._id}
              handleJobUpdate={handleJobUpdate}
            />
          ))}
        </div>
      ) : (
        <p>You don't have any jobs posted yet!</p>
      )}
      <CreateEventForm handleAddEvent={handleAddEvent} />
    </>
  );
}
