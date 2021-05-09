import {GET_CATALOGUE, SEARCH_PRODUCTS} from '../actions/catalogueAction'

const initialState= {
    products: [],
    loading: false,
    searchProducts: []
}

export default function catalogueReducer(state = initialState, action){
    switch(action.type){
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
        default:
            return state 
    }
}