import { useState, useEffect, useCallback } from "react";
import DeckForm from "../../components/DeckForm/DeckForm";
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
      <section>
        <h2>Deck List</h2>
        {decks.length > 0 ? (
          decks.map(deck => {
            return (
              <article key={deck.id}>
                <h4>{deck.name}</h4>
              </article>
            );
          })
        ) : (
          <p>No decks so far...</p>
        )}
      </section>
      <section>
        <h2>Create a Deck</h2>
        <DeckForm setToggleRerender={setToggleRerender} />
      </section>
    </main>
  );
}