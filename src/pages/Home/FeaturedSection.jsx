import React from 'react'
import ProductCard from '../../components/ProductCard'

const FeaturedSection = () => {
    return (
        <section className="featured-wrapper py-5 home-wrapper-2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">
                            Our Featured Collection
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

export default FeaturedSection