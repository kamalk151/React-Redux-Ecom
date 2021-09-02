import React,{useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';
import {useDispatch} from 'react-redux'
import cartAction from './../Action/cart.action';

function ProductDetail(props) {    
    const appDispatch = useDispatch()
    const { productId } = useParams()
    const [productDetail, setProductDetail] = useState([])
    let [qty, setQty] = useState(1)
    useEffect(() => {
        /*Assigned protect detail */
        if(productId && productId != '') fetchProductDetail();
    },[])
    
    /* Fetch single product */
    const fetchProductDetail = async () => {        
        try {            
            let proDetail = await axios.get(`https://fakestoreapi.com/products/${productId}`)
            if(proDetail) { 
                setProductDetail(proDetail.data);
                console.log(proDetail.data) }
        } catch(err) {
            console.warn(`Err: ${err}`)
        }
    } 
    /* Maintain the Qty */
    const qtyHandle = (type, event) => {         
        if(type === 'increment') {
            setQty(++qty);
        } else {
            let _qty = qty - 1
            setQty(_qty < 1 ? 1 : _qty)
        }        
    }

    return (    
        <div className="single-product-area">   
            <div className="zigzag-bottom"></div>
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-sm-8">
                        <div className="single-shop-product">
                            <div className="product-upper img" style={{ 'width': '40%', 'overflow': 'hidden', 'height': '180px', 'margin': 'auto' }}>
                                <img src={productDetail.image} alt={productDetail.title} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">    
                        <h3 ><Link to={`product/${productDetail.id}`} > {productDetail.title} </Link></h3>
                        <div className="product-carousel-price">
                            <ins>${productDetail.price}</ins> <del>${productDetail.price - 10}</del>
                        </div>

                        <div className="product-option-shop mb-3 col-md-12">
                            <div className="">
                                <button onClick={() => qtyHandle('decrement') } className="form-btn" style={{ 'float':'left' }}>-</button>
                                    <input type="text" value={qty} className="form-control" style={{'textAlign':'center', "width" : "80px",'float':'left','height': '2em' }} />
                                <button onClick={() => qtyHandle('increment') } className="form-btn" > + </button>
                            </div>
                            <br />
                            <Link onClick = {() => appDispatch(cartAction.addToCart(productDetail)) } className="add_to_cart_button ml-10" data-quantity="1" data-product_sku="" 
                            data-product_id="70"> Buy Now </Link>
                        </div>
                        <p className="pro_desc mt-2 text-justify"> { productDetail.description } </p>
                    </div>
                </div>
            </div>
        </div>
    );    
}

export default ProductDetail;
