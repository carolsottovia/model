import React, { Component } from "react"
import "./App.css"
import Select from "./components/Select"
import Button from "./components/Button"
import ModelDetails from "./components/ModelDetails"
import { connect } from "react-redux"
import { clickButton } from "./actions"

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
     selectIndex: "",
      data : [
        {
          name: "Ivel Z3",
          manufacturer: "Ivasim",
          year: 1969,
          origin: "Croatia"
        }, {
          name: "Bally Astrocade",
          manufacturer: "Bally Consumer Products",
          year: 1977,
          origin: "USA"
        }, {
          name: "Sord M200 Smart Home Computer",
          manufacturer: "Sord Computer Corporation",
          year: 1971,
          origin: "Japan"
        }, {
          name: "Commodore 64",
          manufacturer: "Commodore",
          year: 1982,
          origin: "USA"
        }
      ]
    }
  }

  updateSelection = (event) => {
    this.setState({ selectIndex: event.target.value })
  } 
  
  clickButton = (event) => {
    this.props.dispatch(clickButton({...this.state.data[this.state.selectIndex]}))
  }

  render() {

    return (
      <div className="App">
        <div className="selectedDetails">
          {this.props.selectedData.map((item) => {
            return <ModelDetails key={item.name} {...item}/>
          })}
        </div>
        <Select selectValue={this.state.selectIndex} data={this.state.data} updateSelection={this.updateSelection}/>
        <Button clickButton={this.clickButton} />

      </div>
    )
  }
  
}

const mapStateToProps = state => {
	return {selectedData: state.clickReducer.selectedData}
}

export default connect(mapStateToProps)(App);