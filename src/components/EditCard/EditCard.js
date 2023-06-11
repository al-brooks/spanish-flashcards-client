import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function EditCard({ deckId, cardId, content, translation }) {
  const [card, setCard] = useState({
    content: "",
    translation: "",
    difficulty: "New"
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = evt => {
    setCard({
      ...card,
      [evt.target.name]: evt.target.value
    });
    setError("");
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      const response = await flashcardsService.updateCard(deckId, cardId, card);
      if (response) navigate({ pathname: `/flashcards/decks/${deckId}` });
    } catch {
      setError("Card couldn't be created - Try again");
    }
  };

  return (
    <>
      <h3>Card Form</h3>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Front</label>
        <input
          type="text"
          name="content"
          value={card.content}
          onChange={handleChange}
          placeholder={content}
          required
        />
        <label>Back</label>
        <input
          type="text"
          name="translation"
          value={card.translation}
          onChange={handleChange}
          placeholder={translation}
          required
        />
        <label>Difficulty</label>
        <select
          value={card.difficulty}
          name="difficulty"
          onChange={handleChange}
        >
          <option value="New">New</option>
          <option value="Tough">Tough</option>
          <option value="Okay">Okay</option>
          <option value="Easy">Easy</option>
          <option value="Fluent">Fluent</option>
        </select>
        <button type="submit">Create</button>
      </form>
      <p className="error-msg">&nbsp;{error}</p>
    </>
  );
}
