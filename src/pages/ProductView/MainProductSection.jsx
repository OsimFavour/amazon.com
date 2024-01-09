import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component'
import { Link } from 'react-router-dom';
import Color from '../../components/Color';
import MainProductImage from './MainProductImage';
import { GoGitCompare } from 'react-icons/go'
import { MdFavoriteBorder } from 'react-icons/md'


const MainProductSection = () => {


    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
            
        } 
        
        catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };


    return (
        <div className='main-product-wrapper py-5 home-wrapper-2'>
            <div className='container'>
                <div className='row main-product shadow'>
                   <MainProductImage/>



                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>
                                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                                </h3>
                            </div>

                            <div className='border-bottom py-3'>
                                <p className='price'>$ 100</p>

                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        edit={false}
                                        activeColor='#ffd700'
                                    />
                                    <p className='mb-0 text-review'>(2 Reviews)</p>
                                    <a className='review-btn' href='#review'>Write a Review</a>
                                </div>
                            </div>

                            <div className='border-bottom py-3'>

                                <div className='product-listing'>
                                   <h3 className='product-heading'>Type :</h3> <p className='product-data'>Headsets</p> 
                                </div>

                                <div className='product-listing'>
                                   <h3 className='product-heading'>Brand :</h3> <p className='product-data'>Havels</p> 
                                </div>

                                <div className='product-listing'>
                                   <h3 className='product-heading'>Category :</h3> <p className='product-data'>Headphones</p> 
                                </div>

                                <div className='product-listing'>
                                   <h3 className='product-heading'>Tags :</h3> <p className='product-data'>Speaker</p> 
                                </div>

                                <div className='product-listing'>
                                   <h3 className='product-heading'>SKU :</h3> <p className='product-data'>SKU027</p> 
                                </div>

                                <div className='product-listing'>
                                   <h3 className='product-heading'>Availability :</h3> <p className='product-data'>$41 In Stock</p> 
                                </div>

                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                   <h3 className='product-heading'>Size :</h3> 
                                   <div className='d-flex flex-wrap gap-15'>
                                    <span className='badge border border-1 bg-white text-dark border-secondary'>S</span>
                                    <span className='badge border border-1 bg-white text-dark border-secondary'>M</span>
                                    <span className='badge border border-1 bg-white text-dark border-secondary'>XL</span>
                                    <span className='badge border border-1 bg-white text-dark border-secondary'>XXL</span>
                                   </div>
                                </div>

                                <div className='d-flex gap-10 flex-column mt-2 mb-3'>
                                   <h3 className='product-heading'>Color :</h3> 
                                    <Color/>
                                </div>

                                <div className='d-flex align-items-center gap-10 flex-row mt-2 mb-3'>
                                   <h3 className='product-heading'>Quantity :</h3> 
                                   <div>
                                        <input 
                                            type='number'
                                            name=''
                                            min={1}
                                            max={10}
                                            className='form-control'
                                            style={{ width: '70px'}}
                                        />
                                   </div>

                                   <div className='d-flex align-items-center gap-30 ms-5'>
                                        <button className='button border-0' type='submit'>Add To Cart</button>
                                        <button className='button signup'>Buy It Now</button>
                                    </div>
                                </div>

                                <div className='d-flex align-items-center gap-15'>
                                    <div>
                                        <Link><GoGitCompare className='fs-5 me-2'/> Add To Compare</Link>
                                    </div>
                                    <div>
                                        <Link><MdFavoriteBorder className='fs-5 me-2'/> Add To Wishlist</Link>
                                    </div>
                                </div>


                                <div className='d-flex gap-10 flex-column my-2'>
                                    <h3 className='product-heading'>Shipping & Returns:</h3> 
                                    <p className='product-data'>
                                        Free shipping and returns available on all orders! <br /> We ship all US domestic orders within <b>5-10 business days!</b>
                                    </p> 
                                </div>

                                <div className='product-listing'>
                                    <h3 className='product-heading'>Copy Product Link:</h3> 
                                    
                                    <Link className='form-control' onClick={() => copyToClipBoard('some text to copy')}>
                                        Click here to copy product link
                                    </Link>
                                    {copySuccess}

                                </div>

                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainProductSection