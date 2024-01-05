import React from 'react'
import ReactStars from 'react-rating-stars-component'

const UserReview = () => {
    return (
        <div className='reviews mt-5'>
            <div className='review'>
                <div className="d-flex-column gap-10 align-items-center">
                    <h6>John Doe</h6>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor='#ffd700'
                    />
                </div>

                <p>Awesome</p>
            </div>
        </div>
    )
}

export default UserReview