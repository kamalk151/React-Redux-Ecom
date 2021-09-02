
const changeTheme = (val) => { 
  console.log(val,'theme action')
  return {
    type: val 
  }
}


export default changeTheme;
