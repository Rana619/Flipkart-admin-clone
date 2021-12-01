import { productConstants } from "../actions/constants";

const initialState = {
    products : [],
    loading : false
};


export default (state = initialState, action) =>{
    switch(action.type){
        case productConstants.GET_ALL_PRODUCTS_REQUEST : 
            state = {
                ...state,
                loading : true
            }
            break;
        case productConstants.GET_ALL_PRODUCTS_SUCCESS :
            state ={
                ...state,
                products : action.payload.products,
                loading : false
            }
            break;
        case productConstants.GET_ALL_PRODUCTS_FAILURE :
            state = {
                ...state,
                loading : false,
            }
            break;
        case productConstants.ADD_PRODUCT_REQUEST : 
             state = {
                ...state,
                loading : true,
             }
             break;
        case productConstants.ADD_PRODUCT_SUCCESS :
            state = {
                ...state,
                loading : false,
            }
            break;
        case productConstants.ADD_PRODUCT_FAILURE :
            state = {
                ...state,
                loading : false,
            }
            break;
        case productConstants.DELETE_PRODUCT_BY_ID_REQUEST :
            state = {
                ...state,
                loading : true,
            }
            break;
        case productConstants.DELETE_PRODUCT_BY_ID_SUCCESS :
            state = {
                ...state,
                loading : false,
            }
            break;
        case productConstants.DELETE_PRODUCT_BY_ID_FAILURE :
            state = {
                ...state,
                loading : false,
            }
            break;
    }
    return state;
}


 