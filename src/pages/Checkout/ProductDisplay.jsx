import React from 'react'
import watch from '../../assets/images/watch.jpg'

const ProductDisplay = () => {
    return (
        <>


            <div className='border-bottom py-4'>
                <div className='d-flex gap-10 mb-2 align-items-center'>

                    <div className='w-75 d-flex gap-10'>
                        <div className='w-25 position-relative'>
                            <span 
                                style={{ top: '-20px', right: '-4px' }}
                                className="badge bg-secondary text-white rounded-circle p-2 position-absolute">1</span>
                            <img className='img-fluid' src={watch} alt='' />
                        </div>

                        <div className='d-flex flex-column'>
                            <h5 className="total-price">Kids Headphones bulk 10 pack multi colored for students</h5>
                            <p className='total-price'>S / #A85A5A</p>
                        </div>

                    </div>

                    <div className='flex-grow-1'>
                        <h5 className='total'>$ 100</h5>
                    </div>
                    
                </div>
            </div>

            <div className='border-bottom py-4'>
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='total'>SubTotal</p>
                    <p className='total-price'>$ 10,000</p>
                </div>

                <div className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0 total'>Shipping</p>
                    <p className='mb-0 total-price'>$ 10,000</p>
                </div>
            </div>

            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                <h4 className='total'>Total</h4>
                <h5 className='total-price'>$ 10,000</h5>
            </div>

        </>
    )
}

export default ProductDisplay