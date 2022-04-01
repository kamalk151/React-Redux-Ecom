import productType from './../Constant/product.type'

let initailState = {
  product: []
}

const productReducer = (state = initailState, action) => {

  switch(action.type) {
    
    case productType.SETPRODUCTS: 
    return {
      ...state,
      product: action.product
    }
    default: return state
  }

}

export default productReducer;
