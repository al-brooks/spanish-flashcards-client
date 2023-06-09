import { useParams } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function DeleteConfirmPage() {
  const deckId = useParams()?.d_id;
  const cardId = useParams()?.c_id;

  return (
    <main>
      <h2>Are you sure you want to delete this?</h2>
      {!cardId ? <p>Delete Deck Form</p> : <p>Delete Card Form</p>}
    </main>
  );
}
