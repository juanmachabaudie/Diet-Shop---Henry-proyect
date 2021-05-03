import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Animate from './Animate.js';
import { Provider } from 'react-redux';
import {store} from './redux/store/index';
import {BrowserRouter} from 'react-router-dom';

ReactDom.render(    
    <Provider store={store}>        
        <BrowserRouter> 
            <Animate />
        </BrowserRouter>    
    </Provider>, 
document.getElementById("root"));