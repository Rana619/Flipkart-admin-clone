import authReducers from "./auth.reducers";
import userReducers from "./user.reducers"
import productReducer from './product.reducer';
import orderReducer from './order.reducer';
import categoryReducer from './category.reducer'
import pageReducer from './page.reducers';
import websiteUsersReducers from "./websiteUsers.reducers";
import adminUsersReducers from "./adminUsers.reducers";
import homePageReducer from "./homePage.reducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
    auth : authReducers,
    user : userReducers,
    product : productReducer,
    order : orderReducer,
    category : categoryReducer,
    page : pageReducer,
    websiteUsers : websiteUsersReducers,
    adminUsers : adminUsersReducers,
    homePage : homePageReducer
});

export default rootReducer;
