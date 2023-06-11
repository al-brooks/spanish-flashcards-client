import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../AuthPage/AuthPage";
import SearchPage from "../SearchPage/SearchPage";
import DeckListPage from "../DeckListPage/DeckListPage";
import DeckDetailPage from "../DeckDetailPage/DeckDetailPage";
import CreatePage from "../CreatePage/CreatePage";
import EditPage from "../EditPage/EditPage";
import DeleteConfirmPage from "../DeleteConfirmPage/DeleteConfirmPage";
import CardDetailPage from "../CardDetailPage/CardDetailPage";
import LandingPage from "../LandingPage/LandingPage";
import Footer from "../../components/Footer/Footer";

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <div className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/translate" element={<SearchPage />} />
            <Route path="/flashcards" element={<DeckListPage />} />
            <Route path="/flashcards/decks/create" element={<CreatePage />} />
            <Route
              path="/flashcards/decks/:d_id/cards/create"
              element={<CreatePage />}
            />
            <Route
              path="/flashcards/decks/:d_id"
              element={<DeckDetailPage />}
            />
            <Route path="/flashcards/decks/:d_id/edit" element={<EditPage />} />
            <Route
              path="/flashcards/decks/:d_id/cards/:c_id"
              element={<CardDetailPage />}
            />
            <Route
              path="/flashcards/decks/:d_id/cards/:c_id/edit"
              element={<EditPage />}
            />
            <Route
              path="/flashcards/decks/:d_id/delete"
              element={<DeleteConfirmPage />}
            />
            <Route
              path="/flashcards/decks/:d_id/cards/:c_id/delete"
              element={<DeleteConfirmPage />}
            />
          </Routes>
        </>
      ) : (
        <main>
          <AuthPage path="/" setUser={setUser} />
          <SearchPage />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
