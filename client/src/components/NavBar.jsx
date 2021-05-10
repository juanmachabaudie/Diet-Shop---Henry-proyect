import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import ByCategory from "./ByCategory";

const NavBar = () => {
  return (
    <nav>
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
        <form className="form-inline"></form>
        <SearchBar />
        <ByCategory />
      </nav>
    </nav>
  );
};

export default NavBar;
