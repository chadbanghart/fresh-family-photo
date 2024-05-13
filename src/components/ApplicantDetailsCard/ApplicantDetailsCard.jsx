import { useEffect, useState } from "react";
import * as jobsAPI from "../../utilities/jobs-api";

export default function ApplicantDetailsCard({ job, applicantId }) {
  const [applicantDetails, setApplicantDetails] = useState(null);
  const [viewApplicant, setViewApplicant] = useState(false);

  useEffect(() => {
    async function fetchApplicantDetails() {
      const data = await jobsAPI.getAppDetails(applicantId);
      setApplicantDetails(data);
    }
    fetchApplicantDetails();
  }, [applicantId]);

  return (
    <div className="poster-job-card">
      {viewApplicant ? (
        <>
          <h6>Applicant Details</h6>
          <button onClick={() => setViewApplicant(false)}>
            Back to Applicant List
          </button>
          <ul>
            <li>{applicantDetails}</li>
          </ul>
        </>
      ) : (
        <>
          <h6>Applicants List</h6>
          <ul>
            {job && job.applications ? (
              job.applications.map((app, index) => (
                <li key={index}>
                  <button onClick={() => setViewApplicant(true)}>
                    Applicant ID: {app.applicant}
                  </button>
                </li>
              ))
            ) : (
              <p>No applications found.</p>
            )}
          </ul>
        </>
      )}
    </div>
  );
}
