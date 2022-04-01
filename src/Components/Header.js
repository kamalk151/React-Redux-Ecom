import React from 'react';
import { Link } from 'react-router-dom';
import TopHead from './TopHead';
import NavBar from './NavBar'
import { useSelector} from 'react-redux';

function Header() {
    const appState = useSelector(state => state.cart)
    let cartInfo = cartPrice(appState)       

    return (
        <>  
            {/*Top Header Strip */}

            <TopHead  />

            <div className="site-branding-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="logo">
                                <h1><Link to="/"><img src="assets/img/logo.png" /></Link></h1>
                            </div>
                        </div>
                        
                        <div className="col-sm-6">
                            <div className="shopping-item">
                            <Link to="/cart">Cart - <span className="cart-amunt">$ {cartInfo.cartPrice.toFixed(2)}</span> 
                            <i className="fa fa-shopping-cart"></i><span className="product-count">{cartInfo.cartQty}</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* End site branding area */}
            
            <NavBar />
            {/* End mainmenu area */}
    
        </>
    )
}

/**
 * 
 * @param {*} appState 
 * @returns 
 */
function cartPrice(appState) {
    if(appState.cart) {
        let cartPrice = appState.cart.reduce((acc, curr) => {
            return acc = (acc + (curr.price * curr.qty))
        },0)
       let cartQty = appState.cart.length;
        return {cartPrice : cartPrice, cartQty: cartQty}
    }
    return {cartPrice : 0, cartQty: 0}
}

export default Header;
