import React from 'react';
import { NavLink } from 'react-router-dom';
 
function NavBar() {
    return (
        <>  
            <div className="mainmenu-area">
                <div className="container">
                    <div className="row">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div> 
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                <NavLink to="/home" activeClassName="active"> Home </NavLink>
                                <NavLink to="/shop" activeClassName="active" >Shop Page </NavLink>
                                <NavLink to="/cart" activeClassName="active"> Cart </NavLink>
                                <NavLink to="/checkout" activeClassName="active"> Checkout </NavLink>                          
                                <NavLink to="/about" activeClassName="active"> About </NavLink>
                                <NavLink to="/contact" activeClassName="active"> Contact </NavLink>
                            </ul>
                        </div>  
                    </div>
                </div>
            </div> {/* End mainmenu area */}    
        </>
    )
}

export default NavBar;
