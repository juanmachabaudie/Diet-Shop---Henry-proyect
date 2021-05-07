import React from 'react';
import { Route } from 'react-router-dom';

import Catalog from './components/Catalog';
import NavBar from './components/NavBar';
import NewCategory from './components/NewCategory';

const App = () => {
    return (
        <React.Fragment>
            <Route path='/' component={NavBar} />
            <Route exact path='/catalog' component={Catalog} />
            <Route exact path='/addCategory' component={NewCategory} />
        </React.Fragment>
    )
}

export default App;
