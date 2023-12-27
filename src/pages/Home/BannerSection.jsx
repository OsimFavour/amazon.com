import React from 'react'
import SmallBannerSection from './SmallBannerSection'
import { Link } from 'react-router-dom'

const BannerSection = () => {
    return (
        <section className="home-wrapper-1 pt-3 py-5">
            <div className="container">
                <div className="row">

                    <div className="col-6">
                        
                            <div className="main-banner position-relative">
                                <img 
                                    src="images/main-banner-1.jpg" 
                                    className='img-fluid rounded-3'
                                    alt="main banner" 
                                />
                                <div className="main-banner-content position-absolute">
                                    <h4>Supercharged For Pros</h4>
                                    <h5>iPad S13+ Pro.</h5>
                                    <p>From $999.00 or $41.62/mo</p>
                                    <Link className='button'>BUY NOW</Link>
                                </div>
                            </div>
                        
                    </div>

                    <div className="col-6">
                        <SmallBannerSection/>
                    </div>

                </div>
            </div>
        </section> 
    )
}

export default BannerSection