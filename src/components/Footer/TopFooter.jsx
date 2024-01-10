import React from 'react'
import newsletter from '../../assets/images/newsletter.png'

const TopFooter = () => {
    return (
        <footer className='py-4'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-5">
                        <div className="footer-top-data d-flex gap-30 align-items-center">
                            <img src={newsletter} width='25px' alt="newsletter" />
                            <h2 className='mb-0 text-white text-uppercase h-font'>Sign up for Newsletter</h2>
                        </div>
                    </div>

                    <div className="col-7">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control py-1" 
                                placeholder="Your Email Address" 
                                aria-label="Your Email Address" 
                                aria-describedby="basic-addon2"
                            />
                            <span className="input-group-text p-2 text-uppercase m-font" id="basic-addon2">
                                Subscribe
                            </span>
                        
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default TopFooter