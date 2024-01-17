import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
import { useFormik } from 'formik'
import * as yup from 'yup'


const Login = () => {
    return (
        <>
            <Meta title='Login'/>
            <BreadCrumb title='Login'/>

            <Container class1='auth-wrapper py-5 home-wrapper-2'>

                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3>Login</h3>
                            <form action='' className='auth-form'>
                                <CustomInput type='email' name='email' placeholder='Email'/>

                                <CustomInput type='password' name='password' placeholder='Password' className='mt-1'/>
                                
                                <div>
                                    <Link to='/forgot-password'>
                                        Forgot Password
                                    </Link>

                                    <div className='auth-button'>
                                        <button className='button border-0' type='submit'>Login</button>
                                        <Link to='/signup' className='button signup'>Sign Up</Link>
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

export default Login