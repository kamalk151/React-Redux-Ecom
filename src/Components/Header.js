import React from 'react';
import { Link } from 'react-router-dom';
import TopHead from './TopHead';
import NavBar from './NavBar'
import { useSelector, useDispatch } from 'react-redux';

function Header() {
    const appState = useSelector(state => state.cart).cart
    console.log(appState)
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
                            <Link to="/cart">Cart - <span className="cart-amunt">$100</span> 
                            <i className="fa fa-shopping-cart"></i><span className="product-count">5</span></Link>
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

export default Header;
