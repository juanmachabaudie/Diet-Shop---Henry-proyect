import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import ByCategory from "./ByCategory";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark justify-content-between">
        <Link className="navbar-brand" to="/">
          DETETICA
        </Link>
        <Link className="navbar-brand" to="/catalogue">
          productos
        </Link>
        <Link className="navbar-brand" to="/addCategory">
          agregar categorias
        </Link>
        <Link className="navbar-brand" to="/aboutUs">
          nosotros
        </Link>
        <Link className="navbar-brand" to="/contact">
          contacto
        </Link>
        <SearchBar />
      </nav>
    </div>
  );
};

export default NavBar;
