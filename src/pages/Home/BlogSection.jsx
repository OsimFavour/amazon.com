import React from 'react'
import BlogCard from '../../components/BlogCard'

const BlogSection = () => {
    return (
        <section className="blog-wrapper py-5 home-wrapper-2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            Our Latest News
                        </div>
                    </div>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                    <BlogCard/>
                </div>
            </div>
        </section>
    )
}

export default BlogSection