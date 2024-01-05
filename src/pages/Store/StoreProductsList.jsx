import React from 'react'
import ProductCard from '../../components/ProductCard'

const StoreProductsList = ({ grid }) => {
    return (
        <div className="products-list pb-5">
            <div className="d-flex gap-10 flex-wrap">
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                <ProductCard grid={grid}/>
                
            </div>
        </div>
    )
}

export default StoreProductsList