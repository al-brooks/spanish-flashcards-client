import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>{/* insert routes for users */}</Routes>
        </>
      ) : (
        <AuthPage path="/" setUser={setUser} />
      )}
      <h1>App</h1>
      <p>Spanish Flashcard App</p>
    </div>
  );
}

export default App;
