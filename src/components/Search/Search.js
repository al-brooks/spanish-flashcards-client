import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TranslateForm from "../../components/TranslateForm/TranslateForm";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function Search() {
  const [translations, setTranslations] = useState({
    searchWord: "",
    terms: []
  });
  const [error, setError] = useState("");
  const [card, setCard] = useState({
    content: "",
    translation: "",
    difficulty: "New"
  });

  const deckId = useParams()?.d_id;
  const navigate = useNavigate();

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      for (let el of evt.target.children) {
        if (el.name === "content" || el.name === "translation") {
          setCard({
            ...card,
            [el.name]: el.value
          });
        }
      }
      console.log(card);
      // const response = await flashcardsService.createCard(deckId, card);
      // if (response) navigate({ pathname: `/flashcards/decks/${deckId}` });
    } catch {
      setError("Card couldn't be created - Try again");
    }
  };

  return (
    <section>
      <h2>Search a word below:</h2>
      <TranslateForm setTranslations={setTranslations} />
      <section>
        {translations.terms.length > 0 ? (
          translations.terms.map((result, idx) => {
            let id = result.meta.id;
            let headWord = id.split(":")[0];

            if (translations.searchWord.includes(headWord)) {
              let wordClass = result.fl;
              let abridgedDefs = result.shortdef[0]
                .replace(/\([^)]*\)/g, "")
                .split(",");

              return abridgedDefs.map((def, idx) => {
                const word = def.trim();
                return (
                  <article key={id + idx}>
                    <h3>{headWord}</h3>
                    <p>{wordClass}</p>
                    <p>{word}</p>
                  </article>
                );
              });
            }
          })
        ) : (
          <p>Nothing yet...</p>
        )}
      </section>
    </section>
  );
}
