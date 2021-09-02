import cartType from './../Constant/cart.type'

const addToCart = (cartVal) => {  
  
  return {
    type: cartType.ADDTOCART,
    cart: cartVal
  }
}

const updateToCart = (cartVal) => {  
  return {
    type: cartType.UPDATETOCART,
    cart: { productName :  cartVal.name, qty: cartVal.qty, price: cartVal.price }
  }

}

//product sections
// This is default export 
export default {addToCart, updateToCart};

