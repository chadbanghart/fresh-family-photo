import { useState } from "react";
import "./ApplicantDetailsCard.css";

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
        phone: applicantDetails.photographerProfile.phone,
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
          <h2>Applicant Details</h2>
          <div>
            <button onClick={() => setViewApplicant(false)}>
              Back to Applicant List
            </button>
          </div>
          <div className="profile-card-app">
            <h3>
              <strong>Name: </strong>
              {currentApplicant.name}
            </h3>

            <img src={currentApplicant.photoURL} alt="Applicant Profile" />
            <p>
              <strong>Email: </strong>
              {currentApplicant.email}
            </p>
            <p>
              <strong>Phone #: </strong>
              {currentApplicant.phone}
            </p>
            <p>
              <strong>Pitch: </strong>
              {currentApplicant.pitch}
            </p>
            <p>
              <strong>Resume: </strong>
              <a href={currentApplicant.resume} download="ApplicantResume.pdf">
                Download Resume
              </a>
            </p>
          </div>
        </>
      ) : (
        <>
          <h2>Applicants List</h2>
          {job.applications.length ? (
            <div className="list-container">
              {job?.applications.map((app, index) => (
                <button
                  key={index}
                  onClick={() => handleApplicantClick(app.applicant)}
                >
                  Applicant #{index + 1}
                </button>
              ))}
            </div>
          ) : (
            <>
              <p>You dont have any applicants yet!</p>
            </>
          )}
        </>
      )}
    </div>
  );
}
