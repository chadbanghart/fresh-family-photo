import "./JobBoardCard.css";

export default function JobBoardCard({ job }) {
  return (
    <div className="job-board-card">
      <h3>Job: {job.jobName}</h3>
      <p>Date: {new Date(job.date).toLocaleDateString()}</p>
      <p>Location: {job.location}</p>
      <p>Description: {job.description}</p>
      <div className="button-container">
        <button className="board-button">Apply</button>
      </div>
    </div>
  );
}
