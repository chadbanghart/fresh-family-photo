import { useEffect, useState } from "react";
import PosterJobDetailsCard from "../../components/PosterJobDetailsCard/PosterJobDetailsCard";
import * as jobsAPI from "../../utilities/jobs-api";
import { useParams } from "react-router-dom";

export default function PosterJobDetailsPage() {
  const { jobId } = useParams();
  const [job, setJob] = useState([]);

  useEffect(function () {
    async function getJob() {
      const job = await jobsAPI.getJobForDetailsPage(jobId);
      setJob(job);
    }
    getJob();
  }, []);

  async function handleJobUpdate(jobId, updatedJob) {
    const updated = await jobsAPI.updateJob(jobId, updatedJob);
    setJob((job) => (job._id === jobId ? updated : job));
  }
  return (
    <>
      <PosterJobDetailsCard job={job} handleJobUpdate={handleJobUpdate} />
    </>
  );
}
