import React from 'react';
import ReactDom from 'react-dom';
import './App'


import { Provider } from 'react-redux';
import {store} from './redux/store/index';
import {BrowserRouter} from 'react-router-dom';

ReactDom.render(    
    <Provider store={store}>        
        <BrowserRouter> 
            <App/>
        </BrowserRouter>    
    </Provider>, 
document.getElementById("root"));