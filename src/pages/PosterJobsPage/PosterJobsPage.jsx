import { useEffect, useState } from "react";
import * as jobsAPI from "../../utilities/jobs-api";
import CreateEventForm from "../../components/CreateEventForm/CreateEventForm";
import PosterJobCard from "../../components/PosterJobCard/PosterJobCard";
import "./PosterJobsPage.css";

export default function MyJobsPage({ user }) {
  const [jobs, setJobs] = useState([]);

  useEffect(function () {
    async function getJobs() {
      const jobs = await jobsAPI.getAllJobsForUser();
      setJobs(jobs);
    }
    getJobs();
  }, []);

  if (!user.isPoster) return null;

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
            <PosterJobCard
              job={job}
              key={job._id}
              handleJobUpdate={handleJobUpdate}
            />
          ))}
        </div>
      ) : (
        <p>You don't have any jobs posted yet!</p>
      )}
      <div>
        <CreateEventForm handleAddEvent={handleAddEvent} />
      </div>
    </>
  );
}
