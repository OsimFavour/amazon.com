import React from 'react'
import ReactImageZoom from 'react-image-zoom'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom';


const MainProductSection = () => {

    const props = {
        width: 400,
        height: 250, 
        zoomWidth: 500,
        zoomLensStyle: 0.7, 
        img: "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D"
    };

    return (
        <div className='main-product-wrapper py-5 home-wrapper-2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className="main-product-image">

                            <div className='react-zoom'>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>

                        <div className="other-product-images">
                            <div><img className='img-fluid' src="https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
                            <div><img className='img-fluid' src="https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
                            <div><img className='img-fluid' src="https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
                            <div><img className='img-fluid' src="https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jpc3R3YXRjaHxlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
                        </div>
                    </div>



                    <div className='col-6'>
                        <div className="main-product-details">
                            <div className='border-bottom'>
                                <h3 className='title'>
                                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                                </h3>
                            </div>

                            <div className="border-bottom py-3">
                                <p className="price">$ 100</p>

                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        edit={false}
                                        activeColor='#ffd700'
                                    />
                                    <p className="mb-0 text-review">(2 Reviews)</p>
                                    <a className='review-btn' href='#review'>Write a Review</a>
                                </div>
                            </div>

                            <div className="border-bottom py-3">

                                <div className='.product-listing'>
                                   <h3 className='product-heading'>ABC :</h3> <p className='product-data'>GFd</p> 
                                </div>
                                <div className='.product-listing'>
                                   <h3 className='product-heading'>ABC :</h3> <p className='product-data'>GFd</p> 
                                </div>
                                <div className='.product-listing'>
                                   <h3 className='product-heading'>ABC :</h3> <p className='product-data'>GFd</p> 
                                </div>
                                <div className='.product-listing'>
                                   <h3 className='product-heading'>ABC :</h3> <p className='product-data'>GFd</p> 
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProductSection