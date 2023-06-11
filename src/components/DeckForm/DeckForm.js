import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function DeckForm() {
  const [deck, setDeck] = useState({
    name: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

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
    <section className="flex flex-col">
      <h2>Create Your Deck</h2>
      <form
        className="form form-deck"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={deck.name}
          onChange={handleChange}
          placeholder="Enter Deck Name"
          required
        />
        <button className="btn btn-color-confirm" type="submit">
          Create
        </button>
      </form>
      <Link className="cancel-link" to={`/flashcards`}>
        Cancel
      </Link>
      <p className="error-msg">&nbsp;{error}</p>
    </section>
  );
}
