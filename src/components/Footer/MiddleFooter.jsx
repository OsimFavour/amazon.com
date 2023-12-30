import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs"


const MiddleFooter = () => {
    return (
        <footer className='py-4'>
            <div className="container">
                <div className="row">

                    <div className="col-4">
                        <h4 className='footer-header'>Contact Us</h4>
                        <div>
                            <address className='text-white fs-6 m-font'>
                                15 Afukang Lane, <br /> Sunny Vale <br /> Postal Code: 580311
                            </address>

                            <a href="tel:+233 678 493 4394" className='mt-3 d-block mb-1 text-white m-font'>
                            +233 678 493 4394
                            </a>

                            <a href="mailto:balablue@gmail.com" className='mt-2 d-block mb-0 text-white mb-4 m-font'>balared@gmail.com</a>
                            
                            <div className="social-icons d-flex align-items-center gap-30">
                                <a className='text-white' href="#">
                                    <BsLinkedin className='fs-5'/>
                                </a>
                                <a className='text-white' href="#">
                                   <BsInstagram className='fs-5'/> 
                                </a>
                                <a className='text-white' href="#">
                                   <BsGithub className='fs-5'/> 
                                </a>
                                <a className='text-white' href="#">
                                   <BsYoutube className='fs-5'/> 
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="col-3">
                        <h4 className='footer-header'>Information</h4>
                        <div className='d-flex flex-column'>
                            <Link className='footer-link'>Privacy Policy</Link>
                            <Link className='footer-link'>Refund Policy</Link>
                            <Link className='footer-link'>Shipping Policy</Link>
                            <Link className='footer-link'>Terms & Conditions</Link>
                            <Link className='footer-link'>Blogs</Link>
                        </div>
                    </div>


                    <div className="col-3">
                        <h4 className='footer-header'>Account</h4>
                        <div className='d-flex flex-column'>
                            <Link className='footer-link'>Search</Link>
                            <Link className='footer-link'>About Us</Link>
                            <Link className='footer-link'>Faq</Link>
                            <Link className='footer-link'>Contact</Link>
                            <Link className='footer-link'>Size Chart</Link>
                        </div>
                    </div>


                    <div className="col-2">
                        <h4 className='footer-header'>Quick Links</h4>
                        <div className='d-flex flex-column'>
                            <Link className='footer-link'>Accessories</Link>
                            <Link className='footer-link'>Laptops</Link>
                            <Link className='footer-link'>Headphones</Link>
                            <Link className='footer-link'>Smart Watches</Link>
                            <Link className='footer-link'>Tablets</Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default MiddleFooter