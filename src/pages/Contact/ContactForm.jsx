import React from 'react'
import { FaHome } from "react-icons/fa"
import { MdAddIcCall } from "react-icons/md"
import { RiMailLine } from "react-icons/ri"
import { FaInfo } from "react-icons/fa6"

const ContactForm = () => {
    return (
        <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">

                <div>
                    <h3 className="contact-title">Contact</h3>

                    <form action="" className='d-flex flex-column gap-15'>
                        <div>
                            <input 
                                type="text" 
                                className='form-control' 
                                placeholder='Name'
                            />
                        </div>

                        <div>
                            <input 
                                type="email" 
                                className='form-control'
                                placeholder='Email' 
                            />
                        </div>

                        <div>
                            <input 
                                type="tel" 
                                className='form-control'
                                placeholder='Mobile Number'
                            />
                        </div>

                        <div>
                            <textarea 
                                name="" 
                                id="" 
                                className='w-100 form-control' 
                                cols="30" 
                                rows="4"
                                placeholder="Comments"
                            >

                            </textarea>
                        </div>

                        <div>
                            <button className="button border-0">Submit</button>
                        </div>

                    </form>

                </div>



                <div>
                    <h3 className="contact-title">
                        Get in touch with us.
                    </h3>

                    <div>
                        <ul className="ps-0">
                            <li className='contact-icon'>
                                <FaHome className='fs-5'/>
                                <address className='mb-0'>
                                    No 27 Afukang Lane by Marian, Post Code: 520811
                                </address>
                            </li>
                            <li className='contact-icon'>
                                <MdAddIcCall className='fs-5'/>
                                <a href="tel:+91 4563423232">+91 839 8349</a>
                            </li>
                            <li className='contact-icon'>
                                <RiMailLine className='fs-5'/>
                                <a href="mailto:balablue@gmail.com">loremipsum@gmail.com</a>
                            </li>
                            <li className='contact-icon'>
                                <FaInfo className='fs-6'/>
                                <p className="mb-0">
                                    Monday - Friday 10AM - 8PM
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactForm