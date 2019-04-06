import React, { Component } from "react"
import PropTypes from "prop-types"

class ModelDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() { 
    return ( 
     <div>
        <ul>
        <li>Name: {this.props.name}</li>
        <li>Manufacturer: {this.props.manufacturer}</li>
        <li>Year: {this.props.year}</li>
        <li>Origin: {this.props.origin}</li>
      </ul>
     </div>
     )
  }
}
 
export default ModelDetails

ModelDetails.propTypes = {
  name : PropTypes.string.isRequired,
  manufacturer : PropTypes.string.isRequired,
  year : PropTypes.number.isRequired,
  origin : PropTypes.string.isRequired,
}