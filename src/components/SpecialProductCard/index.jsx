import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'

const SpecialProductCard = () => {
    return (
        <div className="col-lg-4 col-md-6 pb-3">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img src="images/tab.jpg" width='100%' className='img-fluid' alt="watch" />
                    </div>

                    <div className='special-product-content'>
                        <h5 className="brand">Havels</h5>
                        <h6 className="title">
                            Samsung Galaxy Note18+ Mobile Phone; Sim...
                        </h6>

                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />

                        <p className="price">
                            <span className="red-p">$100</span> &nbsp;
                            <strike>$200 </strike>
                        </p>

                        <div className="discount-till d-flex align-items-center gap-10">
                            <p className='my-1 d-inline-flex gap-1 sp-font'>
                                <b>5 </b>days
                            </p>

                            <div className="d-flex gap-10 align-items-center">
                                <span className='badge rounded-circle p-2 bg-danger'>05</span>:
                                <span className='badge rounded-circle p-2 bg-danger'>24</span>:
                                <span className='badge rounded-circle p-2 bg-danger'>13</span>
                            </div>

                            
                        </div>

                        <div className="prod-count my-3 sp-font">
                            <p>Products: 5</p>
    
                            <div 
                                className="progress" 
                                role="progressbar" 
                                aria-label="Basic example" 
                                aria-valuenow="25" 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                                style={{height: '6px'}}
                            >
                                <div className="progress-bar bg-success" style={{width: '25%'}}></div>
                            </div>
                            
                        </div>

                        <Link className='button'>Add To Cart</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialProductCard