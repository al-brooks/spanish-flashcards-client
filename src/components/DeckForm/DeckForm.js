import { useState } from "react";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function DeckForm() {
  const [deck, setDeck] = useState({
    name: ""
  });

  const [error, setError] = useState("");

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
      await flashcardsService.createDeck(deck);
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
          required
        />
        <button type="submit">Create</button>
      </form>
      <p className="error-msg">&nbsp;{error}</p>
    </>
  );
}
