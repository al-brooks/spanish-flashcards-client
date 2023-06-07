import { useState } from "react";
import TranslateForm from "../../components/TranslateForm/TranslateForm";

export default function SearchPage() {
  const [translations, setTranslations] = useState([]);
  console.log(translations);
  return (
    <section>
      <h2>Search a word below:</h2>
      <TranslateForm setTranslations={setTranslations} />
      <section>
        {translations.length > 0 ? (
          translations.map((result, idx) => {
            let id = result.meta.id;
            return (
              <article key={id}>
                <p>{result.shortdef[0]}</p>
              </article>
            );
          })
        ) : (
          <p>Nothing yet...</p>
        )}
      </section>
    </section>
  );
}
