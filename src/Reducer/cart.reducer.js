import cartType from './../Constant/cart.type'

const initialCart = []
const cartReducer = (state = initialCart, action) => {

  switch(action.type) {
    case cartType.ADDTOCART : 
      return {      
        cart: [{...state, productName: action.cart.productName }]
      }

    case cartType.UPDATETOCART: 
      return {
      ...state,
      cart:{ productName: action.cart.productName}
    }
    
    case cartType.SETPRODUCTS: return {
      ...state,
      product: action.product
    }

    default: return state
  }

}

export default cartReducer;
