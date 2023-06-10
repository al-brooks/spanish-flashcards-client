import { useParams } from "react-router-dom";
import DeckForm from "../../components/DeckForm/DeckForm";
import CardForm from "../../components/CardForm/CardForm";

export default function CreateDeckPage() {
  const deckId = useParams()?.d_id;

  return (
    <main>
      {!deckId ? (
        <>
          <h1>Create Deck Page</h1>
          <DeckForm />
        </>
      ) : (
        <>
          <h1>Create Deck Page</h1>
          <CardForm />
        </>
      )}
    </main>
  );
}
