import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import "./App.css";
import AboutUsPage from "../AboutUsPage/AboutUsPage";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import NavBar from "../../components/NavBar/NavBar";
import HowToBookPage from "../HowToBookPage/HowToBookPage";
import JobBoardPage from "../JobBoardPage/JobBoardPage";
import UserProfilePage from "../UserProfilePage/UserProfilePage";
import MyJobsPage from "../MyJobsPage/MyJobsPage";

export default function App() {
  const [user, setUser] = useState(getUser());

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
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/book" element={<HowToBookPage />} />
          <Route path="/board" element={<JobBoardPage />} />
          <Route
            path="/profile"
            element={<UserProfilePage user={user} setUser={setUser} />}
          />
          <Route path="/jobs" element={<MyJobsPage user={user} />} />
          {/* additional Routes... */}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}
