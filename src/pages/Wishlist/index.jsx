import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import WishlistProductCard from './WishlistProductCard'


const Wishlist = () => {

    return (

        <>
            <Meta title='Wishlist'/>
            <BreadCrumb title='Wishlist'/>

            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">

                        <WishlistProductCard/>
                        <WishlistProductCard/>
                        <WishlistProductCard/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist