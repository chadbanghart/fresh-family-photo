import { useEffect, useState } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import * as usersAPI from "../../utilities/users-api";
import CreateUserProfileForm from "../../components/CreateUserProfileForm/CreateUserProfileForm";

export default function UserProfilePage({ user, setUser }) {
  const [loading, setLoading] = useState(true);

  const handleSaveProfile = async (userId, profileData, profileType) => {
    const apiPath = profileType === "Photographer" ? "photographer" : "poster";
    const updatedProfile = await usersAPI.saveProfile(
      apiPath,
      userId,
      profileData
    );
    setUser({
      ...user,
      [profileType.toLowerCase() + "Profile"]: updatedProfile,
    });
  };

  useEffect(() => {
    async function getUser() {
      const userData = await usersAPI.getUserProfile(user._id);
      setUser(userData);
      setLoading(false);
    }
    if (user && user._id) getUser();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>My Profile</h1>
      <ProfileCard user={user} />
      {user.isPoster && (
        <CreateUserProfileForm
          user={user}
          onSave={handleSaveProfile}
          profileType="Poster"
        />
      )}
      {!user.isPoster && (
        <CreateUserProfileForm
          user={user}
          onSave={handleSaveProfile}
          profileType="Photographer"
        />
      )}
    </>
  );
}
