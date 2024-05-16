import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [btn, setBtn] = useState(true);
  const navigate = useNavigate();
  const msg = btn ? "Go to Sign Up" : "Go to Log In";
  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={() => setBtn(!btn)}>{msg}</button>
      {btn ? (
        <div className="auth-form">
          <LoginForm navigate={navigate} setUser={setUser} />
        </div>
      ) : (
        <div className="auth-form">
          <SignUpForm navigate={navigate} setUser={setUser} />
        </div>
      )}
    </main>
  );
}
