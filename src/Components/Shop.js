import React,{useEffect, useState} from 'react';
import Product from './Product';
import productAction from './../Action/product.action';
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux'

function Shop() {
    
    const appDispatch = useDispatch()    
    const appState =  useSelector(state => state.product);
    const [loadImg, setLoadImg] = useState(true)

    const getProducts = async () => {
        try {
            let product_data = await axios.get('https://fakestoreapi.com/products/')            
            setLoadImg(product_data ? false : true)
            console.log(product_data.data)
            appDispatch(productAction.getAllProduct(product_data.data));
        }
        catch(err) {
            console.log('Err:', err )
        }
    }
    
    useEffect(() => {        
        getProducts()
    }, [])
    
    //Extract product from an array
    let productView = appState.product ? appState.product.map((item,index) => {
            return <Product item={item} key={index}></Product>                
        }) : []

    // loader img
    let loader = <img src="/assets/img/loader.gif" alt="loader" title="Something is running wrong on the server" style={{ 'margin': 'auto', 'width': '50%'}} />;

    return (        
        <div className="single-product-area">            
            <div className="zigzag-bottom"></div>
            <div className="container">
                <div className="row"> 
                    { loadImg ? loader : productView  }
                </div>                
                <div className="row">
                    <div className="col-md-12">
                        <div className="product-pagination text-center">
                            <nav>
                            <ul className="pagination">
                                <li>
                                <a href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                                </li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li>
                                <a href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                                </li>
                            </ul>
                            </nav>                        
                        </div>
                    </div>
                </div>
            </div>
            {/* End mainmenu area */ }
        </div>
    );    

}

export default Shop;
