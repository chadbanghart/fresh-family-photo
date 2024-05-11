import "./JobCard.css";

export default function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>Job: {job.jobName}</h3>
      <p>Date: {new Date(job.date).toLocaleDateString()}</p>
      <p>Location: {job.location}</p>
      <p>Description: {job.description}</p>
    </div>
  );
}
