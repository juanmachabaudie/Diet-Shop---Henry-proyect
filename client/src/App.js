import React from 'react';
// import {Route} from 'react-router-dom'
import SearchBar from './components/SearchBar';
import NavBar from './components/NavBar'

// import NewCategory from './components/NewCategory';
// import NewCategory from './components/NewCategory';
// import Catalog from './components/Catalog';
//import NewCategory from './components/NewCategory';
// import ProductCard from './components/ProductCard';
const App = () => {


    return (
        
        <React.Fragment>
            <NavBar />
            <SearchBar/>
            {/* <Route exact path='/'/> */}
            {/* <NewCategory /> */}
            {/* <Route path='/catalog' component={Catalog}/> */}
           {/* <Route path='/' component={ProductCard} /> */}


        </React.Fragment>
            
        
    )
}


export default App;
