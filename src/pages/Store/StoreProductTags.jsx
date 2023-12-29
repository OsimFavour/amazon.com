import React from 'react'

const StoreProductTags = () => {
    return (
        <div className='filter-card mb-3'>
            <h3 className="filter-title">Product Tags</h3>

           
            <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Headphone
                </span>

                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    iphones
                </span>

                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Laptop
                </span>

                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Smart Watches
                </span>


                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Mobile
                </span>

                <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Tablet
                </span>
            </div>

        </div>
    )
}

export default StoreProductTags