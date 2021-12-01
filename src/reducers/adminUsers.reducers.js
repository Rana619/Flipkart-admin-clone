import { adminUsersConstants } from "../actions/constants"

const initState = {
    adminUsers : []
}

export default (state = initState, action) =>{
    switch(action.type){
      case adminUsersConstants.GET_ALL_ADMIN_USERS_SUCCESS:
          state ={
              ...state,
              adminUsers : action.payload.adminUsers,
          }
          break;
    }
    return state;
}