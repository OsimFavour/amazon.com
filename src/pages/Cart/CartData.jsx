import React from 'react'
import watch from '../../assets/images/watch.jpg'
import { MdDelete } from "react-icons/md"

const CartData = () => {
    return (
        <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
            <div className='cart-col-1 gap-15 d-flex align-items-center'>
                <div className='w-25'>
                    <img src={watch} className='img-fluid' alt="" />
                </div>

                <div className='w-75'>
                    <p>Samsung Galaxy A23 128GB 6GB RAM Purple Color</p>
                    <p>Color: #000000</p>
                    <p>Size: S</p>
                </div>
            </div>

            <div className='cart-col-2'>
                <h5 className="price">
                    $ 100
                </h5>
            </div>


            <div className='cart-col-3 d-flex align-items-center gap-10'>
                <div>
                    <input 
                        className='form-control' 
                        type="number"
                        min={1}
                        max={10} 
                    />
                </div>

                <div>
                    <MdDelete className='text-danger' />
                </div>
            </div>

            <div className='cart-col-4'>
                <h5 className="price">
                    $ 100
                </h5>
            </div>
        </div>
)
}

export default CartData