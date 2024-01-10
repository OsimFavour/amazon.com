import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import BlogCategories from '../Blog/BlogCategories'
import { Link } from 'react-router-dom'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import blog from '../../assets/images/blog.jpg'
import Container from '../../components/Container'


const BlogView = () => {
    return (
        <>
            <Meta title='Dynamic Blog Name'/>
            <BreadCrumb title='Dynamic Blog Name'/>

            <Container class1='blog-wrapper home-wrapper-2 py-5'>
    
                <div className='row'>

                    <div className='col-3'>
                        
                        <BlogCategories/>

                    </div>


                    <div className='col-9'>

                        <div className='single-blog-card'>

                            <Link className='d-flex align-items-center gap-10' to='/blog'>
                                <FaLongArrowAltLeft className='fs-4'/>
                                Back to blog
                            </Link>

                            <h3 className='title'>
                                A Beautiful Sunday Morning Renaissance
                            </h3>

                            <img src={blog} className='img-fluid w-100 my-4' alt='blog' />

                            <p>
                                You're only as good as your last collection, 
                                which is an enormous pressure. I think there 
                                is something about luxury - it's not something 
                                people need, but it's what they want. It really 
                                pulls at their heart. I have a fantastic 
                                relationship with money.Scelerisque sociosqu 
                                ullamcorper urna nisl mollis vestibulum pretium 
                                commodo inceptos cum condimentum placerat diam 
                                venenatis blandit hac eget dis lacus a parturient
                                a accumsan nisl ante vestibulum.
                            </p>

                        </div>

                    </div>
                </div>
            
            </Container>

        </>
    )
}

export default BlogView