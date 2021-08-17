import {createStore} from 'react';
import cartReducer from './../Reducer/cart.reducer'

const cartStore = createStore(cartReducer)
export default cartStore;