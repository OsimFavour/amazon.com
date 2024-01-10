import React from 'react'
import ProductCard from '../../components/ProductCard'
import Container from '../../components/Container'

const PopularProductSection = () => {
  return (
    <Container class1="popular-wrapper py-5 home-wrapper-2">
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
    </Container>
  )
}

export default PopularProductSection