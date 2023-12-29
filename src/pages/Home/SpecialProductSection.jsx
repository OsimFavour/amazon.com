import React from 'react'
import SpecialProductCard from '../../components/SpecialProductCard'

const SpecialProductSection = () => {
    return (
        <section className="special-wrapper py-5 home-wrapper-2">
            <div className="container">
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
            </div>
        </section>
    )
}

export default SpecialProductSection