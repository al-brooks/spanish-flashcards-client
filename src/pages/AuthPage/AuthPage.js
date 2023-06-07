import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

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
