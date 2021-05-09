export const getCategories = () => async (dispatch) => {
    try {
        dispatch({
            type: 'LOADING' // loading true
        })
        const res = await fetch('http://localhost:3001/category')
        const resJson = await res.json();
        dispatch({
            type: 'GET_CATEGORIES',
            payload: resJson
        })
    } catch (error) {
        console.log(error)
    }
}

export const postProduct = (datos) => {
    return async (dispatch) => {
        console.log(datos)
        const res = await fetch ('http://localhost:3001/products/create',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(datos)
        })
        console.log(res)
        const resJson = await res.json()
        dispatch({
            type: 'POST_PRODUCT',
            payload: resJson
        })
        console.log(resJson)
    }
}
