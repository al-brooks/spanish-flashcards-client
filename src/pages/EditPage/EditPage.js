import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import * as flashcardsService from "../../utilities/flashcards-service";
import EditDeck from "../../components/EditDeck/EditDeck";
import EditCard from "../../components/EditCard/EditCard";

export default function EditPage() {
  const deckId = useParams()?.d_id;
  const cardId = useParams()?.c_id;
  const location = useLocation();

  return (
    <>
      {!cardId ? (
        <EditDeck id={deckId} name={location.state.name} />
      ) : (
        <EditCard
          deckId={deckId}
          cardId={cardId}
          content={location.state.content}
          translation={location.state.translation}
          difficulty={location.state.difficulty}
        />
      )}
    </>
  );
}
