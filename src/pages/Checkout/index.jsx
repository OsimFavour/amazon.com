import React from 'react'
import ContactInformation from './ContactInformation'
import ProductDisplay from './ProductDisplay'
import Container from '../../components/Container'

const Checkout = () => {
    return (
        <>

            <Container className='checkout-wrapper py-5 home-wrapper-2'>
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
            </Container>

        </>
    )
}

export default Checkout