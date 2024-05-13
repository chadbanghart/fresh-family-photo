import { NavLink, useNavigate } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogOut(e) {
    e.preventDefault();
    userService.logOut();
    setUser(null);
    navigate("/");
  }
  return (
    <nav className="NavBar">
      {user ? (
        <>
          {user.isPoster ? (
            <>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/book">How To Book</NavLink>
              <NavLink to="/jobs">My Jobs</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/logout" onClick={handleLogOut}>
                Log Out
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/board">Job Board</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/logout" onClick={handleLogOut}>
                Log Out
              </NavLink>
            </>
          )}
        </>
      ) : (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/book">How To Book</NavLink>
          <NavLink to="/auth">Log In</NavLink>
        </>
      )}
    </nav>
  );
}
