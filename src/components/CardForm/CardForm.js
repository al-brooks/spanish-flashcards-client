import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function CardForm() {
  const [card, setCard] = useState({
    content: "",
    translation: "",
    difficulty: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { d_id } = useParams();

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
      const response = await flashcardsService.createCard(card);
      if (response) navigate({ pathname: `/flashcards/decks/${d_id._id}` });
    } catch {
      setError("Card couldn't be created - Try again");
    }
  };

  return (
    <>
      <h3>Deck Form</h3>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>Front</label>
        <input
          type="text"
          name="content"
          value={card.content}
          onChange={handleChange}
          required
        />
        <label>Back</label>
        <input
          type="text"
          name="translation"
          value={card.translation}
          onChange={handleChange}
          required
        />
        <label>Difficulty</label>
        <select name="difficulty">
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
