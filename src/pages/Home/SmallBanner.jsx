import React from 'react'

const SmallBanner = () => {
    return (
        <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
            <div className="small-banner position-relative">
                <img
                    src="images/catbanner-01.jpg" 
                    className='img-fluid rounded-3'
                    alt="main banner" 
                />
                <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>Laptops Max</h5>
                    <p>From $1699.00 <br/> or $64.62/mo</p>
                </div>
            </div> 

            <div className="small-banner position-relative">
                <img
                    src="images/catbanner-03.jpg" 
                    className='img-fluid rounded-3'
                    alt="main banner" 
                />
                <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy iPad Air</h5>
                    <p>From $599.00 or <br/>$49.91/mo for 12mo.*</p>
                </div>
            </div>

            <div className="small-banner position-relative">
                <img
                    src="images/catbanner-02.jpg" 
                    className='img-fluid rounded-3'
                    alt="main banner" 
                />
                <div className="small-banner-content position-absolute">
                    <h4>16% off</h4>
                    <h5>SmartWatch 7.</h5>
                    <p>Shop the latest band <br/>styles and colors.</p>
                </div>
            </div>

            <div className="small-banner position-relative">
                <img
                    src="images/catbanner-04.jpg" 
                    className='img-fluid rounded-3'
                    alt="main banner" 
                />
                <div className="small-banner-content position-absolute">
                    <h4>Free Engraving</h4>
                    <h5>AirPods Max</h5>
                    <p>High-fidelity playback & <br/>ultra-low distortion</p>
                </div>
            </div>
            
        </div>
    )
}

export default SmallBanner