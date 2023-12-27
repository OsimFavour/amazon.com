import React from 'react'

const SecondBannerSection = () => {
    return (
        <section className="home-wrapper-2 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                           <div className='d-flex align-items-center gap-15'>
                                <img src="images/service.png" alt="services" />
                                <div>
                                    <h6>Free Shipping</h6>
                                    <p className='mb-0 p-font'>From all orders over $5</p>
                                </div>
                           </div>

                           <div className='d-flex align-items-center gap-15'>
                                <img src="images/service-02.png" alt="services" />
                                <div>
                                    <h6>Daily Surprise Offers</h6>
                                    <p className='mb-0 p-font'>Save upto 25% off</p>
                                </div>
                           </div>

                           <div className='d-flex align-items-center gap-15'>
                                <img src="images/service-03.png" alt="services" />
                                <div>
                                    <h6>Support 24/7</h6>
                                    <p className='mb-0 p-font'>Shop with an expert</p>
                                </div>
                           </div>

                           <div className='d-flex align-items-center gap-15'>
                                <img src="images/service-04.png" alt="services" />
                                <div>
                                    <h6>Affordable Prices</h6>
                                    <p className='mb-0 p-font'>Get Factory Default Price</p>
                                </div>
                           </div>

                           <div className='d-flex align-items-center gap-15'>
                                <img src="images/service-05.png" alt="services" />
                                <div>
                                    <h6>Secure Payments</h6>
                                    <p className='mb-0 p-font'>100% Protected Payment</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondBannerSection