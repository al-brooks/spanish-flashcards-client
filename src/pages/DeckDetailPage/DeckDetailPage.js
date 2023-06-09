import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";
import TranslateForm from "../../components/TranslateForm/TranslateForm";

export default function DeckDetailPage() {
  const [deck, setDeck] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();

  const fetchDeck = useCallback(async () => {
    try {
      const response = await flashcardsService.getDeck(id);
      if (response) {
        setDeck(response);
        setError("");
      }
    } catch {
      setError("Oh no! Something went wrong...");
    }
  }, [id]);

  useEffect(() => {
    fetchDeck();
  }, [fetchDeck]);

  const loading = () => {
    if (error) {
      return <h2>{error}</h2>;
    }
    return <h2>Loading Info...</h2>;
  };

  const loaded = () => {
    return (
      <main>
        <h1>Deck Detail Page</h1>
        <button>Edit Deck</button>
        <button>Delete Deck</button>
        <TranslateForm />
        <section>
          <article>
            <h2>{deck.name}</h2>
            <section>
              <h3>Here are your flashcards:</h3>
              {deck.cards.length > 0 ? (
                deck.cards.map(card => {
                  return (
                    <article key={card._id}>
                      <p>{card.content}</p>
                      <p>{card.translation}</p>
                      <p>{card.difficulty}</p>
                      <Link
                        to={`flashcards/decks/${deck._id}/cards/${card._d}/edit`}
                      >
                        Edit
                      </Link>
                      <Link
                        to={`flashcards/decks/${deck._id}/cards/${card._d}/delete`}
                      >
                        Delete
                      </Link>
                    </article>
                  );
                })
              ) : (
                <p>There are no cards yet...</p>
              )}
            </section>
          </article>
        </section>
        <p className="error-msg">&nbsp;{error}</p>
      </main>
    );
  };
  return <>{deck ? loaded() : loading()}</>;
}
