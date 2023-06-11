import "./TranslateForm.css";
import { useState } from "react";
import * as translateServices from "../../utilities/translate-service";

export default function TranslateForm({ setTranslations }) {
  const [search, setSearch] = useState({
    searchTerm: ""
  });
  const [error, setError] = useState("");

  const handleSubmit = async evt => {
    evt.preventDefault();
    try {
      setTranslations({
        searchWord: "",
        terms: []
      });

      const result = await translateServices.getTranslation(search.searchTerm);

      if (typeof result[0] !== "object") {
        throw new Error();
      }

      setTranslations({
        searchWord: search.searchTerm,
        terms: result
      });

      setSearch({
        searchTerm: ""
      });
    } catch {
      setError("Oops, we weren't able to find this...");
    }
  };

  const handleChange = evt => {
    setSearch({
      ...search,
      [evt.target.name]: evt.target.value.toLowerCase()
    });
    setError("");
  };

  return (
    <section className="TranslateForm">
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="searchTerm"
          value={search.searchTerm}
          onChange={handleChange}
          placeholder={"Translate Words in English and Spanish..."}
          required
        />
        <button className="btn btn-color-confirm" type="submit">
          Search
        </button>
      </form>
      {error ? <p className="error-msg">&nbsp;{error}</p> : <></>}
    </section>
  );
}
