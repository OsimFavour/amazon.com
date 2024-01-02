import React from 'react'

const WishlistProductCard = () => {
    return (
        <div className="col-3">
            <div className="wishlist-card position-relative">
                <img 
                    src="images/cross.svg" 
                    alt="" 
                    className='position-absolute cross img-fluid'
                />

                <div className="wishlist-card-image">
                    <img src="images/watch2.png" className='img-fluid w-100' alt="" />
                </div>

                <div className="py-3 px-3">
                    <h5 className="title">
                        Honor T1 7.0 1 GB RAM 8GB ROM 7Inch With Wi-Fi + 3g Tablet
                    </h5>
                    <h6 className="price">$ 100</h6>
                </div>
            </div>
        </div>
    )
}

export default WishlistProductCard