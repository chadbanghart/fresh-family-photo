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
              <NavLink to="/book">How To Book</NavLink>
              <NavLink to="/jobs">My Jobs</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/logout" onClick={handleLogOut}>
                Log Out
              </NavLink>
              {user.posterProfile ? (
                <div className="user-avatar">
                  <img
                    className="avatar"
                    src={user.posterProfile.photoURL}
                    alt="avatar"
                    referrerPolicy="no-referrer"
                  />
                  <span className="user-name">{user.name}</span>
                </div>
              ) : (
                ""
              )}
            </>
          ) : (
            <>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/board">Job Board</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
              <NavLink to="/profile">Profile</NavLink>
              <NavLink to="/logout" onClick={handleLogOut}>
                Log Out
              </NavLink>
              {user.photographerProfile ? (
                <div className="user-avatar">
                  <img
                    className="avatar"
                    src={user.photographerProfile.photoURL}
                    alt="avatar"
                    referrerPolicy="no-referrer"
                  />
                  <span>{user.name}</span>
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </>
      ) : (
        <>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/book">How To Book</NavLink>
          <NavLink to="/contact">Contact Us</NavLink>
          <NavLink to="/auth">Log In</NavLink>
        </>
      )}
    </nav>
  );
}
