import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import ReviewForm from './ReviewForm'
import UserReview from './UserReview'
import { Link } from 'react-router-dom'

const ReviewSection = () => {

    const [orderedProduct, setOrderedProduct] = useState(true)
    
    return (
        <section className='review-wrapper home-wrapper-2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>

                        <div>
                            <h3>Customer Reviews</h3>
                            <div className='review-inner-wrapper shadow'>

                                <div className='review-header'>
                                    <div>
                                        <h4>Customer Reviews</h4>
                                        <div className='d-flex align-items-center gap-10'>
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor='#ffd700'
                                            />
                                            <p className='mb-0'>Based on 2 reviews</p>
                                        </div>
                                    </div>

                                    {orderedProduct && (
                                        <div>
                                            <Link className='text-dark text-decoration-underline'>Write a Review</Link>
                                        </div>
                                    )}

                                </div>

                                <ReviewForm/>

                                <UserReview/>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewSection