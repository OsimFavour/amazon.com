import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'

const ForgotPassword = () => {
    return (
        <>
            <Meta title='Forgot Password'/>
            <BreadCrumb title='Forgot Password'/>

            <Container class1='auth-wrapper py-5 home-wrapper-2'>

                <div className='row'>
                    <div className='col-12'>

                        <div className='auth-card'>
                            <h3>Reset Your Password</h3>

                            <p>
                                We will send you an email to reset your password
                            </p>

                            <form action='' className='auth-form'>

                                <CustomInput type='email' name='email' placeholder='Email' />

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

            </Container>
        </>
    )
}

export default ForgotPassword