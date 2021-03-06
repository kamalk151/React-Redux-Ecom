import React, { useEffect, useState } from 'react';
import Product from './Product';
import { setProduct } from './../Action/product.action';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

function Shop() {

    const appDispatch = useDispatch()
    const appState = useSelector(state => state.product);
    const [loadImg, setLoadImg] = useState(true)

    useEffect(() => {
        if (appState.product.length == 0) {
            appDispatch(setProduct())
        }
        console.log(appState.product.length)
    }, [])

    useEffect(() => {
        if (appState.product.length !== 0) {
            console.log(appState, 'produc', appState.product.length)
            setLoadImg(false)
        }
    }, [appState.product])

    // loader img   
    if (loadImg) {
        return (<img src="/assets/img/loader.gif" alt="loader" title="Something is running wrong on the server" style={{ 'margin': 'auto', 'width': '50%' }} />);
    }

    return (
        <div className="single-product-area">
            <div className="zigzag-bottom"></div>
            <div className="container">
                <div className="row">
                    {appState.product.map((item, index) => {
                        item.qty = 1
                        return <Product item={item} key={index}></Product>
                    })}
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
            {/* End mainmenu area */}
        </div>
    );

}

export default Shop;
