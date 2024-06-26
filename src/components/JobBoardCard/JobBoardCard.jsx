import { useNavigate } from "react-router-dom";
import "./JobBoardCard.css";

export default function JobBoardCard({ job }) {
  const navigate = useNavigate();

  function handleRedirect() {
    navigate(`/application/${job._id}`);
  }

  return (
    <div className="job-board-card">
      <div className="job-details">
        <h3>Job: {job.jobName}</h3>
        <p>Date: {new Date(job.date).toLocaleDateString()}</p>
        <p>Location: {job.location}</p>
        <p>Description: {job.description}</p>
      </div>
      <div className="button-container">
        <button className="board-button" onClick={handleRedirect}>
          Apply
        </button>
      </div>
    </div>
  );
}
