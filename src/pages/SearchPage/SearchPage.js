import { useState } from "react";
import TranslateForm from "../../components/TranslateForm/TranslateForm";

export default function SearchPage() {
  const [translations, setTranslations] = useState({
    searchWord: "",
    terms: []
  });

  return (
    <section>
      <h2>Search a word below:</h2>
      <TranslateForm setTranslations={setTranslations} />
      <section>
        {translations.terms.length > 0 ? (
          translations.terms.map((result, idx) => {
            let id = result.meta.id;
            let headWord = id.split(":")[0];

            if (headWord === translations.searchWord) {
              let wordClass = result.fl;
              let abridgedDefs = result.shortdef[0].split(",");

              return (
                <article key={id}>
                  <h3>{headWord}</h3>
                  <hr />
                  <p>{wordClass}</p>
                  {abridgedDefs.map((def, idx) => {
                    return <p key={idx}>{def}</p>;
                  })}
                </article>
              );
            }
          })
        ) : (
          <p>Nothing yet...</p>
        )}
      </section>
    </section>
  );
}
