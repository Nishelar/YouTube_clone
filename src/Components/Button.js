import React from 'react'

const Button = ({name}) => {
  return (
    <div>
       <button className='px-5 py-2 m-2 font-normal text-md bg-gray-300 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button
