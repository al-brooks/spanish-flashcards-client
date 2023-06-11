import "./DeckDetailPage.css";
import { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";
import Search from "../../components/Search/Search";

export default function DeckDetailPage() {
  const [toggleRender, setToggleRender] = useState(false);
  const [deck, setDeck] = useState(null);
  const [error, setError] = useState("");
  const { d_id } = useParams();

  const fetchDeck = useCallback(async () => {
    try {
      const response = await flashcardsService.getDeck(d_id);
      if (response) {
        setDeck(response);
        setError("");
        setToggleRender(false);
      }
    } catch {
      setError("Oh no! Something went wrong...");
    }
  }, [d_id, toggleRender]);

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
      <>
        <div className="deck-detail-header">
          <h2>Deck Detail Page</h2>
          <nav id="deck-detail-nav">
            <Link
              to={`edit`}
              state={{
                name: deck.name
              }}
            >
              Edit Deck
            </Link>
            <Link to={"delete"}>Delete Deck</Link>
            <Link to={"cards/create"}>&#43; Create Card</Link>
          </nav>
        </div>
        <Search setToggleRender={setToggleRender} />
        <section>
          <article>
            <h2>{deck.name}</h2>
            <p>
              {deck.cards.length}
              {deck.cards.length === 1 ? " Card:" : " Cards:"}
            </p>
            <section className="cards-wrapper">
              {deck.cards.length > 0 ? (
                deck.cards.map(card => {
                  return (
                    <article className="flash-card" key={card._id}>
                      <p className="flash-content">{card.content}</p>
                      <p className="flash-translation">{card.translation}</p>
                      <p className="flash-diff">{card.difficulty}</p>
                      <nav className="flash-nav">
                        <Link to={`cards/${card._id}`}>View</Link>
                        <Link
                          to={`cards/${card._id}/edit`}
                          state={{
                            content: card.content,
                            translation: card.translation,
                            difficulty: card.difficulty
                          }}
                        >
                          Edit
                        </Link>
                        <Link to={`cards/${card._id}/delete`}>Delete</Link>
                      </nav>
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
      </>
    );
  };
  return <>{deck ? loaded() : loading()}</>;
}
