import { useState } from "react";
import CreateFlashcardForm from "../../components/CreateFlashcardForm/CreateFlashcardForm";

export default function CreateFlashcardPage() {
  const [flashCard, setFlashCard] = useState({});

  return (
    <main>
      <h1>Create Flashcard Page</h1>
      <p>This is where can create flash card</p>
      <CreateFlashcardForm setFlashCard={setFlashCard} />
      <section>
        <p>Do you want to add this to a folder?</p>
        <p>Provide folder options dropdown or create new</p>
      </section>
    </main>
  );
}
