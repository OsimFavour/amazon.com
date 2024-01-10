import React from 'react'
import SpecialProductCard from '../../components/SpecialProductCard'
import Container from '../../components/Container'

const SpecialProductSection = () => {
    return (
        <Container class1="special-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <h3 className="section-heading">
                        Special Products
                    </h3>
                </div>
            </div>

            <div className="row">
                <SpecialProductCard/>
                <SpecialProductCard/>
                <SpecialProductCard/>
            </div>
        </Container>
    )
}

export default SpecialProductSection