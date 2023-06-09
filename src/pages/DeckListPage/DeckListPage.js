import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function DeckListPage() {
  const [toggleRerender, setToggleRerender] = useState(false);
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState("");

  const fetchDecks = useCallback(async () => {
    try {
      const response = await flashcardsService.getAllDecks();
      setDecks(response);
      setToggleRerender(false);
      setError("");
    } catch {
      setError("Oh no! Something went wrong...");
    }
  }, [toggleRerender]);

  useEffect(() => {
    fetchDecks();
  }, [fetchDecks]);

  return (
    <main>
      <h1>Here are your flashcard decks!</h1>
      <section>
        <button>Create New Deck</button>
      </section>
      <section>
        <h2>Deck List</h2>
        {decks.length > 0 ? (
          decks.map(deck => {
            return (
              <Link key={deck._id} to={`/flashcards/decks/${deck._id}`}>
                <article>
                  <h4>{deck.name}</h4>
                </article>
              </Link>
            );
          })
        ) : (
          <p>No decks so far...</p>
        )}
      </section>
    </main>
  );
}
