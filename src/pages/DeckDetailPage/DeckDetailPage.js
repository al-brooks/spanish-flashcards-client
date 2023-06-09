import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function DeckDetailPage() {
  const [deck, setDeck] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();
  console.log(deck);

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

  return (
    <main>
      <h1>Deck Detail Page</h1>
      <button>Edit Deck</button>
      <button>Delete Deck</button>
      <section>
        <article>
          {/* <h2>{deck.name}</h2> */}
          <p>this is your deck</p>
          <section>
            <p>card</p>
            <button>edit</button>
            <button>delete</button>
          </section>
        </article>
      </section>
    </main>
  );
}
