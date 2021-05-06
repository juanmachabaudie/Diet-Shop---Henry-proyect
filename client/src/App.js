import React from 'react';
import Catalog from './components/Catalog';
//import NewCategory from './components/NewCategory';
import SearchBar from './components/SearchBar';
import {Route} from 'react-router-dom'
import ProductCard from './components/ProductCard';

const App = () => {


    return (
        
        <React.Fragment>
            
            <Route exact path='/' component={SearchBar}/>
            <Route path='/catalog' component={Catalog}/>
           <Route path='/' component={ProductCard} />
        </React.Fragment>
            
        
    )
}


export default App;
