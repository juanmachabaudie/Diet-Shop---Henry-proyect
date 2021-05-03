import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducer/index' //el reducer
import thunk from 'redux-thunk' //nos ayuda a trabajar con promesas con redux
//import {composeWithDevTools} from 'redux-devtools-extension' //nos ayuda a ver los state de la herramienta

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer, // --->>  persistedReducer
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
