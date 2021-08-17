import cartType from './../Constant/cart.type'

const addToCart = (cartVal) => {  
  
  return {
    type: cartType.ADDTOCART,
    cart: { productName :  cartVal.name, qty: cartVal.qty, price: cartVal.price }
  }
}

const updateToCart = (cartVal) => {  
  return {
    type: cartType.UPDATETOCART,
    cart: { productName :  cartVal.name, qty: cartVal.qty, price: cartVal.price }
  }

}

//product sections

export default {addToCart, updateToCart};
