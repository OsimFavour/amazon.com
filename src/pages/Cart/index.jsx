import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import CartData from './CartData'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'


const Cart = () => {
    return (
        <>

            <Meta title='Shopping Cart'/>
            <BreadCrumb title='Your Shopping Cart'/>

            <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                            <h4 className='cart-col-1'>Product</h4>
                            <h4 className='cart-col-2'>Price</h4>
                            <h4 className='cart-col-3'>Quantity</h4>
                            <h4 className='cart-col-4'>Total</h4>
                        </div>


                        <CartData/>
                        <CartData/>

                    </div>

                    <div className="col-12 py-2 mt-4">
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to='/product' className='button'>Continue Shopping</Link>

                            <div className='d-flex flex-column align-items-end'>
                                <h4>SubTotal: $ 200</h4>
                                <p>Taxes and shipping calculateed at checkout</p>
                                <Link to='/checkout' className='button'>
                                    Checkout
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>

        </>
    )
}

export default Cart