export const GET_CATALOGUE = 'GET_CATALOGUE'
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS'

export function getCatalogue() {
    return function(dispatch) {
       return fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then(data => {
            
            dispatch({type: GET_CATALOGUE, payload: data})
        })
        
    }
}

export function searchProducts(name) {
    
    return function(dispatch) {
        return fetch(`http://localhost:3001/products/search?name=${name}`)
        .then(res => res.json())
        .then(data => 
        dispatch({type: SEARCH_PRODUCTS, payload: data}))
          
    }
  }

