import { useState } from "react";
import DeckForm from "../../components/DeckForm/DeckForm";

export default function DeckListPage() {
  const [decks, setDecks] = useState([]);

  return (
    <main>
      <section>
        <h2>Deck List</h2>
        <p>No decks so far...</p>
      </section>
      <section>
        <h2>Create a Deck</h2>
        <DeckForm setDecks={setDecks} />
      </section>
    </main>
  );
}
