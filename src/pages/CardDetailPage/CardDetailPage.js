import "./CardDetailPage.css";
import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function CardDetailPage() {
  const [toggleCard, setToggleCard] = useState(false);
  const [card, setCard] = useState(null);
  const [error, setError] = useState("");
  const { d_id, c_id } = useParams();

  const handleToggle = () => {
    setToggleCard(!toggleCard);
  };

  const fetchCard = useCallback(async () => {
    try {
      const response = await flashcardsService.showCard(d_id, c_id);
      if (response) {
        setCard(response);
        setError("");
      }
    } catch {
      setError("Oh no! Something went wrong...");
    }
  }, [d_id, c_id]);

  useEffect(() => {
    fetchCard();
  }, [fetchCard]);

  const loading = () => {
    if (error) {
      return <h2>{error}</h2>;
    }
    return <h2>Loading Info...</h2>;
  };

  const loaded = () => {
    return (
      <section className="flex flex-col">
        {!toggleCard ? (
          <article className="view-card front">
            <p>Front of Card</p>
            <p>{card.content}</p>
            <button className="btn btn-color-cancel" onClick={handleToggle}>
              Back
            </button>
          </article>
        ) : (
          <article className="view-card back">
            <p>Back of Card</p>
            <p>{card.translation}</p>
            <button className="btn btn-color-confirm" onClick={handleToggle}>
              Front
            </button>
          </article>
        )}
        <Link className="cancel-link" to={`/flashcards/decks/${d_id}`}>
          Go Back to Deck
        </Link>
        {error ? <p className="error-msg">&nbsp;{error}</p> : <></>}
      </section>
    );
  };
  return <>{card ? loaded() : loading()}</>;
}
