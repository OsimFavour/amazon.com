import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import MapLocation from './MapLocation'
import ContactForm from './ContactForm'
import Container from '../../components/Container'


const Contact = () => {
    return (
        <>

            <Meta title='Contact Us'/>
            <BreadCrumb title='Contact Us'/>

            <Container class1="contact-wrapper py-5 home-wrapper-2">
                <div className="row">
                    
                    <MapLocation/>

                    <ContactForm/>
                </div>
            </Container>

        </>
    )
}

export default Contact