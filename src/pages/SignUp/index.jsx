import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'


const SignUp = () => {
    return (
        <>
            <Meta title='Sign Up'/>
            <BreadCrumb title='Sign Up'/>


            <div className='auth-wrapper py-5 home-wrapper-2'>
                <div className="container">

                    <div className='row'>
                        <div className='col-12'>

                            <div className='auth-card'>
                                <h3>Sign Up</h3>
                                <form action='' className='auth-form'>
                                    <div>
                                        <input 
                                            type='text' 
                                            name='firstName'
                                            placeholder='First Name'
                                            className='form-control'
                                        />
                                    </div>

                                    <div>
                                        <input 
                                            type='text' 
                                            name='lastName'
                                            placeholder='Last Name'
                                            className='form-control'
                                        />
                                    </div>

                                    <div>
                                        <input 
                                            type='email' 
                                            name='email'
                                            placeholder='Email'
                                            className='form-control'
                                        />
                                    </div>

                                    <div className='mt-1 mb-3'>
                                        <input 
                                            type='password' 
                                            name='password'
                                            placeholder='Password'
                                            className='form-control' 
                                        />
                                    </div>

                                    <div>

                                        <div className='auth-button'>
                                            <button className='button border-0' type='submit'>Sign Up</button>
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

export default SignUp