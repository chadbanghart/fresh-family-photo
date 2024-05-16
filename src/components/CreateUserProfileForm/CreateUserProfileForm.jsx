import { useState, useEffect } from "react";
import "./CreateUserProfileForm.css";

export default function CreateUserProfileForm({
  user,
  onSave,
  profileType,
  setEditMode,
  existingProfileData,
}) {
  const initialProfileState = {
    photoURL: "",
    phone: "", // Only for photographers
  };

  // Initialize state checking for existing data
  const [profileData, setProfileData] = useState(() => ({
    name: user.name,
    photoURL: existingProfileData?.photoURL || initialProfileState.photoURL,
    phone: existingProfileData?.phone || initialProfileState.phone,
  }));

  useEffect(() => {
    setProfileData({
      name: user.name,
      photoURL: existingProfileData?.photoURL || "",
      phone: existingProfileData?.phone || "",
    });
  }, [user, existingProfileData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSave(user._id, profileData, profileType);
    setEditMode(false);
  }

  return (
    <form onSubmit={handleSubmit} className="form-container-profile">
      <div className="form-content">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={profileData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={user.email}
          readOnly
          className="readOnlyInput"
        />

        <label htmlFor="userType">User Type:</label>
        <input
          type="text"
          id="userType"
          value={user.isPoster ? "Job Poster" : "Photographer"}
          readOnly
          className="readOnlyInput"
        />

        <label htmlFor="photoURL">Photo URL:</label>
        <input
          type="text"
          id="photoURL"
          name="photoURL"
          value={profileData.photoURL}
          onChange={handleChange}
        />

        {profileType === "Photographer" && (
          <>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
            />
          </>
        )}
      </div>
      <div className="form-button">
        <button type="submit">Save Profile</button>
        <button onClick={() => setEditMode(false)}>Cancel Changes</button>
      </div>
    </form>
  );
}
