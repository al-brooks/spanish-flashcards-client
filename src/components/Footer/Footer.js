import { Link } from "react-router-dom";
import mwLogo from "../../imgs/MWLogo_LightBG.png";

export default function Footer() {
  return (
    <footer>
      <p>
        Copyright &copy; All Rights Reserved {new Date().getFullYear()} Spanish
        Flashcards
      </p>
      <p>
        Translation API Provided By: Merriam-Webster's Spanish-English
        Dictionary with Audio API
        <br />
        <em>Merriam-Webster Inc.</em>
      </p>
      <Link
        to={"https://www.dictionaryapi.com/products/api-spanish-dictionary"}
      >
        <img className="mw-logo" src={mwLogo} alt="Merriam-Webster Inc. Logo" />
      </Link>
    </footer>
  );
}
