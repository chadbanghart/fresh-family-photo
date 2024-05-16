import { useEffect, useState } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import * as usersAPI from "../../utilities/users-api";
import CreateUserProfileForm from "../../components/CreateUserProfileForm/CreateUserProfileForm";

export default function UserProfilePage({ user, setUser }) {
  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const handleSaveProfile = async (userId, profileData, profileType) => {
    const apiPath = profileType === "Photographer" ? "photographer" : "poster";
    const updatedProfile = await usersAPI.saveProfile(
      apiPath,
      userId,
      profileData
    );
    if (updatedProfile) {
      const updatedUserData = await usersAPI.getUserProfile(userId);
      setUser((prevUser) => ({
        ...prevUser,
        ...updatedUserData,
        [profileType.toLowerCase() + "Profile"]: updatedProfile,
      }));
      setProfileData(updatedProfile);
    }
  };

  useEffect(() => {
    async function getUser() {
      const userData = await usersAPI.getUserProfile(user._id);
      setUser(userData);
      setProfileData({
        ...userData.photographerProfile,
        name: userData.name,
      });
    }
    if (user && user._id) getUser();
  }, [user._id]);

  return (
    <>
      <h1>My Profile</h1>
      {!editMode ? (
        <>
          <ProfileCard key={user.updatedAt} user={user} />
          <button onClick={() => setEditMode(true)}>Edit Profile</button>
        </>
      ) : (
        <CreateUserProfileForm
          user={user}
          existingProfileData={profileData}
          onSave={handleSaveProfile}
          profileType={user.isPoster ? "Poster" : "Photographer"}
          setEditMode={setEditMode}
        />
      )}
    </>
  );
}
