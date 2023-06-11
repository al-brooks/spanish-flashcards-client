import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TranslateForm from "../../components/TranslateForm/TranslateForm";
import * as flashcardsService from "../../utilities/flashcards-service";

export default function Search({ setToggleRender }) {
  const [translations, setTranslations] = useState({
    searchWord: "",
    terms: []
  });
  const [error, setError] = useState("");
  const [card, setCard] = useState({});

  const deckId = useParams()?.d_id;
  const navigate = useNavigate();

  const handleRequest = async (headWord, word) => {
    try {
      const card = {
        content: headWord,
        translation: word,
        difficulty: "New"
      };
      setTranslations({
        searchWord: "",
        terms: []
      });
      const response = await flashcardsService.createCard(deckId, card);
      if (response) {
        navigate({ pathname: `/flashcards/decks/${deckId}` });
        setToggleRender(true);
      }
    } catch {
      setError("Card couldn't be created - Try again");
    }
  };

  const loadingTranslations = () => {
    if (error) {
      return <h2>{error}</h2>;
    }
    return <h2>Loading...</h2>;
  };

  const loadedTranslations = () => {
    return (
      <section className="flex flex-col card-wrapper">
        {translations.terms.map((result, idx) => {
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
                <article className="card flex flex-col" key={id + idx}>
                  <p className="card-title">
                    {headWord}{" "}
                    <span className="color-word card-grammar">{wordClass}</span>
                  </p>

                  <div className="flex flex-align-end">
                    <p className="card-translation">{word}</p>
                    {deckId ? (
                      <button onClick={() => handleRequest(headWord, word)}>
                        +
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>
                </article>
              );
            });
          }
        })}
      </section>
    );
  };

  return (
    <section className="Search">
      <h2>Search For Translations Below:</h2>
      <TranslateForm setTranslations={setTranslations} />
      {translations ? loadedTranslations() : loadingTranslations()}
    </section>
  );
}
