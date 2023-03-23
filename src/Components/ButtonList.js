import React from 'react'
import Button from './Button'

export default function ButtonList() {
  const List=["All","Gaming","Song","Live","Cricket","Soccer","Cooking","Valentines"]
  return (

    <div className='flex w-full flex-nowrap overflow-x-scroll sm:justify-center sm:pt-3 sm:overflow-x-auto'>
      {List.map((items,index)=>{
        return <Button key={index} name={items}/>
      })}
    </div>
  )
}
