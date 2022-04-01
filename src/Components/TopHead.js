import React,{useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './Login';
import SignupForm from './Signup';
import UserContext from './ThemeColor'
import userAction from './../Action/user.action'
import {useDispatch, useSelector} from 'react-redux'
import themeAction from './../Action/theme.action';

function TopHead() {
    let userState = useSelector(state => state.user);
    const themeContext  = useContext(UserContext)
    let dispatch = useDispatch();
    
    let [showLogin, setLogin] = useState(false); 
    let [showSignup, setSignup] = useState(false); 

    let handleLogin = () => setLogin(!showLogin);   
    
    let handleSignup = () => setSignup(!showSignup);

    let controlThemeColor = (e) => {
        alert(e.target.value)  
    }
    
    return (
        <>        
        <LoginForm userAction={userAction} loginDisplay={showLogin} dispatchAction={dispatch} formControl={handleLogin} />        
        <SignupForm signDisplay={showSignup} formControl={handleSignup}/>

            <div className="header-area" style={{'backgroundColor': themeContext.theme.BackgroundColor}}>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-8">
                            <div className="user-menu">
                                <ul>                               
                                    <li><Link to="/checkout" style={{ 'color': themeContext.theme.fontColor }}><i className="fa fa-user"></i> Checkout </Link></li>
                                    <li> {userState.setLogin}
                                        {userState.setLogin === true ? 
                                            <Link to="#" style={{'color': themeContext.theme.fontColor }} id="login-page" onClick={() => dispatch(userAction.logout())}><i className="fa fa-user"></i> Logout </Link>
                                            :    
                                            <Link to="#" style={{ 'color': themeContext.theme.fontColor }} id="login-page" onClick={handleLogin} ><i className="fa fa-user"></i> Login </Link>
                                        }
                                    </li>
                                    <li><Link to="#" id="signin-page" style={{ 'color': themeContext.theme.fontColor }} onClick={handleSignup} ><i className="fa fa-user"></i> Sign In </Link></li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="header-right">
                                <ul className="list-unstyled list-inline">
                                    <li className="dropdown dropdown-small">
                                         
                                        <select style={{'margin': '7px'}} className="select" onChange={(e) => dispatch(themeAction(e.target.value)) }>
                                            <option value="green">
                                                Green
                                            </option>
                                            <option value="pink">
                                                Pink
                                            </option>
                                            <option value="grey" selected>
                                                Grey
                                            </option>
                                        </select> 
                                       { /* <Link data-toggle="dropdown" data-hover="dropdown" className="dropdown-toggle"></Link> */}                                       
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
