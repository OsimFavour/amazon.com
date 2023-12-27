import React from 'react'
import ProductCard from '../../components/ProductCard'

const FeaturedSection = () => {
    return (
        <section className="blog-wrapper py-5 home-wrapper-2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            Our Featured Collection
                        </div>
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