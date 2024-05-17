import { useEffect, useState } from "react";
import "./PosterJobDetailsCard.css";

export default function PosterJobDetailsCard({ job, handleJobUpdate }) {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...job });

  useEffect(() => {
    const formattedDate = job.date
      ? new Date(job.date).toISOString().split("T")[0]
      : "";
    setFormData({ ...job, date: formattedDate });
  }, [job]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "date") {
      const adjustedDate = new Date(value + "T00:00:00Z")
        .toISOString()
        .split("T")[0];
      setFormData((prev) => ({ ...prev, [name]: adjustedDate }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await handleJobUpdate(job._id, formData);
    setEditMode(false);
  };

  return (
    <>
      <div className="poster-job-card">
        {editMode ? (
          <form className="edit-form-container" onSubmit={handleSubmit}>
            <label>Job: </label>
            <input
              type="text"
              name="jobName"
              value={formData.jobName}
              onChange={handleChange}
            />

            <label>Date: </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />

            <label>Location: </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />

            <label>Description: </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>

            <div className="button-container">
              <button type="submit">Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </form>
        ) : (
          <>
            <h3>Job: {job.jobName}</h3>
            <p>
              <strong>Date: </strong>
              {new Date(job.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Location: </strong>
              {job.location}
            </p>
            <p>
              <strong>Description: </strong>
              {job.description}
            </p>
            <div className="button-container">
              <button onClick={() => setEditMode(true)}>Edit</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
