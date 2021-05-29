const initialState = {
    fireImg: []
}

export default function imagesReducer(state = initialState, action) {
    switch (action.type) {
        case "SAVE_IMG":
            return {
                ...state,
                fireImg: [...state.fireImg, action.payload],
            };
        default:
            return state;
    }
}