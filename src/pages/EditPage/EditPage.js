import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";
import EditDeck from "../../components/EditDeck/EditDeck";

export default function EditPage() {
  const deckId = useParams()?.d_id;
  const cardId = useParams()?.c_id;
  const location = useLocation();

  return (
    <main>
      <h1>Edit:</h1>
      {!cardId ? (
        <EditDeck id={deckId} name={location.state.name} />
      ) : (
        <p>Edit Card Form</p>
      )}
    </main>
  );
}
