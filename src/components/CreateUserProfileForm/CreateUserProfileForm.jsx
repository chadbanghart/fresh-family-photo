import { useState, useEffect } from "react";

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
    console.log("Profile Data being sent:", profileData);
    onSave(user._id, profileData, profileType);
    setEditMode(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input
          type="text"
          name="name"
          value={profileData.name}
          onChange={handleChange}
        />
      </label>
      <label>Email: {user.email}</label>
      <label>User Type: {user.isPoster ? "Job Poster" : "Photographer"}</label>

      <label>
        Photo URL:
        <input
          type="text"
          name="photoURL"
          value={profileData.photoURL}
          onChange={handleChange}
        />
      </label>

      {profileType === "Photographer" && (
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={profileData.phone}
            onChange={handleChange}
          />
        </label>
      )}

      <button type="submit">Save Profile</button>
      <button onClick={() => setEditMode(false)}>Cancel Changes</button>
    </form>
  );
}
