import {createStore} from 'redux'
import userReducer from './../Reducer/user.reducer'

//let rootStore = {user: userReducer};

export default createStore(userReducer)