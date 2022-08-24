import React from 'react'
import {ChildComponent} from './ChildComponent'
export const ParentComponent = () => {
  return (

    <div>
       
      <h1> Parent Component </h1> 
      <ChildComponent text="I am first child comp"/>
      <ChildComponent text="I am second child comp"/>
      <ChildComponent text="I am third child comp"/>
      <ChildComponent text="I am fourth child comp"/>

      </div>
  )
}
