
import { EMPTY_POST, EMPTY_PUT, GET_ALL_CATEGORIES,  GET_ALL_CATEGORIES_SUCCESS, GET_ALL_CATEGORIES_FAIL, POST_PRODUCT, POST_PRODUCT_SUCCESS, POST_PRODUCT_FAIL, GET_ALL_PRODUCT, GET_ALL_PRODUCT_SUCCESS, GET_ALL_PRODUCT_FAIL,DELETE_PRODUCT, DELETE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, PUT_PRODUCT, PUT_PRODUCT_SUCCESS, PUT_PRODUCT_FAIL} from '../constants/FormConstants';
import { POST_CATEGORIES,  POST_CATEGORIES_SUCCESS, POST_CATEGORIES_FAIL} from '../constants/FormConstants';
import { PUT_CATEGORIES,  PUT_CATEGORIES_SUCCESS, PUT_CATEGORIES_FAIL} from '../constants/FormConstants';
import { DELETE_CATEGORIES,  DELETE_CATEGORIES_SUCCESS, DELETE_CATEGORIES_FAIL} from '../constants/FormConstants';
import {COMPLETE} from '../constants/FormConstants';
import {
    AUTHENTICATED_USER,
    UNAUTHENTICATED_USER,
} from '../constants/UserConstants';
import {SET_PRODUCTS, FILTER, SET_SEARCH_RESULTS, LOADING_PRODUCTS, GET_ORDERS, SET_FAVS} from '../actions/index';
import {COMPLETE_PRODUCT, EMPTY_POST_PRODUCT, EMPTY_PUT_PRODUCT } from '../constants/FormConstants';


const initialState = {
    orders:[],
    favs: [],
    products: {
        all: [],
        filtered: [],
        searchResults: [],
    },
    loading: false,
    categories: [],
    formCategories:{
        categories:'',
        loading: false,
        error: '',
        post:'',
        render:'',
        put:'',
        work:''
    },
    formProduct:{
        products:'',
        loading: false,
        error: '',
        post:'',
        render:'',
        put:'',
        works:''
    },
    user:{
        id: "GUEST"
    }
}

export default function rootReducer(state= initialState, action) {
    switch(action.type){
        case SET_PRODUCTS: 
            return {
                ...state, 
                products: {
                    ...state.products,
                    all: action.payload,
                },
                loading: false

        }
        case LOADING_PRODUCTS:
            return {
                ...state, loading: true
            }
        case SET_SEARCH_RESULTS:
            return {
                ...state,
                products: {
                    ...state.products,
                    searchResults: action.payload,
                },
                loading: false
            }
        case FILTER: 
        return {
       ...state,
       products: {
           ...state.products,
           filtered: action.payload
       }
        }
        case GET_ALL_CATEGORIES:
            return {
                ...state, formCategories:{
                    ...state.formCategories, loading:true
                }
            }
        case GET_ALL_CATEGORIES_SUCCESS:
            return {
                ...state, categories: action.payload, formCategories:{
                    ...state.formCategories, loading: false, categories: action.payload
                }
            }
        case  GET_ALL_CATEGORIES_FAIL:
            return {
                ...state,  formCategories:{
                    ...state.formCategories, loading: false, error: action.payload
                }
            }
        case GET_ALL_PRODUCT:
            return {
                ...state,  formProduct:{
                    ...state.formProduct, loading:true
                }
            }
        case GET_ALL_PRODUCT_SUCCESS:
            return {
                ...state,  formProduct:{
                    ...state.formProduct, loading: false, products: action.payload 
                }
            }
        case  GET_ALL_PRODUCT_FAIL:
            return {
                ...state,  formProduct:{
                    ...state.formProduct, loading: false, error: action.payload
                }
            }
         case POST_CATEGORIES:
            return {
                ...state,  formCategories:{
                    ...state.formCategories, loading:true
                }
            }
        case POST_CATEGORIES_SUCCESS:
            return {
                ...state,  formCategories:{
                    ...state.formCategories, loading: false, post:'SUCCESS_POST'
                }
            }
        case  POST_CATEGORIES_FAIL:
            return {
                ...state,  formCategories:{
                    ...state.formCategories, loading: false, error: action.payload
                }
            }
         case PUT_CATEGORIES:
            return {
                ...state,  formCategories:{
                    ...state.formCategories, loading:true
                }
            }
        case PUT_CATEGORIES_SUCCESS:
            return {
                ...state,  formCategories:{
                    ...state.formCategories, loading: false, put:'SUCCESS_PUT'
                }
            }
        case  PUT_CATEGORIES_FAIL:
            return {
                ...state,  formCategories:{
                    ...state.formCategories, loading: false, error: action.payload
                }
            }
         case DELETE_CATEGORIES:
            return {
                ...state,  formCategories:{
                    ...state.formCategories, loading:true
                }
            }
        case DELETE_CATEGORIES_SUCCESS:
            return {
                ...state,  formCategories:{
                    ...state.formCategories, loading: false, render:action.payload
                }
            }
        case  DELETE_CATEGORIES_FAIL:
            return {
                ...state,  formCategories:{
                    ...state.formCategories, loading: false, error: action.payload
                }
            }
        case COMPLETE:
            return {
                ...state,  formCategories:{
                    ...state.formCategories, loading: false, work:'complete'
                }
            }
            case EMPTY_POST:
                return {
                    ...state,  formCategories:{
                        ...state.formCategories, loading: false, work:'emptyPOST'
                    }
                }
            case EMPTY_PUT:
                return {
                    ...state,  formCategories:{
                        ...state.formCategories, loading: false, work:'emptyPUT'
                    }
                }
            case POST_PRODUCT:
            return {
                ...state,  formProduct:{
                    ...state.formProduct, loading:true
                },
            }
        case POST_PRODUCT_SUCCESS:
            return {
                ...state,  formProduct:{
                    ...state.formProduct, loading: false, post:'SUCCESS_POST'
                },
                loading: false
            }
        case  POST_PRODUCT_FAIL:
            return {
                ...state,  formProduct:{
                    ...state.formProduct, loading: false, error: action.payload
                },
                loading: false
            }
        case PUT_PRODUCT:
            return {
                ...state,  formProduct:{
                    ...state.formProduct, loading:true
                }
            }
        case PUT_PRODUCT_SUCCESS:
            return {
                ...state,  formProduct:{
                    ...state.formProduct, loading: false, put:'SUCCESS_PUT'
                }
            }
        case  PUT_PRODUCT_FAIL:
            return {
                ...state,  formProduct:{
                    ...state.formProduct, loading: false, error: action.payload
                }
            }
         case DELETE_PRODUCT:
            return {
                ...state,  formProduct:{
                    ...state.formProduct, loading:false
                }
            }
        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,  formProduct:{
                    ...state.formProduct, loading: false, render:action.payload
                }
            }
        case  DELETE_PRODUCT_FAIL:
            return {
                ...state,  formProduct:{
                    ...state.formProduct, loading: false, error: action.payload
                }
            }
         case COMPLETE_PRODUCT:
            return {
                ...state,  formProduct:{
                    ...state.formProduct, loading: false, works:'complete'
                }
            }
            case EMPTY_POST_PRODUCT:
                return {
                    ...state,  formProduct:{
                        ...state.formProduct, loading: false, works:'emptyPOST_PRODUCT'
                    }
                }
            case EMPTY_PUT_PRODUCT:
                return {
                    ...state,  formProduct:{
                        ...state.formProduct, loading: false, works:'emptyPUT_PRODUCT'
                    }
                }
            case GET_ORDERS:
                return {
                    ...state, orders: action.payload
                }
            case AUTHENTICATED_USER:
                return {
                    ...state, user: action.payload
                }
        case SET_FAVS:
            return {
                ...state, favs: action.payload
            }
    default:
        return state; 
    
    }
    
}