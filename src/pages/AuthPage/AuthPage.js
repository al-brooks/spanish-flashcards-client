import "./AuthPage.css";
import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [formToggle, setFormToggle] = useState(true);

  const handleToggle = () => {
    setFormToggle(!formToggle);
  };

  return (
    <section className="AuthPage">
      <section className="flex flex-col">
        {formToggle ? (
          <>
            <h3>Not a Member?</h3>
            <button className="btn btn-color-cancel" onClick={handleToggle}>
              Sign Up
            </button>
            <LoginForm setUser={setUser} />
          </>
        ) : (
          <>
            <h3>Already Have a Login?</h3>
            <button className="btn btn-color-cancel" onClick={handleToggle}>
              Log In
            </button>
            <SignUpForm setUser={setUser} />
          </>
        )}
      </section>
      <section className="welcome">
        <p>
          <span className="color-blue">Spanish</span>
          <span className="color-word">Flash</span> allows you to create
          flashcards to help you with your Spanish! While it's tailored
          specifically to English - Spanish translationas, you can also create
          custom cards for all your studying needs.
        </p>
        <p>
          Test out our translation page! Just search the word you'd like
          translated.
        </p>
      </section>
    </section>
  );
}
