import React from 'react'
import { Link } from 'react-router-dom'
import CheckoutBreadcrumb from './CheckoutBreadcrumb'
import { FaLongArrowAltLeft } from 'react-icons/fa'


const ContactInformation = () => {
    return (
        <div className='checkout-left-data'>
            <h3 className='website-name'>Amazon</h3>

            <CheckoutBreadcrumb/>

            <h4 className='title mt-5 mb-3 total'>Contact Information</h4>

            <p className='user-details'>
                John Doe (johndoe@ecommerce.com)
            </p>

            <h4 className='mb-3'>Shipping Address</h4>

            <form action='' className='d-flex gap-15 flex-wrap justify-content-between'>
                <div className='w-100'>
                    <select name='' className='form-control form-select' id=''>
                        <option value='' selected disabled>
                            Select Country
                        </option>
                    </select>
                </div>

                <div className='flex-grow-1'>
                    <input type='text' placeholder='First Name' className='form-control' />
                </div>

                <div className='flex-grow-1'>
                    <input type='text' placeholder='Last Name' className='form-control' />
                </div>

                <div className='w-100'>
                    <input type='text' placeholder='Address' className='form-control' />
                </div>

                <div className='w-100'>
                    <input type='text' placeholder='Apartment, suite, e.t.c. (optional)' className='form-control' />
                </div>

                <div className='flex-grow-1'>
                    <input type='text' placeholder='City' className='form-control' />
                </div>

                <div className='flex-grow-1'>
                    <select name='' className='form-control form-select' id=''>
                        <option value='' selected disabled>Select State</option>
                    </select>
                </div>

                <div className='flex-grow-1'>
                    <input type='text' placeholder='Zip Code' className='form-control' />
                </div>

                <div className='w-100'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Link to='/cart' className='text-dark'><FaLongArrowAltLeft className='me-2'/> Return to Cart</Link>
                        <Link to='/cart' className='button'>Continue to Shipping</Link>
                    </div>
                </div>

            </form>

        </div>
    )
}

export default ContactInformation