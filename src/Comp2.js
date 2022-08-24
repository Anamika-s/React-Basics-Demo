import React from 'react'

export const Comp2 = (props) => {
  return (
    <div>Comp2 

      <h1> Your Details are : </h1>
      {props.name} <br/> {props.address} <br/> {props.age}
    </div>
  )
}
