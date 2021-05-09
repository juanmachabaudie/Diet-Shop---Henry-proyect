import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import reducer_1 from '../reducers/reducer' //el reducer
import thunk from "redux-thunk"; //nos ayuda a trabajar con promesas con redux
//import {composeWithDevTools} from 'redux-devtools-extension' //nos ayuda a ver los state de la herramienta
import catalogue from "../reducers/catalogueReducer";
import categories from "../reducers/categoriesReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  //aca va el objeto con los nombres de los reducers ej:
  // miReducer: reducer_1  (obiamente con la respectiva importacion del reducer_1)
  catalogue: catalogue,
  categories: categories,
});

export const store = createStore(
  rootReducer, // --->>  persistedReducer
  composeEnhancers(applyMiddleware(thunk))
);
