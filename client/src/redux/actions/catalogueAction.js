//const axios = require('axios')

export const GET_CATALOGUE = 'GET_CATALOGUE'

export function getCatalogue() {
    return function(dispatch) {
       return fetch('http://localhost:3001/products')
        .then(res => res.json())
        .then(data => {
            
            dispatch({type: GET_CATALOGUE, payload: data})
        })
        
    }
}