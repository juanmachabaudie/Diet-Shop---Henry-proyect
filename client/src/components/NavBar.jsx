import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import ProductsByCategory from "./ProductsByCategory";

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">DIET SHOP</Link>
        <Link to="/products">Productos</Link>
        <Link to="/aboutUs">Nosotros</Link>
        <Link to="/contact">Contacto</Link>
        <SearchBar />
        <ProductsByCategory />
      </nav>
    </div>
  );
};

export default NavBar;
