import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [formToggle, setFormToggle] = useState(true);

  const handleToggle = () => {
    setFormToggle(!formToggle);
  };

  return (
    <>
      {formToggle ? (
        <section className="AuthPage">
          <h3>Not a Member?</h3>
          <button className="btn btn-color-cancel" onClick={handleToggle}>
            Sign Up
          </button>
          <LoginForm setUser={setUser} />
        </section>
      ) : (
        <section className="AuthPage">
          <h3>Already Have a Login?</h3>
          <button className="btn btn-color-cancel" onClick={handleToggle}>
            Log In
          </button>
          <SignUpForm setUser={setUser} />
        </section>
      )}
    </>
  );
}
