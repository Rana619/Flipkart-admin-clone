import axios from "../helper/axios";
import { 
   adminUsersConstants, 
   categoryConstants, 
   homePageConstants, 
   orderConstants, 
   pageConstants, 
   productConstants, 
   websiteUsersConstants 
  } from "./constants";
  
  export const getInitialData = () => {
    return async (dispatch) => {
      dispatch({ type: pageConstants.GET_ALL_PAGES_REQUEST });
      const res = await axios.post(`/initialData`);
      if (res.status === 200) {
        const { categories, products, orders, pages, WebsiteUsers, adminUsers, homePage } = res.data;
        dispatch({
          type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
          payload: { categories },
        });
        dispatch({
          type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
          payload: { products },
        });
        dispatch({
          type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
          payload: { orders },
        });
        dispatch({
          type : websiteUsersConstants.GET_ALL_WEBSITE_USERS_SUCCESS,
          payload : {WebsiteUsers}
        })
        dispatch({
          type : adminUsersConstants.GET_ALL_ADMIN_USERS_SUCCESS,
          payload : { adminUsers }
        })
        dispatch({
          type : homePageConstants.GET_HOMEPAGE_SUCCESS,
          payload : { homePage }
        })
        dispatch({
          type: pageConstants.GET_ALL_PAGES_SUCCESS,
          payload: { pages },
        });
      }
      console.log(res);
    };
  };