export const uploadImg = (imgUrl) => (dispatch) => {
    dispatch({
        type: 'SAVE_IMG',
        payload: imgUrl 
    })
} 