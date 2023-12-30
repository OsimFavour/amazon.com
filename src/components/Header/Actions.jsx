import React from 'react'
import { Link } from 'react-router-dom'

const Actions = () => {
    return (
        <div className="header-upper-links d-flex align-items-center justify-content-between pb-4">
            <div>
                <Link to='/compare-product' className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/compare.svg" alt="compare" />
                    <p className='mb-0 p-font'>
                        Compare <br/> Products
                    </p>
                </Link>
            </div>

            <div>
                <Link to='/wishlist' className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/wishlist.svg" alt="wishlist" />
                    <p className='mb-0 p-font'>
                        Favourite <br/> Products
                    </p>
                </Link>
            </div>

            <div>
                <Link to='/login' className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/user.svg" alt="user" />
                    <p className='mb-0 p-font'>
                        Log in <br/> My Account
                    </p>
                </Link>
            </div>

            <div>
                <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
                    <img src="/images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10 mb-0">
                        <span className="badge bg-white text-dark">0</span>
                        <p className='mb-0'>$500</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Actions