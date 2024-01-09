import React from 'react'
import ContactInformation from './ContactInformation'
import ProductDisplay from './ProductDisplay'

const Checkout = () => {
    return (
        <>

            <div className='checkout-wrapper py-5 home-wrapper-2'>
                <div className='container-xl'>
                    <div className='row'>

                        <div className='col-7'>
                            <ContactInformation/>
                        </div>

                        <div className='col-5'>
                            <ProductDisplay/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Checkout