import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function DeleteConfirmPage() {
  const deckId = useParams()?.d_id;
  const cardId = useParams()?.c_id;
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleDeleteDeck = async evt => {
    evt.preventDefault();
    try {
      const response = await flashcardsService.deleteDeck(deckId);
      console.log(response);
      if (response) navigate({ pathname: `/flashcards` });
    } catch {
      setError("Something went wrong - Try again");
    }
  };

  const handleDeleteCard = async evt => {
    evt.preventDefault();
    try {
      const response = await flashcardsService.deleteCard(deckId, cardId);
      if (response) navigate({ pathname: `/flashcards/decks/${deckId}` });
    } catch {
      setError("Something went wrong - Try again");
    }
  };

  return (
    <>
      <h2>Are you sure you want to delete this?</h2>
      <div className="flex flex-just-center flex-align-center">
        {!cardId ? (
          <form onSubmit={handleDeleteDeck}>
            <button
              className="btn btn-lg btn-color-delete mg-right"
              type="submit"
            >
              Yes - Delete Deck
            </button>
          </form>
        ) : (
          <form onSubmit={handleDeleteCard}>
            <button
              className="btn btn-lg btn-color-delete mg-right"
              type="submit"
            >
              Yes - Delete Card
            </button>
          </form>
        )}
        <Link className="cancel-link" to={`/flashcards/decks/${deckId}`}>
          Cancel
        </Link>
      </div>
      {error ? <p className="error-msg">&nbsp;{error}</p> : <></>}
    </>
  );
}
