import React from 'react'
import Button from './Button'

export default function ButtonList() {
  const List=["All","Gaming","Song","Live","Cricket","Soccer","Cooking","Valentines"]
  return (
    <div className='flex ml-72'>
      {List.map((items,index)=>{
        return <Button key={index} name={items}/>
      })}
    </div>
  )
}
