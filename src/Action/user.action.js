import userType from './../Constant/user.type'
const login = () => {
alert('login')
  return {
    type: userType.LOGIN,
    payload: {username:'kamals@yopmail.com', _token:'token@123', setLogin: true}
  }

}

const logout = () => {
  alert('logout')
  return {
    type: userType.LOGOUT,
    payload: {username:'', _token:'', setLogin: false}
  }

}

export default {login,logout};
