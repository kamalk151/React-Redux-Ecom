import {combineReducers}  from "redux";
import cartReducer from './Reducer/cart.reducer';
import userReducer from './Reducer/user.reducer';
import productReducer from './Reducer/product.reducer';

const rootReucer = combineReducers({ cart:cartReducer, user:userReducer, product:productReducer })
export default rootReucer;