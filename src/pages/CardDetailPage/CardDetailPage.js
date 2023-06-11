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
  }, [c_id]);

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
      <main>
        <h1>Card Detail Page</h1>
        <Link to={`/flashcards/decks/${d_id}`}>Back to Deck</Link>
        {!toggleCard ? (
          <article>
            <p>Front of Card</p>
            <p>{card.content}</p>
            <button onClick={handleToggle}>Back</button>
          </article>
        ) : (
          <article>
            <p>Back of Card</p>
            <p>{card.translation}</p>
            <button onClick={handleToggle}>Front</button>
          </article>
        )}
        <p className="error-msg">&nbsp;{error}</p>
      </main>
    );
  };
  return <>{card ? loaded() : loading()}</>;
}
