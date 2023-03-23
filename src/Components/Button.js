import React from 'react'

const Button = ({name}) => {
  return (
    <div>
       <button className='text-xs px-2 py-1 m-2 sm:px-5 sm:py-2  font-normal text-md bg-gray-300 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
