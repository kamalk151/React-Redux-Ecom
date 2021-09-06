import cartType from './../Constant/cart.type'

const addToCart = (cartVal) => {  
 
  return {
    type: cartType.ADDTOCART,
    cart: cartVal
  }
}

const updateToCart = (itemInfo) => {

  return {
    type: cartType.UPDATETOCART,
    cart: itemInfo
  }

}

const deleteToCart = (itemInfo) => {
     
  return {
    type: cartType.DELETETOCART,
    cart: itemInfo
  }

}

//product sections
// This is default export 
export default {addToCart, updateToCart, deleteToCart};

