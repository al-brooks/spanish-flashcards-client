import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [formToggle, setFormToggle] = useState(true);

  const handleToggle = () => {
    setFormToggle(!formToggle);
  };

  return (
    <main>
      <h1>Auth Page</h1>
      {formToggle ? (
        <>
          <button onClick={handleToggle}>Sign Up</button>
          <LoginForm setUser={setUser} />
        </>
      ) : (
        <>
          <button onClick={handleToggle}>Log In</button>
          <SignUpForm setUser={setUser} />
        </>
      )}
    </main>
  );
}
