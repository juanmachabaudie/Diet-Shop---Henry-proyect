export const GET_CATALOGUE = 'GET_CATALOGUE'
export const SEARCH_PRODUCTS = 'SEARCH_PRODUCTS'
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY'

export function getCatalogue() {
  return function (dispatch) {
    return fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: GET_CATALOGUE, payload: data });
      });
  };
}


export function searchProducts(name) {
    
    return function(dispatch) {
        return fetch(`http://localhost:3001/products/search?name=${name}`)
        .then(res => res.json())
        .then(data => 
        dispatch({type: SEARCH_PRODUCTS, payload: data}))
          
    }
  }

  export function filterByCategory(category) {
    return function(dispatch) {
      return fetch('http://localhost:3001/products/filterByCategory')
      .then(res => res.json())
      .then(products => {
        let categories = products.filter(product=> product.categories.includes(category))
        dispatch({type: FILTER_BY_CATEGORY, payload: categories })
      })
    }
  }
