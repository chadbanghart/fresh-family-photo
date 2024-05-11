import { useEffect } from "react";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import * as usersAPI from "../../utilities/users-api";

export default function UserProfilePage({ user, setUser }) {
  useEffect(() => {
    async function getUser() {
      const userData = await usersAPI.getUserProfile(user._id);
      setUser(userData);
    }
    if (user && user._id) getUser();
  }, []);

  return (
    <>
      <h1>My Profile</h1>
      <ProfileCard user={user} />
    </>
  );
}
