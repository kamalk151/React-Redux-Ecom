import {createStore} from 'redux'
import rootReducer from './rootReducer'

//let rootStore = {user: userReducer};

export default createStore(rootReducer)