// Created a reusable Input component that can be used throughout the application for various input fields.
// The component accepts props for label, type, className, and other input attributes.
// It uses React's forwardRef to allow parent components to access the input element's ref directly. ref is useful for focusing the input programmatically or for other direct DOM manipulations.

import React, { useId } from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",                 // additional class names can be passed via className prop. className means CSS classes which can be used to style the input element.
    ...props                        // this props will capture any additional props passed to the Input component
}, ref) {
    const id = useId()              // useId is a react hook that generates a unique id for the input element. This is useful for accessibility purposes.
    return (
        <div className='w-full'>
            {label && <label
                className='inline-block mb-1 pl-1'
                htmlFor={id}>                            // htmlFor links the label to the input element for accessibility purposes. It's not necesary to use htmlFor, but it's a good practice to do so.
                {label}
            </label>
            }
            <input
            type = {type}
            className = {`px-3 py-2 rounded-lg bg-white 
                text-black outline-none focus:bg-gray-50
                duration-200 border border-gray-200 w-full
                ${className}`}
                ref = {ref}
                {...props}
                id = {id}
            />
        </div>
    )
})

export default Input
