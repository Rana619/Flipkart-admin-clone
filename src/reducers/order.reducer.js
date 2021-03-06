import { orderConstants, productConstants } from "../actions/constants";

const initState = {
    orders : [],
    loading : false
};

export default (state = initState, action) => {
    switch(action.type){
        case orderConstants.GET_CUSTOMER_ORDER_REQUEST :
            state = {
               ...state,
               loading : true
            }
            break;
        case orderConstants.GET_CUSTOMER_ORDER_SUCCESS :
            state = {
                ...state,
                orders : action.payload.orders,
                loading : false
            };
            break;
        case orderConstants.GET_CUSTOMER_ORDER_FAILURE :
            state = {
                ...state,
                loading : false
            }
            break;
        case orderConstants.UPDATE_CUSTOMER_ORDER_REQUEST :
            state = {
                ...state,
                loading : true
            }
            break;
        case orderConstants.UPDATE_CUSTOMER_ORDER_SUCCESS :
            state = {
                ...state,
                loading : false
            }
            break;
        case orderConstants.UPDATE_CUSTOMER_ORDER_FAILURE :
            state = {
                ...state,
                loading : false
            }
            break;
    }
    return state;
}
 
