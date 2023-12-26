import React from 'react'

const TopHeader = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <p className='text-white mb-0'>
                                Free Shipping Over $100 & Free Returns
                            </p>
                        </div>

                        <div className="col-6">
                            <p className='text-end text-white'>
                                Hotline:{' '} 
                                <a className='text-white' href="tel:+234 813 003 9337">
                                    +232 233 000 3230
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </header> 
        </>
    )
}

export default TopHeader