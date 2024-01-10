import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'


const SignUp = () => {
    return (
        <>
            <Meta title='Sign Up'/>
            <BreadCrumb title='Sign Up'/>


            <Container class1='auth-wrapper py-5 home-wrapper-2'>
                
                <div className='row'>
                    <div className='col-12'>

                        <div className='auth-card'>
                            <h3>Sign Up</h3>
                            <form action='' className='auth-form'>
                                
                                <CustomInput type='text' name='firstName' placeholder='First Name' />
                                <CustomInput type='text' name='lastName' placeholder='Last Name' />
                                <CustomInput type='email' name='email' placeholder='Email' />
                                <CustomInput type='password' name='password' placeholder='Password' className='mt-1 mb-3' />

                                <div>

                                    <div className='auth-button'>
                                        <button className='button border-0' type='submit'>Sign Up</button>
                                    </div>
                                </div>
                                
                            </form>
                        </div>

                    </div>
                </div>
                
            </Container>
        </>
    )
}

export default SignUp