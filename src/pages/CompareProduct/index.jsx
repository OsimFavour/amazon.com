import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import Color from '../../components/Color'
import CompareProductCard from './CompareProductCard'


const CompareProduct = () => {
  return (
    <>
      <Meta title='Compare Products'/>
      <BreadCrumb title='Compare Products'/>

      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">

            <CompareProductCard/>

            <CompareProductCard/>

            
          </div>
        </div>
      </div>

    </>
  )
}

export default CompareProduct