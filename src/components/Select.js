import React, { Component } from "react"

class Select extends Component {

  render() {
    
    return (
        <select onChange={this.props.updateSelection} value={this.props.selectValue}>
          
          <option value="">--pick a model--</option>
          {this.props.data.map((item, i) => {
            return <option value={i} key={item.name}>{item.name} ({item.year})</option>
          })}
        </select>
    )
  }
  
}

export default Select