import React from 'react';

import Catalog from './components/Catalog';
import SearchBar from './components/SearchBar';
import {Route} from 'react-router-dom'
import ProductCard from './components/ProductCard';

import {ThemeProvider} from '@material-ui/core/styles';
import theme from './themesConfig';


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
