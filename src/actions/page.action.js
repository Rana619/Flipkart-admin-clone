import { pageConstants } from "./constants"
import axios from "../helper/axios";


const getAllPages = () => {
    return async dispatch => { 
      try {
        dispatch({ type: pageConstants.GET_ALL_PAGES_REQUEST });
        const res = await axios.get(`/pages`);
        if (res.status === 200) {
          const { pages } = res.data;
          dispatch({
            type: pageConstants.GET_ALL_PAGES_SUCCESS,
            payload: { pages },
          });
        } else {
          dispatch({ 
              type: pageConstants.GET_ALL_PAGES_FAILURE, 
              payload : {error : res.data.error}
            });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };


export const createPage = (form)=>{
     return async dispatch =>{
            dispatch({type : pageConstants.CREATE_PAGE_REQUEST});
            try{
                const res = await axios.post('/page/create', form)
                if(res.status === 201){
                    dispatch({ type : pageConstants.CREATE_PAGE_SUCCESS });
                    dispatch(getAllPages());
                } else {
                    dispatch({
                        type : pageConstants.CREATE_PAGE_FAILURE,
                        payload : {error : res.data.error}
                    });
                }
            } catch(error){
                console.log(error);
            }
     }
}

