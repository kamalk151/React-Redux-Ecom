import React,{useState} from 'react';
import {Button,Modal} from 'react-bootstrap';

function Login({loginDisplay,formControl, dispatchAction, userAction}) {
     
    return (
        <>
             
            <Modal show={loginDisplay} onHide={formControl}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header> */}
                <form action="" method="post">
                <Modal.Body>
                    <h1>  Login  </h1>
                    <hr />                    
                    <div className="form-group">
                        <input type="text" placeholder="Enter username" name="username" className="input-text form-control" />
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder="Enter password" name="password" className="form-control input-text" />                      
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={formControl}>
                        Close
                    </Button>                    
                    <Button variant="primary" onClick={() => dispatchAction(userAction.login())} >
                        Submit
                    </Button>
                </Modal.Footer>
                </form>
            </Modal>
        </>
    );
    {/* End mainmenu area */ }

}

export default Login;
