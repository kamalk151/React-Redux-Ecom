import React,{useState} from 'react';
import {Button,Modal} from 'react-bootstrap';

function Signup({signDisplay,formControl}) {

    return (
        <>             
            <Modal show={signDisplay} onHide={formControl}>
                {/* <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header> */}
                <form action="" method="post">
                <Modal.Body>
                    <h1>  Sign-Up  </h1>
                    <hr />
                    
                    <div className="form-group">
                        <input type="text" name="name" placeholder="Enter Name" className="form-control input-text" />                      
                    </div>                    
                    <div className="form-group">
                        <input type="text" name="phone" placeholder="Enter phone" className="form-control input-text" />                      
                    </div>                    
                    <div className="form-group">
                        <input type="text" name="username" placeholder="Enter username" className="input-text form-control" />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Enter password" className="form-control input-text" />                      
                    </div>
                    <div className="form-group">
                        <input type="text" name="address" placeholder="Enter Address" className="form-control input-text" />                      
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={formControl}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={formControl}>
                        Submit
                    </Button>
                </Modal.Footer>
                </form>
            </Modal>
        </>
    );
    {/* End mainmenu area */ }

}

export default Signup;
