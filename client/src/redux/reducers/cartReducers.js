

const initialState= {
    productsInCart: [] //cada vez que agreguen un producto al carrito se va a agregar aca 
}

export default function cartReducer(state= initialState, action) {
    switch(action.payload) {
    
        default: return state ; 
    } 
} 