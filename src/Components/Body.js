import React from 'react'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'

export default function Body() {
  return (
    <div className='flex'>
       <Sidebar/>
       <MainContainer/>
    </div>
  )
}
