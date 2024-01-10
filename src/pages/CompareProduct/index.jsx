import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import Color from '../../components/Color'
import CompareProductCard from './CompareProductCard'
import Container from '../../components/Container'


const CompareProduct = () => {
  return (
    <>
      <Meta title='Compare Products'/>
      <BreadCrumb title='Compare Products'/>

      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
          <div className="row">

            <CompareProductCard/>

            <CompareProductCard/>

            
          </div>
      </Container>

    </>
  )
}

export default CompareProduct