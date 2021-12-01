import { websiteUsersConstants } from "../actions/constants"

const initState = {
    websiteUsers : []
}

export default (state = initState, action) =>{
    switch(action.type){
      case websiteUsersConstants.GET_ALL_WEBSITE_USERS_SUCCESS:
          state ={
              ...state,
              websiteUsers : action.payload.WebsiteUsers,
          }
          break;
    }
    return state;
}