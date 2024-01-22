import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { loginUser } from '../../features/user/userSlice'
import { useDispatch } from 'react-redux'


const loginSchema = yup.object({
    email: yup
    .string()
    .email('Email Should Be Valid')
    .required('Email Address is Required'),
    password: yup.string().required('Password is Required'),
  });


const Login = () => {

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            email_or_phone: '',   
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: values => {
            console.log(formik.values)
            dispatch(loginUser(values))
          
        },
    });


    return (
        <>
            <Meta title='Login'/>
            <BreadCrumb title='Login'/>

            <Container class1='auth-wrapper py-5 home-wrapper-2'>

                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3>Login</h3>
                            <form 
                                action='' 
                                className='auth-form'
                                onSubmit={formik.handleSubmit}
                            >


                                <CustomInput 
                                    type='email' 
                                    name='email' 
                                    placeholder='Email or Phone Number' 
                                    value={formik.values.email_or_phone}
                                    onChange={formik.handleChange('email_or_phone')}
                                    onBlur={formik.handleBlur('email_or_phone')}
                                />

                                <div className="error">
                                    {formik.touched.email_or_phone && formik.errors.email_or_phone}
                                </div>

                                {formik.values.email_or_phone}

                                <CustomInput 
                                    type='password' 
                                    name='password' 
                                    placeholder='Password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange('password')}
                                    onBlur={formik.handleBlur('password')}
                                />

                                    {formik.values.password}
                                <div className="error">
                                    {formik.touched.password && formik.errors.password}
                                </div>


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