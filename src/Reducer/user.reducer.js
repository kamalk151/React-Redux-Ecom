import userType from './../Constant/user.type'

let initialState = { setLogin: false }
const userReducer = (state = initialState, userAction) => {

  switch(userAction.type) {
    case userType.LOGIN:
      return {
        ...state,
        setLogin:true
      }
    case userType.LOGOUT:
      return {
        ...state,
        setLogin:false
      }
    default: return state;
  }

}


export default userReducer;