import React from 'react'
import Color from '../../components/Color'

const CompareProductCard = () => {
    return (
        <div className="col-3">
            <div className="compare-product-card position-relative">

                <img 
                    src="images/cross.svg" 
                    alt="" 
                    className='position-absolute cross img-fluid'
                />

                <div className="product-card-image">
                    <img src="images/watch.jpg" width='100%' alt="" />
                </div>

                <div className="compare-product-details">
                    <h5 className="title">
                        Honor T1 7.0 1 GB RAM 8GB ROM 7Inch With Wi-Fi + 3g Tablet
                    </h5>
                    <h6 className="price mb-3 mt-3">$ 100</h6>
                    
                    <div>
                        <div className="product-detail">
                            <h5>Brand:</h5>
                            <p>Havels</p>
                        </div>

                        <div className="product-detail">
                            <h5>Type:</h5>
                            <p>Watch</p>
                        </div>

                        <div className="product-detail">
                            <h5>Availability:</h5>
                            <p>In Stock</p>
                        </div>

                        <div className="product-detail">
                            <h5>Color:</h5>
                            <Color/>
                        </div>

                        <div className="product-detail">
                            <h5>Size:</h5>
                            <div className="d-flex gap-10">
                            <p>S</p>
                            <p>M</p>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default CompareProductCard