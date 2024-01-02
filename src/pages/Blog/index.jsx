import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import BlogCard from '../../components/BlogCard'
import BlogCategories from './BlogCategories'


const Blog = () => {
    return (
        <>
            <Meta title='Me Blog'/>
            <BreadCrumb title='Blogs'/>

            <div className="blog-wrapper home-wrapper-2 py-5">
                <div className="container">
                    <div className="row">

                        <div className="col-3">
                            
                            <BlogCategories/>

                        </div>


                        <div className="col-9">
                            <div className="row">
                                
                                <div className="col-6 mb-4">
                                    <BlogCard/>
                                </div>

                                <div className="col-6 mb-3">
                                    <BlogCard/>
                                </div>

                                <div className="col-6 mb-3">
                                    <BlogCard/>
                                </div>

                                <div className="col-6 mb-3">
                                    <BlogCard/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog