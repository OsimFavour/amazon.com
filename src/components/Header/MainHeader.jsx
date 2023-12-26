import React from 'react'
import { Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
import Actions from './Actions'

const MainHeader = () => {
    return (
        <header className="header-upper py-3 pb-0 mb-0">
            <div className="container align-items-center">
                <div className="row">
                    <div className="col">
                        <h2>
                            <Link className='text-white'>amazon</Link>
                        </h2>
                    </div>

                    <div className="col-5">
                        <div className="input-group">
                            <input 
                                type="text" 
                                className="form-control py-2" 
                                placeholder="Search Product Here..." 
                                aria-label="Search Product Here..." 
                                aria-describedby="basic-addon2"
                            />
                            <span className="input-group-text" id="basic-addon2">
                                <BsSearch className='fs-6'/>
                            </span>
                        
                        </div>
                    </div>

                    <div className="col-5">
                        <Actions/>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default MainHeader