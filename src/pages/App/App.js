import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import SearchPage from "../SearchPage/SearchPage";
import CreateFlashcardPage from "../CreateFlashcardPage/CreateFlashcardPage";
import FlashcardListPage from "../FlashcardListPage/FlashcardListPage";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/flashcards" element={<FlashcardListPage />} />
            <Route path="/flashcards/new" element={<CreateFlashcardPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage path="/" setUser={setUser} />
      )}
      <SearchPage />
    </div>
  );
}

export default App;
