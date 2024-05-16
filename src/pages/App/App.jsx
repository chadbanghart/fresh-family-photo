import { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import NavBar from "../../components/NavBar/NavBar";
import HowToBookPage from "../HowToBookPage/HowToBookPage";
import JobBoardPage from "../JobBoardPage/JobBoardPage";
import UserProfilePage from "../UserProfilePage/UserProfilePage";
import PosterJobsPage from "../PosterJobsPage/PosterJobsPage";
import JobApplicationPage from "../JobApplicationPage/JobApplicationPage";
import PosterJobDetailsPage from "../PosterJobDetailsPage/PosterJobDetailsPage";
import ContactUsPage from "../ContactUsPage/ContactUsPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [appliedJobs, setAppliedJobs] = useState([]);

  const handleApplication = (jobId) => {
    setAppliedJobs((prev) => [...prev, jobId]);
  };

  return (
    <>
      <header className="App-header">
        <div>
          <img src="freshfamilyphoto.jpg" alt="logo" />
        </div>
      </header>
      <main className="App">
        <NavBar user={user} setUser={setUser} />
        <Routes>
          {/* Route components in here */}
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/book" element={<HowToBookPage />} />
          <Route
            path="/board"
            element={
              <JobBoardPage
                user={user}
                appliedJobs={appliedJobs}
                handleApplication={handleApplication}
              />
            }
          />
          <Route
            path="/profile"
            element={<UserProfilePage user={user} setUser={setUser} />}
          />
          <Route path="/jobs" element={<PosterJobsPage user={user} />} />
          <Route path="/job/:jobId" element={<PosterJobDetailsPage />} />
          <Route
            path="/application/:jobId"
            element={
              <JobApplicationPage handleApplication={handleApplication} />
            }
          />
          {/* additional Routes... */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <footer>
        <div className="footer">
          <div className="footer-img">
            <Link
              target="_blank"
              to={"https://www.instagram.com/fresh_family_photo/"}
            >
              <img src="./insta.png" alt="insta" id="insta" />
            </Link>
          </div>
          <div className="copyright">
            &copy; Created & Designed by Chad Banghart, May 2024
          </div>
        </div>
      </footer>
    </>
  );
}
