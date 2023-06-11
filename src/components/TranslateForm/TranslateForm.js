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
      const result = await translateServices.getTranslation(search.searchTerm);
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
      [evt.target.name]: evt.target.value
    });
    setError("");
  };

  return (
    <section>
      <h2>Translate Words in English and Spanish</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          name="searchTerm"
          value={search.searchTerm}
          onChange={handleChange}
          required
        />
        <button type="submit">Search</button>
      </form>
      <p className="error-msg">&nbsp;{error}</p>
    </section>
  );
}
