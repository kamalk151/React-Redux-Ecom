import React,{useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

function ProductDetail(props) {    
    const { productId } = useParams()
    const [productDetail, setProductDetail] = useState([])
    
    const fetchProductDetail = async () => {
        
        try {            
            let proDetail = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            if(proDetail) setProductDetail(proDetail.data)
        } catch(err) {
            console.warn(`Err: ${err}`)
        }
    } 
    
    useEffect(() => {        
        if(productId && productId != '') fetchProductDetail();
    },[])

    return (    
        
        <div className="col-md-3 col-sm-6">
            <div className="single-shop-product">
                <div className="product-upper img" style={{ 'width': '40%', 'overflow': 'hidden', 'height': '180px', 'margin': 'auto' }}>
                    <img src={productDetail.image} alt={productDetail.title} />
                </div>
                <h3 ><Link to={`product/${productDetail.id}`} > {productDetail.title} </Link></h3>
                <div className="product-carousel-price">
                    <ins>${productDetail.price} </ins> <del>${productDetail.price - 10}</del>
                </div>             
                <div className="product-option-shop">
                    <Link onClick = {'' } className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70">Add to cart</Link>
                </div>                       
            </div>
        </div>
    );    
}

export default ProductDetail;
