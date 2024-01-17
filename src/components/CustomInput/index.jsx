import React from 'react'

const CustomInput = ({ type, name, placeholder, className, value, onChange, onBlur }) => {

    return (
        <div>
            <input 
                type={type} 
                name={name}
                placeholder={placeholder}
                className={`form-control ${className}`}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    )
}

export default CustomInput