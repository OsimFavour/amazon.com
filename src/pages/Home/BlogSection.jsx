import React from 'react'
import BlogCard from '../../components/BlogCard'
import Container from '../../components/Container'

const BlogSection = () => {
    return (
        <Container class1="blog-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                    <div className="section-heading">
                        Our Latest News
                    </div>
                </div>

                <div className="col-md-4 mb-5">
                    <BlogCard/>
                </div>

                <div className="col-md-4 mb-5">
                    <BlogCard/>
                </div>

                <div className="col-md-4 mb-5">
                    <BlogCard/>
                </div>

                <div className="col-md-4 mb-5">
                    <BlogCard/>
                </div>
                
            </div>
        </Container>
    )
}

export default BlogSection