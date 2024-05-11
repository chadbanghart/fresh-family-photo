export default function ProfileCard({ user }) {
  return (
    <>
      {user.isPoster ? (
        <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.isPoster ? "Job Poster" : "Photographer"}</p>
        </>
      ) : (
        <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.isPoster ? "Job Poster" : "Photographer"}</p>
        </>
      )}
    </>
  );
}
