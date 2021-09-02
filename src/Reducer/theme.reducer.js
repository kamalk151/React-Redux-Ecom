 
const initialCart = {
  theme:[]
};
/**
 * Cart reducer
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const themeReducer = (state = initialCart, action) => {
    console.log({...state}, 'redcer') 
 
  switch(action.type) {     
    case 'grey':       
      return {
        ...state,
        theme: { 'BackgroundColor': '#f4f4f4','fontColor': '#6e6a6a'}
      }
    
    case 'green': return {
      ...state,
      theme: { 'BackgroundColor': 'green','fontColor': 'white'}
    }

    case 'pink' : return {
      ...state,
      theme: { 'BackgroundColor': 'pink','fontColor': '#6e6a6a'}
    }

    default: return state

  }

}

export default themeReducer;