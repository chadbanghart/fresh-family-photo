import { useState } from "react";

export default function ApplicantDetailsCard({ job, loadApplicant }) {
  const [viewApplicant, setViewApplicant] = useState(false);
  const [currentApplicant, setCurrentApplicant] = useState(null);

  async function handleApplicantClick(appId) {
    const app = await loadApplicant(appId);
    setCurrentApplicant(app);
    setViewApplicant(true);
  }

  return (
    <div className="poster-job-card">
      {viewApplicant && currentApplicant ? (
        <>
          <h6>Applicant Details</h6>
          <button onClick={() => setViewApplicant(false)}>
            Back to Applicant List
          </button>
          <ul>
            <li>Name: {currentApplicant.name}</li>
            <li>Email: {currentApplicant.email}</li>
          </ul>
        </>
      ) : (
        <>
          <h6>Applicants List</h6>
          <ul>
            {job?.applications.map((app, index) => (
              <li key={index}>
                <button onClick={() => handleApplicantClick(app.applicant)}>
                  Applicant #{index + 1}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
