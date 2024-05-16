import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as jobsAPI from "../../utilities/jobs-api";
import JobApplicationForm from "../../components/JobApplicationForm/JobApplicationForm";

export default function JobApplicationPage({ handleApplication }) {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchJob() {
      const fetchedJob = await jobsAPI.getJobForApplication(jobId);
      setJob(fetchedJob);
    }
    fetchJob();
  }, [jobId]);

  function handleReturn() {
    navigate("/board");
  }

  return (
    <>
      <h1>Apply For: {job?.jobName}</h1>
      <button onClick={handleReturn}>Go Back to Job Board</button>
      <JobApplicationForm
        job={job}
        handleApplication={() => handleApplication(jobId)}
      />
    </>
  );
}
