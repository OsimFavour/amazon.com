import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    return (
        <>
            <Meta title='Forgot Password'/>
            <BreadCrumb title='Forgot Password'/>

            <div className='auth-wrapper py-5 home-wrapper-2'>
                
                <div className="container">

                    <div className='row'>
                        <div className='col-12'>

                            <div className='auth-card'>
                                <h3>Reset Your Password</h3>

                                <p>
                                    We will send you an email to reset your password
                                </p>

                                <form action='' className='auth-form'>
                                    <div>
                                        <input 
                                            type='email' 
                                            name='email'
                                            placeholder='Email'
                                            className='form-control'
                                        />
                                    </div>

                                    <div>

                                        <div className='auth-button flex-column'>
                                            <button className='button border-0' type='submit'>
                                                Submit</button>

                                            <Link to='/login'>
                                                Cancel
                                            </Link>
                                        </div>

                                    </div>

                                </form>

                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default ForgotPassword