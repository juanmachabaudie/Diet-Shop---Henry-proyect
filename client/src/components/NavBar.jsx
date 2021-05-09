import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";

const NavBar = () => {
  return (
<nav> 
    <nav className="navbar navbar-dark bg-dark justify-content-between" >
    <Link className="navbar-brand" to='/'>DETETICA</Link>
    <Link className="navbar-brand" to='/catalogue'>productos</Link>
    <Link className="navbar-brand" to='/aboutUs'>sobre nosotros</Link>
    <Link className="navbar-brand" to ='/contact'>contacto</Link>
    <form className="form-inline"></form>
      <SearchBar/>
      </nav>
</nav>
  );
};

export default NavBar;
