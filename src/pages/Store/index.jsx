import React, { useState } from 'react'
import BreadCrumb from '../../components/BreadCrumb'
import Meta from '../../components/Meta'
import StoreRandomProducts from './StoreRandomProducts'
import StoreCategories from './StoreCategories'
import StoreFilters from './StoreFilters'
import StoreProductTags from './StoreProductTags'
import StoreSortGrid from './StoreSortGrid'
import StoreProductsList from './StoreProductsList'


const Store = () => {

    const [grid, setGrid] = useState(4)

    return (
        <>
            <Meta title='Oui Store'/>
            <BreadCrumb title='Our Store'/>

            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">

                        <div className="col-3">
                            <StoreCategories/>

                            <StoreFilters/>

                            <StoreProductTags/>

                            <StoreRandomProducts/>
                            
                        </div>

                        <div className="col-9">

                            <StoreSortGrid grid={grid} setGrid={setGrid}/>

                            <StoreProductsList grid={grid}/>

                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Store