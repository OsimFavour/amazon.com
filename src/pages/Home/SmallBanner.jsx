import React from 'react'

const SmallBanner = () => {
    return (
        <div className="d-flex flex-wrap justify-content-between align-items-center">
            <div className="small-banner-content position-relative p-3">
                <img
                    src="images/catbanner-01.jpg" 
                    className='img-fluid rounded-3'
                    alt="main banner" 
                />
                <div className="small-banner-content position-absolute">
                    <h4>Supercharged For Pros</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo</p>
                </div>
            </div>

            <div className="small-banner-content position-relative p-3">
                <img
                    src="images/catbanner-01.jpg" 
                    className='img-fluid rounded-3'
                    alt="main banner" 
                />
                <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo</p>
                </div>
            </div>

            <div className="small-banner-content position-relative p-3">
                <img
                    src="images/catbanner-02.jpg" 
                    className='img-fluid rounded-3'
                    alt="main banner" 
                />
                <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $999.00 or $41.62/mo</p>
                </div>
            </div>

            <div className="small-banner-content position-relative p-3">
                <img
                    src="images/catbanner-01.jpg" 
                    className='img-fluid rounded-3'
                    alt="main banner" 
                />
                <div className="small-banner-content position-absolute">
                    <h4>Supercharged For Pros</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>From $999.00 or $41.62/mo</p>
                </div>
            </div>
            
        </div>
    )
}

export default SmallBanner