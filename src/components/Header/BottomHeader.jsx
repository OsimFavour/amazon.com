import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logoutUser } from '../../features/user/userSlice'
import { useDispatch } from 'react-redux'

const BottomHeader = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleLogout = () => {
        dispatch(logoutUser)
        navigate('/')
    }

    return (
        <header className="header-bottom py-3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="menu-bottom d-flex align-items-center gap-30">
                                
                            <div className="dropdown">
                                <button 
                                    className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" 
                                    type="button" id="dropdownMenuButton" 
                                    data-bs-toggle="dropdown" aria-haspopup="true" 
                                    aria-expanded="false"
                                >
                                    <img src="images/menu.svg" alt="" />
                                    <span className='me-5 d-inline-block'>Shop Categories</span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <Link className="dropdown-item text-white" to="#">Action</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-white" to="#">Another action</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item text-white" to="#">Something else here</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="menu-links">
                                <div className="d-flex align-items-center gap-15">
                                    <NavLink to='/'>Home</NavLink>
                                    <NavLink to='/product'>Our Store</NavLink>
                                    <NavLink to='/blog'>Blogs</NavLink>
                                    <NavLink to='/contact'>Contact</NavLink>
                                    <NavLink to='' onClick={handleLogout}>Logout</NavLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default BottomHeader