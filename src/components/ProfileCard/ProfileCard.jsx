import { useEffect } from "react";
import "./ProfileCard.css";

export default function ProfileCard({ user }) {
  useEffect(() => {}, [user]);
  return (
    <div className="profile-card">
      {user.posterProfile && (
        <>
          <div className="posterInfo">
            <img src={user.posterProfile.photoURL} alt="Poster Profile" />
            <h3>Name: {user.name}</h3>
          </div>
        </>
      )}
      {user.photographerProfile && (
        <>
          <div className="photographerInfo">
            <img
              src={user.photographerProfile.photoURL}
              alt="Photographer Profile"
            />
            <h3>Name: {user.name}</h3>
          </div>

          <p>
            <strong>Phone:</strong> {user.photographerProfile.phone}
          </p>
        </>
      )}
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>User Type:</strong>{" "}
        {user.isPoster ? "Job Poster" : "Photographer"}
      </p>
    </div>
  );
}
