import React from 'react';
import { Route } from 'react-router-dom';

import AddProduct from './components/AddProduct'
import Catalog from './components/Catalog';
import NavBar from './components/NavBar';
import NewCategory from './components/NewCategory';
import SearchProducts from './components/SearchProducts';

//import ProductCard from './components/ProductCard';

const App = () => {
    return (
        <React.Fragment>
            <Route path='/' component={NavBar} />
            <Route exact path='/catalogue' component={Catalog} />
            <Route exact path='/addCategory' component={NewCategory} />
            <Route exact path='/addProduct' component={AddProduct}/>
            <Route path ='/search/:name' component={SearchProducts}/>

        </React.Fragment>
    )
}

export default App;
