import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import * as jobsAPI from "../../utilities/jobs-api";

export default function JobApplicationForm({ job, handleApplication }) {
  const [pitch, setPitch] = useState("");
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  async function handleSubmit(evt) {
    evt.preventDefault();

    if (!fileInputRef.current.files[0]) {
      alert("Please upload a resume file.");
      return;
    }

    const formData = new FormData();
    formData.append("resume", fileInputRef.current.files[0]);
    formData.append("pitch", pitch);

    try {
      const res = await jobsAPI.addApp(job._id, formData);
      if (res) {
        handleApplication();
        navigate("/board");
      }
    } catch (error) {
      console.error("Failed to submit application:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Upload your resume (PDF only):</label>
      <input
        type="file"
        ref={fileInputRef}
        name="resume"
        accept=".pdf"
        required
      />
      <label>Why are you the right person for the job?</label>
      <textarea
        name="pitch"
        onChange={(e) => setPitch(e.target.value)}
        value={pitch}
      ></textarea>
      <button type="submit">Submit Application</button>
    </form>
  );
}
