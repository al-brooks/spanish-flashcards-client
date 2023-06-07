import { useState } from "react";
import TranslateForm from "../../components/TranslateForm/TranslateForm";

export default function SearchPage() {
  const [translation, setTranslation] = useState([]);

  return (
    <section>
      <h2>Search a word below:</h2>
      <TranslateForm setTranslation={setTranslation} />
      {console.log(translation)}
    </section>
  );
}
