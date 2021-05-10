import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import ByCategory from "./ByCategory";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark justify-content-between">
        <Link className="navbar-brand" to="/">
          DIET SHOP
        </Link>
        <Link className="navbar-brand" to="/catalogue">
          Productos
        </Link>
        <Link className="navbar-brand" to="/aboutUs">
          Nosotros
        </Link>
        <Link className="navbar-brand" to="/contact">
          Contacto
        </Link>
        <SearchBar />
        <ByCategory />
      </nav>
    </div>
  );
};

export default NavBar;
