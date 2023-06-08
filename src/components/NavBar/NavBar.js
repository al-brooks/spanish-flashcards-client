import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    usersService.logOut();
    setUser(null);
  };

  return (
    <nav>
      <Link to={"/"}>Home</Link>
      <Link to={""}>View Flashcards</Link>
      <Link to={""}>Create Flashcards</Link>
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
