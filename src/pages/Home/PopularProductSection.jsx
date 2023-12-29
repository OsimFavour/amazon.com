import React from 'react'
import ProductCard from '../../components/ProductCard'

const PopularProductSection = () => {
  return (
    <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="section-heading">
                        Our Popular Products
                    </h3>
                </div>
                
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                
            </div>
        </div>
    </section>
  )
}

export default PopularProductSection