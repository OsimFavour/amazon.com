import React from 'react'

const BestSellingSection = () => {
    return (
        <section className="famous-wrapper py-5 home-wrapper-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-3 pb-3">
                        <div className="famous-card position-relative">
                            <img src="images/applewatch.jpg" width='100%' className='img-fluid' alt="apple watch"/>
                            <div className="famous-content position-absolute">
                                <h5>Big Screen</h5>
                                <h6>Smart Watch Series 7</h6>
                                <p>From $399 or $16.62/mo. for 24 mo.*</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3 pb-3">
                        <div className="famous-card bg-white position-relative">
                            <img src="images/laptop2.jpg" width='100%' className='img-fluid' alt="apple watch"/>
                            <div className="famous-content position-absolute">
                                <h5 className='text-dark'>Studio Display</h5>
                                <h6 className='text-dark'>800 nits of brightness.</h6>
                                <p className='text-dark'>27-inch 5k Retina display</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3 pb-3">
                        <div className="famous-card position-relative">
                            <img src="images/iphone.jpg" width='100%' className='img-fluid' alt="apple watch"/>
                            <div className="famous-content position-absolute">
                                <h5 className='text-white'>Smartphones</h5>
                                <h6 className='text-white'>iPhone 13 Pro Max.</h6>
                                <p className='text-white'>From $999 or $41.62/mo for 24 mo.*</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-3 pb-3">
                        <div className="famous-card bg-dark position-relative">
                            <img src="images/headphone2.jpg" width='100%' className='img-fluid' alt="apple watch"/>
                            <div className="famous-content position-absolute">
                                <h5 className='text-white'>Home Speakers</h5>
                                <h6 className='text-white'>Room-filling sound.</h6>
                                <p className='text-white'>From $699 or $51.62/mo for 12 mo.*</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BestSellingSection