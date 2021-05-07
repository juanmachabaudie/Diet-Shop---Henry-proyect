import React from 'react';
// import {Route} from 'react-router-dom'
// import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar';
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './themesConfig';
// import NewCategory from './components/NewCategory';
// import NewCategory from './components/NewCategory';
// import Catalog from './components/Catalog';
//import NewCategory from './components/NewCategory';
// import ProductCard from './components/ProductCard';
const App = () => {


    return (
        
        <ThemeProvider theme={theme}>
            <NavBar />
            {/* <SearchBar/> */}
            {/* <Route exact path='/'/> */}
            {/* <NewCategory /> */}
            {/* <Route path='/catalog' component={Catalog}/> */}
           {/* <Route path='/' component={ProductCard} /> */}


        </ThemeProvider>
            
        
    )
}


export default App;
