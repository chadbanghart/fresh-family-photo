import { useState } from "react";

export default function CreateEventForm({ handleAddEvent }) {
  const [eventData, setEventData] = useState({
    jobName: "",
    date: "",
    location: "",
    description: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    handleAddEvent(eventData);
    setEventData({
      jobName: "",
      date: "",
      location: "",
      description: "",
    });
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>Job Name:</label>
        <input
          type="text"
          name="jobName"
          onChange={handleChange}
          value={eventData.jobName}
          required
        />

        <label>Date:</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
          value={eventData.date}
          required
        />

        <label>Location:</label>
        <input
          type="text"
          name="location"
          onChange={handleChange}
          value={eventData.location}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          onChange={handleChange}
          value={eventData.description}
          required
        ></textarea>

        <button type="submit">Submit Job</button>
      </form>
    </div>
  );
}