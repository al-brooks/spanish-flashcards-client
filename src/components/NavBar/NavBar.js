import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    usersService.logOut();
    setUser(null);
  };

  return (
    <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Link to={"/"}>Home</Link>
      <Link to={"/translate"}>Translate</Link>
      <Link to={"/flashcards"}>View Flashcards</Link>
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
