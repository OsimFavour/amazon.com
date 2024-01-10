import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import WishlistProductCard from './WishlistProductCard'
import Container from '../../components/Container'


const Wishlist = () => {

    return (

        <>
            <Meta title='Wishlist'/>
            <BreadCrumb title='Wishlist'/>

            <Container class1="wishlist-wrapper home-wrapper-2 py-5">
               
                    <div className="row">

                        <WishlistProductCard/>
                        <WishlistProductCard/>
                        <WishlistProductCard/>

                    </div>
                    
            </Container>
        </>
    )
}

export default Wishlist