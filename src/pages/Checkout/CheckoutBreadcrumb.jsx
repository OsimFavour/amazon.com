import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutBreadcrumb = () => {
    return (
        <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label='breadcrumb'>
            <ol className='breadcrumb'>
                <li className='breadcrumb-item total-price'>
                    <Link to='/cart'>Cart</Link>
                </li>

                &nbsp; /

                <li className='breadcrumb-item total-price active' aria-current='page'>
                    <Link to='/information'>Information</Link>
                </li>

                &nbsp; /

                <li className='breadcrumb-item total-price'>
                    <Link to='/shipping'>Shipping</Link>
                </li>

                &nbsp; /

                <li className='breadcrumb-item total-price active' aria-current='page'>
                    <Link to='/payment'>Payment</Link>
                </li>

            </ol>
        </nav>
    )
}

export default CheckoutBreadcrumb