import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.jsx';

const NavBar = () => {
    //const classes = useStyles()
    return (
        <nav className='navbar navbar-expand-lg navbar-mainbg'>
           <Link className='navbar-brand navbar-logo' to="/">
                Nav Bar
           </Link>
           <SearchBar/>
            <div
            className='collapse navbar-collapse'
            id='navbarSupportedContent'>
                <ul className='navbar-nav ml-auto'>
                    <div className='hori-selector'>
                       <div className='left'></div>
                       <div className='right'></div>
                    </div>
                    <li className='nav-item active'>
                        <Link classname='nav-link' to='/' exact>
                            <i className='fasfa-tachometer-alt'>Home</i>
                        </Link>
                    </li>

                    <li className='nav-item active'>
                        <Link classname='nav-link' to='/AboutUs' exact>
                            <i className='fasfa-tachometer-alt'>About Us</i>
                        </Link>
                    </li>

                    <li className='nav-item active'>
                        <Link classname='nav-link' to='/Catalogue' exact>
                            <i className='fasfa-tachometer-alt'>Catalogue</i>
                        </Link>
                    </li>

                    <li className='nav-item active'>
                        <Link classname='nav-link' to='/Contact' exact>
                            <i className='fasfa-tachometer-alt'>Contact</i>
                        </Link>
                    </li>
                </ul>
                
            </div>
        </nav>
    )
}


export default NavBar;