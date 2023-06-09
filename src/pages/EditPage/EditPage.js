import { useParams } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function EditPage() {
  const deckId = useParams()?.d_id;
  const cardId = useParams()?.c_id;

  return (
    <main>
      <h1>Edit:</h1>
      {!cardId ? <p>Edit Deck Form</p> : <p>Edit Card Form</p>}
    </main>
  );
}
