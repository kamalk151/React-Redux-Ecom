import React from 'react';
import {Link} from 'react-router-dom'
import {Form,Table} from 'react-bootstrap'
import {useSelector,useDispatch} from 'react-redux';
import cartAction from './../../Action/cart.action';
import CartList from './CartList';

function Cart() {

    const dispatch = useDispatch()
  
    let addedCart = useSelector(state => state.cart).cart ?? []       
    let cartTr = madeCartList(addedCart, handleQty)
    let proList = cartTr[0]
    let totalPrice = cartTr[1]
    
    //Handle the item Qty
    function handleQty(e){          
        dispatch(cartAction.updateToCart({ id:e.target.dataset.id, qty:e.target.value}))        
    }
    
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
                            <Table>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Image</th>
                                    <th>Qty</th>
                                    <th>Price</th>                                    
                                    <th>Total</th>                                   
                                    </tr>
                                </thead>                          
                                <tbody>
                                    {   /* Checking cart is empty or not*/
                                        proList.length > 0 ? 
                                        <CartList proList={proList} totalPrice={totalPrice} /> : 
                                        <tr>
                                            <td colSpan="5" className="text-center">
                                                Cart is empty!
                                            </td>
                                        </tr>
                                    } 
                                </tbody>
                            </Table>
                    </div> 
                    <div className="col-md-6"> </div>
                    <div className="col-md-6">                   
                        <Link className="col-md-4 btn btn-primary mb-5 ml-5" to={'shop'} >Continue</Link>       
                        <Link className="col-md-4 btn btn-danger mb-5 ml-5" to={'checkout'} >Proceed To Checkout</Link>
                    </div>
                </div>
                </Form>
            </div> {/*End brands area*/}
        </>
    );
}

/**
 * Prepare the cart list
 * @param {*} addedCart 
 * @returns 
 */
function madeCartList(addedCart, action){
    let totalPrice = 0;
    let subTotal = 0;

    let imgSize = {
        width:'40px'
    }
     
    let cartList = addedCart.map((val, ind) => {
        subTotal = ( val.qty * val.price);
        totalPrice = totalPrice + subTotal;
        return <tr key={ind}>
                <td> {ind + 1} </td>
                <td> {val.title} </td>
                <td> <img src={val.image} alt={val.title} style= { imgSize }/> </td>
                <td> <input type="text" value={val.qty} data-id={val.id} className="" onChange={e => action(e, action) } /> </td>
                <td> $ {val.price} </td>                                                    
                <td> $ {subTotal} </td>
                <td><Link to={''} className="btn-danger btn" onClick="" ><i className="fa fa-trash"></i></Link></td>
            </tr> 
    })

    return [cartList, totalPrice]
}

export default Cart;