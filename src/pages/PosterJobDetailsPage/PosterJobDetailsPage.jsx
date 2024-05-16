import { useEffect, useState } from "react";
import PosterJobDetailsCard from "../../components/PosterJobDetailsCard/PosterJobDetailsCard";
import * as jobsAPI from "../../utilities/jobs-api";
import { Link, useParams } from "react-router-dom";
import ApplicantDetailsCard from "../../components/ApplicantDetailsCard/ApplicantDetailsCard";
import "./PosterJobDetailsPage.css";

export default function PosterJobDetailsPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(
    function () {
      async function getJob() {
        const job = await jobsAPI.getJobForDetailsPage(jobId);
        setJob(job);
      }
      getJob();
    },
    [jobId]
  );

  if (!job) return null;

  async function loadApplicant(appId) {
    const app = await jobsAPI.getAppDetails(appId);
    return app;
  }

  async function handleJobUpdate(jobId, updatedJob) {
    const updated = await jobsAPI.updateJob(jobId, updatedJob);
    setJob((job) => (job._id === jobId ? updated : job));
  }

  return (
    <>
      <Link to={"/jobs"}>Go Back to My Jobs</Link>
      <div className="job-grid-details">
        <PosterJobDetailsCard job={job} handleJobUpdate={handleJobUpdate} />
        <ApplicantDetailsCard job={job} loadApplicant={loadApplicant} />
      </div>
    </>
  );
}
