import React from 'react'

const MainProductImage = () => {
  return (
    
    <div className='col-6'>
        <div class="row py-3 shadow">
            <div class="col-12 mb-1">
                <div class="lightbox">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                        alt="Gallery image 1"
                        class="ecommerce-gallery-main-img active w-100"
                    />
                </div>
            </div>
            <div class="col-3 mt-1">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/14a.webp"
                    alt="Gallery image 1"
                    class="active w-100"
                />
            </div>
            <div class="col-3 mt-1">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                    alt="Gallery image 2"
                    class="w-100"
                />
            </div>
            <div class="col-3 mt-1">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                    alt="Gallery image 3"
                    class="w-100"
                />
            </div>
            <div class="col-3 mt-1">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/15a.webp"
                    alt="Gallery image 4"
                    class="w-100"
                />
            </div>
        </div>
    </div>
  )
}

export default MainProductImage