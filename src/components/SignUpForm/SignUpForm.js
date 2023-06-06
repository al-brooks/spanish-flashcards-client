import { useState } from "react";
import { signUp } from "../../utilities/users-service";

export default function SignUpForm({ setUser }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: ""
  });

  const handleChange = evt => {
    setUserData({
      [evt.target.name]: evt.target.value,
      error: ""
    });
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      const formData = { ...userData };
      delete formData.confirm;
      delete formData.error;
      const user = await signUp(formData);
      setUser(user);
    } catch {
      setUserData({
        error: "Sign Up Failed - Try Again!"
      });
    }
  };

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirm"
            value={userData.confirm}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={disabled}>
            Sign Up
          </button>
        </form>
      </div>
      <p className="error-msg">&nbsp;{userData.error}</p>
    </div>
  );
}
