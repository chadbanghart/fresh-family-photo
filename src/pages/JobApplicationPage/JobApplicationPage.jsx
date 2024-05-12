import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as jobsAPI from "../../utilities/jobs-api";
import JobApplicationForm from "../../components/JobApplicationForm/JobApplicationForm";

export default function JobApplicationPage({ handleApplication }) {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    async function fetchJob() {
      const fetchedJob = await jobsAPI.getJobForApplication(jobId);
      setJob(fetchedJob);
    }
    fetchJob();
  }, [jobId]);
  return (
    <>
      <h1>Apply For: {job?.jobName}</h1>
      <JobApplicationForm
        job={job}
        handleApplication={() => handleApplication(jobId)}
      />
    </>
  );
}
