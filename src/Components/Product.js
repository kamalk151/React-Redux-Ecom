import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import cartAction from './../Action/cart.action';
import { useDispatch } from 'react-redux';

function Product(props) {    
    const appDispatch = useDispatch()
    
    let title = {
        'fontSize':'1rem'
    }

    return (    
        
        <div className="col-md-3 col-sm-6">
            <div className="single-shop-product">
                <div className="product-upper img" style={{ 'width': '40%', 'overflow': 'hidden', 'height': '180px', 'margin': 'auto' }}>
                    <img src={props.item.image} alt={props.item.title} />
                </div>
                <h3 style={title}><Link to={`product/${props.item.id}`} > {props.item.title} </Link></h3>
                <div className="product-carousel-price">
                    <ins>${props.item.price} </ins> <del>${props.item.price - 10}</del>
                </div>             
                <div className="product-option-shop">
                    <Link onClick = {() => appDispatch(cartAction.addToCart(props.item)) } className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="70">Add to cart</Link>
                </div>                       
            </div>
        </div>
    );    

}

export default Product;
