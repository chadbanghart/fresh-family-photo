import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as jobsAPI from "../../utilities/jobs-api";

export default function ApplicantDetailsPage() {
  const { applicantId } = useParams();
  const [applicantDetails, setApplicantDetails] = useState(null);

  useEffect(() => {
    async function fetchApplicantDetails() {
      const data = await jobsAPI.getAppDetails(applicantId);
      setApplicantDetails(data);
    }
    fetchApplicantDetails();
  }, [applicantId]);

  return (
    <>
      <div>
        {applicantDetails ? (
          <div>
            <h1>{applicantDetails.name}</h1>
            <img src={applicantDetails.photoUrl} alt="Profile" />
            <p>Email: {applicantDetails.email}</p>
            <p>
              Resume Link:{" "}
              <a
                href={applicantDetails.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </p>
            <p>Pitch: {applicantDetails.pitch}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
