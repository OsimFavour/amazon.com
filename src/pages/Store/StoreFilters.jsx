import React from 'react'
import Color from '../../components/Color'

const StoreFilters = () => {
    return (
        <div className='filter-card mb-3'>
            <h3 className="filter-title">Filter By</h3>
            <div>
                <h5 className="sub-title">Availability</h5>
                
                <div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="" id="" />
                        <label className="form-check-label" htmlFor=''>
                            In Stock (1)
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="" id="" />
                        <label className="form-check-label" htmlFor=''>
                            Out of Stock (0)
                        </label>
                    </div>
                </div>



                <h5 className="sub-title">Price</h5>

                <div className='d-flex align-items-center gap-10'>
                    <div className="form-floating">
                        <input type="email" className="form-control py-1" id="floatingInput" placeholder="From"/>
                        <label htmlFor="floatingInput">From</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" className="form-control py-1" id="floatingInput1" placeholder="To"/>
                        <label htmlFor="floatingInput1">To</label>
                    </div>
                </div>



                <h5 className="sub-title">Color</h5>

                <div>
                    <Color/>
                </div>


                
                <h5 className="sub-title">Size</h5>

                <div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="" id="color-1" />
                        <label className="form-check-label" htmlFor='color-1'>
                            S (2)
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="" id="color-2" />
                        <label className="form-check-label" htmlFor='color-2'>
                            M (2)
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="" id="color-2" />
                        <label className="form-check-label" htmlFor='color-2'>
                            L (0)
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="" id="color-2" />
                        <label className="form-check-label" htmlFor='color-2'>
                            XL (2)
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="" id="color-2" />
                        <label className="form-check-label" htmlFor='color-2'>
                            XXL (0)
                        </label>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default StoreFilters