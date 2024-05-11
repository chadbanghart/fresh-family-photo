import { useState, useEffect } from "react";
import * as jobsAPI from "../../utilities/jobs-api";
import JobBoardCard from "../../components/JobBoardCard/JobBoardCard";
import "./JobBoardPage.css";

export default function JobBoardPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(function () {
    async function getJobs() {
      const jobs = await jobsAPI.getAllJobsForBoard();
      setJobs(jobs);
    }
    getJobs();
  }, []);

  return (
    <>
      <h1>Job Board</h1>
      {jobs.length ? (
        <div className="job-board-container">
          {jobs.map((job) => (
            <JobBoardCard job={job} key={job._id} />
          ))}
        </div>
      ) : (
        <p>There aren't any Jobs available at the moment!</p>
      )}
    </>
  );
}
