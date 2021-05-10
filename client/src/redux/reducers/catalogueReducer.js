
import {GET_CATALOGUE, SEARCH_PRODUCTS, FILTER_BY_CATEGORY} from '../actions/catalogueAction'


const initialState= {
    products: [],  //aca van los productos
    loading: false, 
    searchProducts: [], //aca van los productos que buscamos por el searchBar
    filterByCategory: [], //filtrado de productos por categories 

}


export default function catalogueReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATALOGUE:

        
        return {
            ...state,
            products: action.payload
            
        }
    case 'LOADING':
        return {
            ...state,
            loading: true
        }
    case SEARCH_PRODUCTS: 
    return {
    ...state,
    searchProducts: action.payload
    }
    case 'LOADED':
        return {
            ...state,
            loading: false
        }
    case FILTER_BY_CATEGORY:
        return {
            ...state,
            filterByCategory: action.payload
        }
        
        default:
            return state 
    }
}

