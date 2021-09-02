import productType from './../Constant/product.type'

const getAllProduct = (proVal) => { 
  return {
    type: productType.SETPRODUCTS,
    product: proVal
  }

}

const getProduct = (proVal) => { 
  return {
    type: productType.SETPRODUCTS,
    product: proVal
  }

}

export default {getAllProduct,getProduct};
