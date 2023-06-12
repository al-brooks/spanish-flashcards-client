import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function CardForm() {
  const [card, setCard] = useState({
    content: "",
    translation: "",
    difficulty: "New"
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { d_id: deckId } = useParams();

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
      const response = await flashcardsService.createCard(deckId, card);
      if (response) navigate({ pathname: `/flashcards/decks/${deckId}` });
    } catch {
      setError("Card couldn't be created - Try again");
    }
  };

  return (
    <section className="flex flex-col">
      <h2>Create Card</h2>
      <form
        className="form form-card"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <label>Front:</label>
        <input
          type="text"
          name="content"
          value={card.content}
          onChange={handleChange}
          placeholder="Enter Front of Card"
          required
        />
        <label>Back:</label>
        <input
          type="text"
          name="translation"
          value={card.translation}
          onChange={handleChange}
          placeholder="Enter Back of Card"
          required
        />
        <label>Difficulty:</label>
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
        <button className="btn btn-color-confirm" type="submit">
          Create
        </button>
      </form>
      <Link className="cancel-link" to={`/flashcards/decks/${deckId}`}>
        Cancel
      </Link>
      {error ? <p className="error-msg">&nbsp;{error}</p> : <></>}
    </section>
  );
}
