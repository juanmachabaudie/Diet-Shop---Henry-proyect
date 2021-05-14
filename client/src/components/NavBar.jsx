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
        {/*---------------porvicionales--------------*/}
        <Link to='/product/add'>new prod</Link>
        <Link to='/category/add'>new cat</Link>
        <SearchBar />
        <ProductsByCategory />
      </nav>
    </div>
  );
};

export default NavBar;
