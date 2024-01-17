import React from 'react'
import Meta from '../../components/Meta'
import BreadCrumb from '../../components/BreadCrumb'
import Container from '../../components/Container'
import CustomInput from '../../components/CustomInput'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { registerUser } from '../../features/user/userSlice'


const signUpSchema = yup.object({
    first_name: yup.string().required('First Name is Required'),
    last_name: yup.string().required('Last Name is Required'),
    password: yup.string().required('Password is Required'),
    email: yup.string().required().email('Email Should Be Valid'),
    phone_no: yup.string().required('Phone Number is Required'),
  });



const SignUp = () => {

    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {                             
            first_name: '',
            last_name: '',
            password: '',
            email: '',
            phone_no: '',
        },
        validationSchema: signUpSchema,
        onSubmit: values => {
          dispatch(registerUser(values))
        },
    });


    return (
        <>
            <Meta title='Sign Up'/>
            <BreadCrumb title='Sign Up'/>


            <Container class1='auth-wrapper py-5 home-wrapper-2'>
                
                <div className='row'>
                    <div className='col-12'>

                        <div className='auth-card'>
                            <h3>Sign Up</h3>
                            <form 
                                action='' 
                                className='auth-form'
                                onSubmit={formik.handleSubmit}
                            >
                                
                                <CustomInput 
                                    type='text' 
                                    name='first_name' 
                                    placeholder='First Name' 
                                    value={formik.values.first_name}
                                    onChange={formik.handleChange('first_name')}
                                    onBlur={formik.handleBlur('first_name')}
                                />

                                <div className="error">
                                    {formik.touched.first_name && formik.errors.first_name}
                                </div>

                                


                                <CustomInput 
                                    type='text' 
                                    name='last_name' 
                                    placeholder='Last Name' 
                                    value={formik.values.last_name}
                                    onChange={formik.handleChange('last_name')}
                                    onBlur={formik.handleBlur('last_name')}
                                />

                                <div className="error">
                                    {formik.touched.last_name && formik.errors.last_name}
                                </div>


                                <CustomInput 
                                    type='password' 
                                    name='password' 
                                    placeholder='Password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange('password')}
                                    onBlur={formik.handleBlur('password')}
                                />

                                <div className="error">
                                    {formik.touched.password && formik.errors.password}
                                </div>
                                
                                
                                <CustomInput 
                                    type='email' 
                                    name='email' 
                                    placeholder='Email' 
                                    value={formik.values.email}
                                    onChange={formik.handleChange('email')}
                                    onBlur={formik.handleBlur('email')}
                                />

                                <div className="error">
                                    {formik.touched.email && formik.errors.email}
                                </div>


                                <CustomInput 
                                    type='tel' 
                                    name='phone_no' 
                                    placeholder='Phone Number'  
                                    className='mt-1 mb-3' 
                                    value={formik.values.phone_no}
                                    onChange={formik.handleChange('phone_no')}
                                    onBlur={formik.handleBlur('phone_no')}
                                />

                                <div className="error">
                                    {formik.touched.phone_no && formik.errors.phone_no}
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
                
            </Container>
        </>
    )
}

export default SignUp