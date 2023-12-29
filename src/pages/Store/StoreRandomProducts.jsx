import React from 'react'
import ReactStars from "react-rating-stars-component"

const StoreRandomProducts = () => {
    return (
        <div className='filter-card mb-3'>
            <h3 className="filter-title">Random Products</h3>

            <div>
                <div className="random-products d-flex mb-3">
                    <div className="w-50">
                        <img src="images/watch.jpg"  width='100%' className='img-fluid' alt="headphone" />
                    </div>

                    <div className="w-50">
                        <h5>
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>

                        <ReactStars
                        count={5}
                        size={20}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />

                    <b>$100</b>
                    </div>
                </div>


                <div className="random-products d-flex mb-3">
                    <div className="w-50">
                        <img src="images/watch.jpg"  width='100%' className='img-fluid' alt="headphone" />
                    </div>

                    <div className="w-50">
                        <h5>
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>

                        <ReactStars
                        count={5}
                        size={18}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />

                    <b>$100</b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreRandomProducts