import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import PopularProductSection from '../Home/PopularProductSection'


const ProductView = () => {
    return (

        <>
            <Meta title='Product Name'/>
            <BreadCrumb title='Product Name'/>

            <div className="main-product-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>


            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            
                            <div>
                                <h4>Description</h4>
                                <p className="product-view">
                                    "At vero eos et accusamus et iusto odio dignissimos 
                                    ducimus qui blanditiis praesentium voluptatum deleniti 
                                    atque corrupti quos dolores et quas molestias excepturi
                                    sint occaecati cupiditate non provident, similique sunt
                                    in culpa qui officia deserunt mollitia animi, id est 
                                    laborum et dolorum fuga. Et harum quidem rerum facilis 
                                    est et expedita distinctio. Nam libero tempore, cum 
                                    soluta nobis est eligendi optio cumque nihil impedit 
                                    quo minus id quod maxime placeat facere possimus, omnis
                                    voluptas assumenda est, omnis dolor repellendus. 
                                    Temporibus autem quibusdam et aut officiis debitis 
                                    aut rerum necessitatibus saepe eveniet ut et voluptates 
                                    repudiandae sint et molestiae non recusandae. Itaque 
                                    earum rerum hic tenetur a sapiente delectus, ut aut 
                                    reiciendis voluptatibus maiores alias consequatur aut 
                                    perferendis doloribus asperiores repellat."
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <section className="review-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12"></div>
                    </div>
                </div>
            </section>

            <PopularProductSection/>
        </>

    )
}

export default ProductView