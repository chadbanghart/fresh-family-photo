import { useState } from "react";

export default function CreateUserProfileForm({ user, onSave, profileType }) {
  const [profileData, setProfileData] = useState({
    photo: "",
    phone: "", // only used for photographers
    resume: "", // only used for photographers
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSave(user._id, profileData, profileType);
    setProfileData({
      photo: "",
      phone: "",
      resume: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Photo URL:
        <input
          type="text"
          name="photo"
          value={profileData.photo}
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
          <label>
            Resume URL:
            <input
              type="text"
              name="resume"
              value={profileData.resume}
              onChange={handleChange}
            />
          </label>
        </>
      )}
      <button type="submit">Save Profile</button>
    </form>
  );
}
