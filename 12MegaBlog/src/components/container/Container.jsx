import React from 'react'

function Container({children}) {          // children prop is used to get the content passed between the opening and closing tags of Container component
  return (
    <div className='w-full max-w-7xl mx-auto
     px-4'>
      {children}
    </div>
  )
}

export default Container
