import cartType from './../Constant/cart.type'

const initialCart = {
  cart: []
};
/**
 * Cart reducer
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
const cartReducer = (state = initialCart, action) => {
  
  
  //create carts array 

  switch(action.type) {    
    case cartType.ADDTOCART :   
      let cartInfo = createCartsList(state, action)   
      return {
        ...state,
        cart: cartInfo
      }
    
    case cartType.SETPRODUCTS: return {
      ...state,
      product: action.product
    }

    default: return state
  }

}

/**
 * Create carts array
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
function createCartsList(state, action) {
  let cartInfo = 0;
  if(state.cart.length !== 0) {
    //Check cart array is not empty
    //Object.assign({},state)   
    console.log(state,'=state',action,'=ac')  
    let existingCart = [ ...state.cart ]
      let addedInCart = existingCart.find(cart => {
        if(cart.id === action.cart.id){
          return true;
        }
      });

      //Check product is exist or not
      if (addedInCart) {
        let newCart = existingCart.map((item, ind) => {
          //update qty for existing product in cart
            if(item.id === addedInCart.id) {
              item.qty = item.qty + 1
            }
          return item
        })
          cartInfo = newCart;
      } else {
        //New product add direct
        cartInfo = state.cart.concat(action.cart)
      }

  } else {
    //When cart array is empty
    cartInfo = [action.cart];
  }

  return cartInfo

}

export default cartReducer;