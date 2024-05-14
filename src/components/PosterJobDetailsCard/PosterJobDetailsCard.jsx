import { useEffect, useState } from "react";

export default function PosterJobDetailsCard({ job, handleJobUpdate }) {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...job });

  useEffect(() => {
    setFormData({ ...job });
  }, [job]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="jobName"
              value={formData.jobName}
              onChange={handleChange}
            />
            <br />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
            <br />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            <br />
            <div className="button-container">
              <button type="submit">Save</button>
              <button onClick={() => setEditMode(false)}>Cancel</button>
            </div>
          </form>
        ) : (
          <>
            <h3>Job: {job.jobName}</h3>
            <p>Date: {new Date(job.date).toLocaleDateString()}</p>
            <p>Location: {job.location}</p>
            <p>Description: {job.description}</p>
            <div className="button-container">
              <button onClick={() => setEditMode(true)}>Edit</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
