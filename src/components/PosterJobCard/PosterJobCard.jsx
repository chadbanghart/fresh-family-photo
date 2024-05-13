import "./PosterJobCard.css";
import { Link } from "react-router-dom";

export default function PosterJobCard({ job }) {
  return (
    <div className="poster-job-card">
      <>
        <h3>Job: {job.jobName}</h3>
        <p>Date: {new Date(job.date).toLocaleDateString()}</p>
        <p>Location: {job.location}</p>
        <p>Description: {job.description}</p>
        <p>
          Job Details:
          <Link to={`/jobs/${job._id}`}> View Job Details</Link>
        </p>
      </>
    </div>
  );
}
