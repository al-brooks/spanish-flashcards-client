import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    usersService.logOut();
    setUser(null);
  };

  return (
    <nav className="flex-row flex-even">
      <Link to={"/"}>Home</Link>
      <Link to={"/translate"}>Translate</Link>
      <Link to={"/flashcards"}>Flashcards</Link>
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
