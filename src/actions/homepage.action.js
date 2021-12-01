import { homePageConstants } from "./constants"
import axios from "../helper/axios";

const getHomePage = () => {
    return async dispatch => { 
      try {
        dispatch({ type: homePageConstants.GET_HOMEPAGE_REQUEST });
        const res = await axios.get(`/getHomePage`);
        if (res.status === 200) {
          const { homePage } = res.data;
          dispatch({
            type: homePageConstants.GET_HOMEPAGE_SUCCESS,
            payload: { homePage },
          });
        } else {
          dispatch({ 
              type: homePageConstants.GET_HOMEPAGE_FAILURE, 
              payload : {error : res.data.error}
            });
        }
      } catch (error) {
        console.log(error);
      } 
    };
  };

export const createHomePage = (form)=>{
     return async dispatch =>{
            dispatch({type : homePageConstants.CREATE_HOME_PAGE_REQUEST});
            try{
                const res = await axios.post('/homePage/create', form)
                if(res.status === 201){
                    dispatch({ type : homePageConstants.CREATE_HOME_PAGE_SUCCESS });
                    dispatch(getHomePage());
                } else {
                    dispatch({
                        type : homePageConstants.CREATE_HOME_PAGE_FAILURE,
                        payload : {error : res.data.error}
                    });
                }
            } catch(error){
                console.log(error);
            }
     }
}