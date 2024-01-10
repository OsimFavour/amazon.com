import React from 'react'
import ProductCard from '../../components/ProductCard'
import Container from '../../components/Container'

const FeaturedSection = () => {
    return (
       

        <Container class1='featured-wrapper py-5 home-wrapper-2'>

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

        </Container>
    )
}

export default FeaturedSection