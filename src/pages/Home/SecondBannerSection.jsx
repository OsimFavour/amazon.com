import React from 'react'
import Container from '../../components/Container'
import { services } from '../../utils/Data'

const SecondBannerSection = () => {
    return (

        <Container class1='home-wrapper-2 py-5'>
            <div className="row">
                
                <div className="col-12">
                    <div className="services d-flex align-items-center justify-content-between">
                        
                        {services?.map((service, index) => {
                            return (
                                <div className='d-flex align-items-center gap-15' key={index}>
                                    <img src={service.image} alt="services" />
                                    <div>
                                        <h6>{service.title}</h6>
                                        <p className='mb-0 p-font'>{service.tagline}</p>
                                    </div>
                                </div>
                            )
                        })}

                      
                    </div>
                </div>
                
            </div>
        </Container>

    )
}

export default SecondBannerSection