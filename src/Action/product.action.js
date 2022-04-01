import productType from './../Constant/product.type'
import axios from 'axios';

/** Fetch product list */
const getShopProducts = async () => {
  try {
      let product_data = await axios.get('https://fakestoreapi.com/products/')      
      return product_data.data
  }
  catch(err) {
      console.log('Err:', err )
      return err;
  }
}

/* fetch the product and set state for shop page */
const setProduct = () => {
  return async function(dispatch){
    let data = await getShopProducts()
    console.log(data,'=data')
    dispatch({
      type: productType.SETPRODUCTS,
      product: data
    })
  }
}

/* Fetch products details*/
const getProduct = async (productId) => {  
  let proDetail =  await axios.get(`https://fakestoreapi.com/products/${productId ?? ''}`)
  return proDetail;
}

const producInfo1 = (proVal) => {
  return {
    type: productType.SETPRODUCTS,
    product: proVal
  }
} 

export {setProduct, getProduct};
