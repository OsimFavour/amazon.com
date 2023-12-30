import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link, useLocation } from 'react-router-dom'

const ProductCard = ({ grid }) => {
    let location = useLocation()
    return (
        <div 
            className={`${location.pathname === '/store' ? `gr-${grid}` : 'col-lg-3 col-md-4 col-6 pb-2'}`}>
            <Link className="product-card position-relative">

                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>

                <div className="product-image">
                    <img src="images/watch.jpg" alt="" />
                    <img src="images/watch2.png" alt="" />
                </div>

                <div className="product-details">
                    <h6 className="brand">Havels</h6>
                    <h5 className='product-title'>
                        Kids headphones bulk 10 pack multi 
                        colored for students
                    </h5>

                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />

                    <p className={`description ${grid === 12 ? 'd-block' : 'd-none'}`}>
                        Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud 
                        exercitation ullamco laboris nisi ut aliquip 
                        ex ea commodo consequat.
                    </p>

                    <p className="price">$100.00</p>
                </div>

                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                            <img src="images/prodcompare.svg" alt="compare" />
                        </Link>

                        <Link>
                            <img src="images/view.svg" alt="view" />
                        </Link>

                        <Link>
                            <img src="images/add-cart.svg" alt="add to cart" />
                        </Link>
                    </div>    
                </div>
            </Link>
        </div>
    )
}

export default ProductCard