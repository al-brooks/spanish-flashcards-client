import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function EditDeck({ name }) {
  const [deck, setDeck] = useState({
    name: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = evt => {
    setDeck({
      ...deck,
      [evt.target.name]: evt.target.value
    });
    setError("");
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      const response = await flashcardsService.createDeck(deck);
      if (response) navigate({ pathname: `/flashcards/decks/${response._id}` });
    } catch {
      setError("Deck couldn't be created - Try again");
    }
  };

  return (
    <>
      <h3>Deck Form</h3>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={deck.name}
          onChange={handleChange}
          placeholder={name}
          required
        />
        <button type="submit">Create</button>
      </form>
      <p className="error-msg">&nbsp;{error}</p>
    </>
  );
}
