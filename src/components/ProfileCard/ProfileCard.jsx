export default function ProfileCard({ user }) {
  return (
    <>
      <h4>Name: {user.name}</h4>
      <p>Email: {user.email}</p>
      <p>User Type: {user.isPoster ? "Job Poster" : "Photographer"}</p>
      {user.posterProfile && (
        <div>
          <h5>Poster Profile</h5>
          <img src={user.posterProfile.photo} alt="Poster Profile" />
        </div>
      )}
      {user.photographerProfile && (
        <div>
          <h5>Photographer Profile</h5>
          <img
            src={user.photographerProfile.photo}
            alt="Photographer Profile"
          />
          <p>Phone: {user.photographerProfile.phone}</p>
          <p>Resume Link: {user.photographerProfile.resume}</p>
        </div>
      )}
    </>
  );
}
