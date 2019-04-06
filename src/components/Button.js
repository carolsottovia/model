import React, { Component } from "react"

class Button extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }
  render() { 
    return ( 
      <button onClick={this.props.clickButton}>Add</button>
     )
  }
}
 
export default Button