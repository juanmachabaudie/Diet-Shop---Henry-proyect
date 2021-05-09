import { GET_CATALOGUE } from "../actions/catalogueAction";


const initialState= {
    products: [],
    loading: false
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
    case 'LOADED':
        return {
            ...state,
            loading: false
        }
        default:
            return state 
    }
}

