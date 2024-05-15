export default function ProfileCard({ user }) {
  return (
    <>
      <h4>Name: {user.name}</h4>
      <p>Email: {user.email}</p>
      <p>User Type: {user.isPoster ? "Job Poster" : "Photographer"}</p>
      {user.posterProfile && (
        <div>
          <img src={user.posterProfile.photoURL} alt="Poster Profile" />
        </div>
      )}
      {user.photographerProfile && (
        <div>
          <img
            src={user.photographerProfile.photoURL}
            alt="Photographer Profile"
          />
          <p>Phone: {user.photographerProfile.phone}</p>
        </div>
      )}
    </>
  );
}
