import { useState } from "react";

export default function ApplicantDetailsCard({ job, loadApplicant }) {
  const [viewApplicant, setViewApplicant] = useState(false);
  const [currentApplicant, setCurrentApplicant] = useState(null);

  async function handleApplicantClick(appId) {
    const applicantDetails = await loadApplicant(appId);
    const specificApplication = job.applications.find(
      (app) => app.applicant === appId
    );

    if (applicantDetails && specificApplication) {
      setCurrentApplicant({
        ...applicantDetails,
        photoURL: applicantDetails.photographerProfile.photoURL,
        pitch: specificApplication.pitch,
        resume: specificApplication.resume,
      });
      setViewApplicant(true);
    } else {
      console.error("No data returned for applicant with ID:", appId);
    }
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
            <li>
              Photo:{" "}
              <img src={currentApplicant.photoURL} alt="Applicant Profile" />
            </li>
            <li>Pitch: {currentApplicant.pitch}</li>
            <li>
              Resume:{" "}
              <a href={currentApplicant.resume} download="ApplicantResume.pdf">
                Download Resume
              </a>
            </li>
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
