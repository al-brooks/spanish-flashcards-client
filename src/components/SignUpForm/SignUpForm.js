import { useState } from "react";
import * as usersService from "../../utilities/users-service";

export default function SignUpForm({ setUser }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });

  const [error, setError] = useState("");

  const handleChange = evt => {
    setUserData({
      ...userData,
      [evt.target.name]: evt.target.value
    });
    setError("");
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      const formData = { ...userData };
      delete formData.confirm;
      delete formData.error;
      const user = await usersService.signUp(formData);
      setUser(user);
    } catch {
      setError("Sign Up Failed - Try Again!");
    }
  };

  const disable = userData.password !== userData.confirm;

  return (
    <section className="flex flex-col">
      <h2>We&#39;re Happy You&#39;re Joining!</h2>
      <form className="form form-lg" autoComplete="off" onSubmit={handleSubmit}>
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
        <button
          className="btn btn-color-confirm"
          type="submit"
          disabled={disable}
        >
          Sign Up
        </button>
      </form>
      {error ? <p className="error-msg">&nbsp;{error}</p> : <></>}
    </section>
  );
}
