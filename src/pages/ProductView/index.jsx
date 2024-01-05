import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import PopularProductSection from '../Home/PopularProductSection'
import ProductDescription from './ProductDescription'
import ReviewSection from './ReviewSection'
import MainProductSection from './MainProductSection'


const ProductView = () => {
    
    return (

        <>
            <Meta title='Product Name'/>
            <BreadCrumb title='Product Name'/>

            <MainProductSection/>


            <ProductDescription/>


            <ReviewSection/>

            <PopularProductSection/>
        </>

    )
}

export default ProductView