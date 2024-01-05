import React from 'react'
import ReactStars from 'react-rating-stars-component'

const ReviewForm = () => {
    return (
        <div id='review' className='review-form py-4'>
            <form action='' className='d-flex flex-column gap-15 pt-3'>
                <h4>Write A Review</h4>
                <div>
                    <p>Name</p>
                    <input 
                        type='text' 
                        className='form-control' 
                        placeholder='Enter your name'
                    />
                </div>

                <div>
                    <p>Email</p>
                    <input 
                        type='email' 
                        className='form-control'
                        placeholder='example@email.com' 
                    />
                </div>

                <div>
                    <p className='mb-0'>Rating</p>
                    <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={true}
                        activeColor='#ffd700'
                    />
                </div>

                <div>
                    <input 
                        type='text' 
                        className='form-control'
                        placeholder='Give your review a title'
                    />
                </div>

                <div>
                    <p>Body of Review (1500)</p>
                    <textarea 
                        name='' 
                        id='' 
                        className='w-100 form-control' 
                        cols='30' 
                        rows='4'
                        placeholder='Write your Comments Here'
                    >

                    </textarea>
                </div>

                <div className='d-flex justify-content-end'>
                    <button className='button border-0'>Submit Review</button>
                </div>

            </form>
        </div>
    )
}

export default ReviewForm