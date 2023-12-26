import React from 'react'

const BottomFooter = () => {
    return (
        <footer className='py-4'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-center mb-0 text-white">
                            &copy; {new Date().getFullYear()}; Powered by amazon
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default BottomFooter