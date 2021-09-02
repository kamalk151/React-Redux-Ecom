import React from 'react';
import {Form,Table} from 'react-bootstrap'
function Cart() {

    return (
        <>
            <div className="latest-product">
                <h2 className="section-title">Cart List</h2>
            </div>
            <div className="container">                
                <Form> 
                <div className="row">
                    <div className="col-md-1"></div>
                        <div className="col-md-10">                            
                        <Form.Control type="hidden" placeholder="Please enter name" />                                
                            <Table>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                    <th>Total Price</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>10</td>
                                    </tr>
                                    
                                    <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>20</td>
                                    </tr>
                                    
                                    <tr className="">                                    
                                        <td colSpan="3"></td>
                                        <td >Sub Total</td>
                                        <td className="border-left">35</td>
                                    </tr>
                                    <tr className="">
                                        <td className="no-top-border" colSpan="3"></td>
                                        <td className="no-top-border ">Grand Total</td>
                                        <td className="no-top-border border-left">35</td>
                                    </tr>
                                </tbody>
                            </Table>
                    </div>          
                </div>
                </Form>
            </div> {/*End brands area*/}
        </>
    );
}

export default Cart;