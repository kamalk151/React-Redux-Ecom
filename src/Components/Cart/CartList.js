import React from 'react'; 

//Component to cartlist
function CartList({proList, totalPrice}) {    
    return (
        <>
            { proList }
            <tr className="">                                    
                <td colSpan="4"></td>
                <td>Sub Total</td>
                <td className="border-left">$ {totalPrice.toFixed(2)}</td>
            </tr>
            <tr className="">
                <td className="no-top-border" colSpan="4"></td>
                <td className="no-top-border ">Grand Total</td>
                <td className="no-top-border border-left">$ {totalPrice.toFixed(2)}</td>
            </tr>
        </>
    )
}

export default CartList;
