import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs"


const MiddleFooter = () => {
    return (
        <footer className='py-4'>
            <div className="container">
                <div className="row">

                    <div className="col-4">
                        <h4 className='text-white mb-4'>Contact Us</h4>
                        <div>
                            <address className='text-white fs-6'>
                                15 Afukang Lane, <br /> Sunny Vale <br /> Postal Code: 580311
                            </address>

                            <a href="tel:+233 678 493 4394" className='mt-3 d-block mb-1 text-white'>
                            +233 678 493 4394
                            </a>

                            <a href="mailto:balablue@gmail.com" className='mt-2 d-block mb-0 text-white mb-4'>balared@gmail.com</a>
                            
                            <div className="social-icons d-flex align-items-center gap-30">
                                <a className='text-white' href="">
                                    <BsLinkedin className='fs-5'/>
                                </a>
                                <a className='text-white' href="">
                                   <BsInstagram className='fs-5'/> 
                                </a>
                                <a className='text-white' href="">
                                   <BsGithub className='fs-5'/> 
                                </a>
                                <a className='text-white' href="">
                                   <BsYoutube className='fs-5'/> 
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="col-3">
                        <h4 className='text-white mb-4'>Information</h4>
                        <div className='footer-link d-flex flex-column'>
                            <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
                            <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                            <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                            <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                            <Link className='text-white py-2 mb-1'>Blogs</Link>
                        </div>
                    </div>


                    <div className="col-3">
                        <h4 className='text-white mb-4'>Account</h4>
                        <div className='footer-link d-flex flex-column'>
                        <Link className='text-white py-2 mb-1'>Search</Link>
                            <Link className='text-white py-2 mb-1'>About Us</Link>
                            <Link className='text-white py-2 mb-1'>Faq</Link>
                            <Link className='text-white py-2 mb-1'>Contact</Link>
                            <Link className='text-white py-2 mb-1'>Size Chart</Link>
                        </div>
                    </div>


                    <div className="col-2">
                        <h4 className='text-white mb-4'>Quick Links</h4>
                        <div className='footer-link d-flex flex-column'>
                            <Link className='text-white py-2 mb-1'>Accessories</Link>
                            <Link className='text-white py-2 mb-1'>Laptops</Link>
                            <Link className='text-white py-2 mb-1'>Headphones</Link>
                            <Link className='text-white py-2 mb-1'>Smart Watches</Link>
                            <Link className='text-white py-2 mb-1'>Tablets</Link>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default MiddleFooter