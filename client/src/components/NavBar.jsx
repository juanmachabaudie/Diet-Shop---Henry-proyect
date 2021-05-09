//import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import ByCategory from "./ByCategory";

const NavBar = () => {
  return (
    <nav>
      <nav class="navbar navbar-dark bg-dark justify-content-between">
        <a class="navbar-brand" href="/">
          DETETICA
        </a>
        <a class="navbar-brand" href="/catalogue">
          productos
        </a>
        <a class="navbar-brand" href="/aboutUs">
          sobre nosotros
        </a>
        <a class="navbar-brand" href="/contact">
          contacto
        </a>
        <form class="form-inline">
          <SearchBar />
        </form>
        <form class="form-inline">
          <ByCategory />
        </form>
      </nav>
    </nav>
  );
};

export default NavBar;
