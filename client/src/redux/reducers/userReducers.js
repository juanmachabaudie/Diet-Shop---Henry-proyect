import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT} from '../actions/userActions'

const initialState={
    
    loggedIn: false,
    fetching: false,
    
    
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
      case LOGIN:
          return {
              ...state,
              fetching: true
          }
      case LOGIN_SUCCESS:
          return {
              ...state,
              fetching: false,
              ...action.payload,
              loggedIn: true
          }
      case LOGIN_ERROR:
          return {
              ...state,
              fetching: false,
              error: action.payload
          }
      case LOG_OUT: 
      return {
      loggedIn: false,
      fetching: false
       //quedaria todo en false
      }
      default: return state;
  }
}



// export default function userReducers(state = initialState, action) {
//     switch (action.type) {
//       case ADD_USER:
//         return {
//           ...state,
//           message: action.payload,
//         };
//       case LOGIN:
//         return {
//         ...state, 
//         fetching: true
//         }
//       case LOGIN_SUCCESS:
//         return {
//         ...state,
//         fetching: false,
//         ...action.payload,
//         loggedIn: true
//         }
//       case LOGIN_ERROR: 
//       return {
//       ...state,
//       fetching: false,
//       user: [...action.payload]
//       }
//       case LOG_OUT:
//         return {
//         ...initialState //queda todo en false 
//         }
//       default:
//         return state;
//     }
//   }
  
