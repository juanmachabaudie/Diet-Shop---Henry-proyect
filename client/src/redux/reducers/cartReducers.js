import {GET_PRODUCTS_IN_CART} from '../actions/cartActions'

const initialState= {
    productsInCart: [] //cada vez que agreguen un producto al carrito se va a agregar aca 
}

export default function cartReducer(state= initialState, action) {
    switch(action.payload) {
    case GET_PRODUCTS_IN_CART:
        return {
            ...state,
            productsInCart : state.productsaction.concat(action.payload)
        }
        default: return state ; 
    } 
} 