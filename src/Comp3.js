import React, { Component } from 'react'

export default class Comp3 extends Component {
  constructor(props)
  {
    super(props)
     // its a function which gets invoked automatically
     // when object of Com will be created
// used to initialize the values 
// this means current object
    }
  render() {
    return (
      <div> Comp3  
         <h1> Your Details are : </h1>
      {this.props.name} <br/> {this.props.address} <br/> {this.props.age}
      </div>
    )
  }
}
