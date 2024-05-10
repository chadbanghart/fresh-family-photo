import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useNavigate } from "react-router-dom";

export default function AuthPage({ setUser }) {
  const [btn, setBtn] = useState(true);
  const navigate = useNavigate();
  const msg = btn ? "Go to Sign Up" : "Go to Log In";
  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={() => setBtn(!btn)}>{msg}</button>
      {btn ? (
        <>
          <LoginForm navigate={navigate} setUser={setUser} />
        </>
      ) : (
        <SignUpForm navigate={navigate} setUser={setUser} />
      )}
    </main>
  );
}
