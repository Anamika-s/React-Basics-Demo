// State Demo using Class Component
import React, { Component } from 'react'

export default class Comp4 extends Component {
  constructor(props)
  {
    super(props);
    this.state=
    {
      name:"Deepak",
      age:30
    }
  //   console.log(props)
  //   if(props!=null)
  //   {
  //   this.state=
  //   {
  //     name: props.name,
  //     age:props.age
  //   }
  // }
  // else 
  // {
  //   this.state=
  //   {
  //     name:"Deepak",
  //     age:30
  //   }
  // }
  }
  render() {
    return (
      <div>Comp4 

  <h1> Your Name is {this.state.name } </h1>
  <h2> Your Age is {this.state.age} </h2> 

      </div>
    )
  }
}
