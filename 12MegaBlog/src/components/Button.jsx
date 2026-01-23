import React from 'react'
  
// A reusable Button component that accepts various props for customization. Customization means you can change the button's background color, text color, and additional class names.
function Button({                          // Destructuring props
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',                   // additional class names can be passed via className prop
    ...props                          // this props will capture any additional props passed to the Button component
}) {
    
  return (
    <div>
      return(
        // backticks are used for template literals to allow dynamic class names. We are not using single or double quotes here because we want to embed JavaScript expressions within the string.
        <button className = {`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>              // if any additional props are passed to the Button component, they will be spread onto the button element here
            {children}
        </button>
      )
    </div>
  )
}

export default Button
