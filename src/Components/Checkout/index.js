import React from  'react';
import Form from 'react-bootstrap/form'
function Checkout() {

    return (
        <>
            <div className="latest-product">
                <h2 class="section-title"> Checkout </h2>
                <div className="container">                
                    <div className="row">
                    <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <Form>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Please enter name" />
                                </Form.Group>

                                <Form.Group controlId="formMobile">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" placeholder="Please enter phone" />
                                </Form.Group>

                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Please enter email" />
                                </Form.Group>

                                <Form.Group controlId="formMsg">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control row={10} as="textarea" placeholder="Please enter message" />
                                </Form.Group>

                                <Form.Group controlId="formBtn">
                                    <Form.Control type="submit" />
                                </Form.Group>
                            </Form>
                        
                    </div>
                </div>
  
            </div> {/*End brands area*/}
        
            </div> {/*End brands area*/}
        </>
    );
}

export default Checkout;