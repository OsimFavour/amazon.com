import React, { useState } from 'react'


const StoreSortGrid = () => {
    const [grid, setGrid] = useState(4)
    alert(grid)
    
    return (
        <div className="filter-sort-grid mb-4">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                    <p className="sort">Sort By</p>
                    <select name="" className='form-control form-select' id="">
                        <option value="manual">Featured</option>
                        <option value="best-selling" selected='selected'>Best Selling</option>
                        <option value="title-ascending">Alphabetically, A-Z</option>
                        <option value="title-descending">Alphabetically, Z-A</option>
                        <option value="price-ascending">Price, low to high</option>
                        <option value="price-descending">Price, high to low</option>
                        <option value="created-ascending">Date, old to new</option>
                        <option value="created-descending">Date, new to old</option>
                    </select>
                </div>

                <div className="d-flex align-items-center gap-10">
                    <p className="total-products mb-0">21 Products</p>
                    
                    <div className="d-flex gap-10 align-items-center grid">
                        <img 
                            onClick={() => setGrid(4)} 
                            src="images/gr4.svg" 
                            className='d-block img-fluid' alt="" 
                        />

                        <img 
                            onClick={() => setGrid(3)} 
                            src="images/gr3.svg" 
                            className='d-block img-fluid' alt="" 
                        />

                        <img 
                            onClick={() => setGrid(2)} 
                            src="images/gr2.svg" 
                            className='d-block img-fluid' alt="" 
                        />

                        <img 
                            onClick={() => setGrid(1)} 
                            src="images/gr.svg" 
                            className='d-block img-fluid' 
                            alt="" 
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreSortGrid