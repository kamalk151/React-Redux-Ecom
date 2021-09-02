import React,{useEffect, useState} from 'react';

import { Link } from 'react-router-dom';
import LoginForm from './Login';
import SignupForm from './Signup';
import userAction from './../Action/user.action'
import {useDispatch,useSelector} from 'react-redux'

function TopHead() {
    let userState = useSelector(state => state);
    
    let dispatch = useDispatch();

    let [showLogin,setLogin] = useState(false); 
    let [showSignup, setSignup] = useState(false); 

    let handleLogin = () => setLogin(!showLogin);   
    
    let handleSignup = () => setSignup(!showSignup);
    return (
        <>        
        
        <LoginForm userAction={userAction} loginDisplay={showLogin} dispatchAction={dispatch} formControl={handleLogin} />        
        <SignupForm signDisplay={showSignup} formControl={handleSignup}/>

            <div className="header-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="user-menu">
                                <ul> 
                                    <li><Link to="/checkout"><i className="fa fa-user"></i> Checkout </Link></li>
                                    <li>{userState.setLogin}
                                        {userState.setLogin === true ? 
                                            <Link to="/usd" id="login-page" onClick={() => dispatch(userAction.logout())}><i className="fa fa-user"></i> Logout </Link>
                                            :    
                                            <Link to="/usd" id="login-page" onClick={handleLogin} ><i className="fa fa-user"></i> Login </Link>
                                        }
                                    </li>
                                    <li><Link to="/usd" id="signin-page" onClick={handleSignup} ><i className="fa fa-user"></i> Sign In </Link></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="header-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="dropdown dropdown-small">
                                        
                                        <Link data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle">
                                            <span className="key">currency :</span><span className="value">USD </span>
                                            <b className="caret"></b>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/usd">USD</Link></li>
                                            <li><Link to="/usd">INR</Link></li>
                                            <li><Link to="/usd">GBP</Link></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown dropdown-small">
                                        <Link to="/usd" data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle" >
                                            <span className="key">language :</span><span className="value">English </span><b className="caret"></b>
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li><Link to="/usd">English</Link></li>
                                            <li><Link to="/usd">French</Link></li>
                                            <li><Link to="/usd">German</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* End header area */}
    
        </>
    )
}

export default TopHead;
