import React from 'react';
import Brands from './Brands';
import PromoArea from './Promo_area';
import Slider from './Slider';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Home() {

    return (
        <>
            <PromoArea />
             
            <div className="maincontent-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="latest-product">
                                <h2 className="section-title">Latest Products</h2>
                            </div>
                            <Carousel> 
                                <div className="product-f-image">
                                    <img src="assets/img/product-1.jpg" alt="" />
                                    <div className="product-hover">
                                        <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                        <a href="single-product.html" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                    </div>
                                    <h2><a href="single-product.html">Samsung Galaxy s5- 2015</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$700.00</ins> <del>$100.00</del>
                                    </div>                                 
                                </div> 

                                <div className="product-f-image">
                                        <img src="assets/img/product-2.jpg" alt="" />
                                        <div className="product-hover">
                                            <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="single-product.html" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    <h2><a href="single-product.html">Samsung Galaxy s5- 2015</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$700.00</ins> <del>$100.00</del>
                                    </div>                                 
                                </div>                                
                                
                                <div className="product-f-image">
                                        <img src="assets/img/product-3.jpg" alt="" />
                                        <div className="product-hover">
                                            <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="single-product.html" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    <h2><a href="single-product.html">Samsung Galaxy s5- 2015</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$700.00</ins> <del>$100.00</del>
                                    </div>                                 
                                </div> 
                                
                                <div className="product-f-image">
                                        <img src="assets/img/product-4.jpg" alt="" />
                                        <div className="product-hover">
                                            <a href="#" className="add-to-cart-link"><i className="fa fa-shopping-cart"></i> Add to cart</a>
                                            <a href="single-product.html" className="view-details-link"><i className="fa fa-link"></i> See details</a>
                                        </div>
                                    <h2><a href="single-product.html">Samsung Galaxy s5- 2015</a></h2>

                                    <div className="product-carousel-price">
                                        <ins>$700.00</ins> <del>$100.00</del>
                                    </div>                                 
                                </div> 

                                  
                            </Carousel>   
                        </div>
                    </div>
                </div>
            </div> {/* End main content area */}
            <Brands />

        </>
    )
}

export default Home;
