import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import MapLocation from './MapLocation'
import ContactForm from './ContactForm'


const Contact = () => {
    return (
        <>

            <Meta title='Contact Us'/>
            <BreadCrumb title='Contact Us'/>

            <div className="contact-wrapper py-5 home-wrapper-2">
                <div className="container">
                    <div className="row">
                        
                        <MapLocation/>

                        <ContactForm/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact