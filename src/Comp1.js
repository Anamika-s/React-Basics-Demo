import React from 'react'
import {Comp2} from './Comp2'
import Comp3 from './Comp3';
export const Comp1 = () => {
  return (
    <div>
      <Comp2 name="Ajay" address="Delhi" age={27}/>
      <Comp3 name="Deepak" address="N Delhi" age={28}/>
       </div>
  )
}
