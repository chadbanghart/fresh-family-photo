import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as jobsAPI from "../../utilities/jobs-api";

export default function JobApplicationForm({ job, handleApplication }) {
  const [applicant, setApplicant] = useState({
    resume: "",
    pitch: "",
  });
  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setApplicant((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const submitApp = async () => {
      const res = await jobsAPI.addApp(job._id, applicant);
      if (res) {
        setApplicant({ resume: "", pitch: "" });
        handleApplication();
        navigate("/board");
      }
    };
    submitApp();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Please provide a https:// URL to your resume </label>
        <input
          type="url"
          name="resume"
          placeholder="https://example.com"
          pattern="https://.*"
          size="30"
          onChange={handleChange}
          value={applicant.resume}
          required
        />
        <label>Why are you the right person for the job?</label>
        <textarea
          name="pitch"
          onChange={handleChange}
          value={applicant.pitch}
        ></textarea>
        <button type="submit">Submit Application</button>
      </form>
    </>
  );
}
