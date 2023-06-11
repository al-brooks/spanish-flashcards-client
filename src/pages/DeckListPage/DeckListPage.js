import "./DeckListPage.css";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function DeckListPage() {
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState("");

  const fetchDecks = useCallback(async () => {
    try {
      const response = await flashcardsService.getAllDecks();
      console.log(response);
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
      <section className="deck-list-header">
        <div>
          <h2>Flashcard Decks</h2>
          <p>
            <span className="color-word">{decks.length}</span>
            {decks.length === 1 ? " Deck" : " Decks"}
          </p>
        </div>
        <Link to={"/flashcards/decks/create"}>&#43; Create Deck</Link>
      </section>
      <h3>My Decks:</h3>
      <section className="decks-wrapper">
        {decks.length > 0 ? (
          decks.map((deck, idx) => {
            return idx % 2 === 0 ? (
              <article key={deck._id} className="deck-card deck-card-even">
                <Link to={`/flashcards/decks/${deck._id}`}>
                  <h3>{deck.name}</h3>
                  <p>
                    <span className="color-word">{deck.cards.length}</span>
                    {deck.cards.length === 1 ? " Card" : " Cards"}
                  </p>
                </Link>
              </article>
            ) : (
              <article key={deck._id} className="deck-card deck-card-odd">
                <Link to={`/flashcards/decks/${deck._id}`}>
                  <h3>{deck.name}</h3>
                  <p>
                    <span className="color-word">{deck.cards.length}</span>
                    {deck.cards.length === 1 ? " Card" : " Cards"}
                  </p>
                </Link>
              </article>
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
