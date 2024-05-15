import { useState } from "react";

export default function CreateUserProfileForm({ user, onSave, profileType }) {
  const [profileData, setProfileData] = useState({
    photoURL: "",
    phone: "", // only used for photographers
  });

  async function handleChange(e) {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await onSave(user._id, profileData, profileType);
    setProfileData({
      photoURL: "",
      phone: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
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
        <>
          <label>
            Phone:
            <input
              type="text"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
            />
          </label>
        </>
      )}
      <button type="submit">Save Profile</button>
    </form>
  );
}
