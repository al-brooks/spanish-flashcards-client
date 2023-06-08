import { useState } from "react";
import DeckForm from "../../components/DeckForm/DeckForm";

export default function DeckListPage() {
  const [decks, setDecks] = useState([]);
  // need to fetch all decks from database
  console.log(decks);

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
        <DeckForm setDecks={(decks, setDecks)} />
      </section>
    </main>
  );
}
