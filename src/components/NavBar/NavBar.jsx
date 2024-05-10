import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <nav>
      {user ? (
        <>
          {user.isPoster ? (
            <>
              <Link to="/">Home</Link>
              &nbsp; | &nbsp;
              <Link to="/about">About Us</Link>
              &nbsp; | &nbsp;
              <Link to="/book">How To Book</Link>
              &nbsp; | &nbsp;
              <Link to="/jobs">My Jobs</Link>
              &nbsp; | &nbsp;
              <Link to="/profile">Profile</Link>
              &nbsp; | &nbsp;
              <Link to="/" onClick={handleLogOut}>
                Log Out
              </Link>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              &nbsp; | &nbsp;
              <Link to="/about">About Us</Link>
              &nbsp; | &nbsp;
              <Link to="/board">Job Board</Link>
              &nbsp; | &nbsp;
              <Link to="/profile">Profile</Link>
              &nbsp; | &nbsp;
              <Link to="/" onClick={handleLogOut}>
                Log Out
              </Link>
            </>
          )}
        </>
      ) : (
        <>
          <Link to="/">Home</Link>
          &nbsp; | &nbsp;
          <Link to="/about">About Us</Link>
          &nbsp; | &nbsp;
          <Link to="/book">How To Book</Link>
          &nbsp; | &nbsp;
          <Link to="/auth">Log In</Link>
        </>
      )}
    </nav>
  );
}
