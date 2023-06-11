import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function DeckListPage() {
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState("");

  const fetchDecks = useCallback(async () => {
    try {
      const response = await flashcardsService.getAllDecks();
      setDecks(response);
      setError("");
    } catch {
      setError("Oh no! Something went wrong...");
    }
  }, []);

  useEffect(() => {
    fetchDecks();
  }, [fetchDecks]);

  return (
    <>
      <section className="flex ">
        <h2>Flashcard Decks</h2>
        <Link to={"/flashcards/decks/create"}>&#43; Create Deck</Link>
      </section>
      <section>
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
      <p className="error-msg">&nbsp;{error}</p>
    </>
  );
}
