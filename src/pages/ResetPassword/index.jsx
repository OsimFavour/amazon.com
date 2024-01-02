import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'


const ResetPassword = () => {
    return (
        <>
            <Meta title='Reset Password'/>
            <BreadCrumb title='Reset Password'/>

            <div className='auth-wrapper py-5 home-wrapper-2'>
                <div className="container">
                    <div className='row'>
                        <div className='col-12'>

                            <div className='auth-card'>

                                <h3>Reset Password</h3>
                                <form action='' className='auth-form'>

                                    <div className='mt-1 mb-3'>
                                        <input 
                                            type='password' 
                                            name='password'
                                            placeholder='Password'
                                            className='form-control' 
                                        />
                                    </div>
                                    
                                    <div>
                                        <input 
                                            type='password' 
                                            name='confirmPassword'
                                            placeholder='Confirm Password'
                                            className='form-control'
                                        />
                                    </div>

                                    <div>

                                        <div className='auth-button'>
                                            <button 
                                                className='button border-0' 
                                                type='submit'
                                            >
                                                OK
                                            </button>
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

export default ResetPassword