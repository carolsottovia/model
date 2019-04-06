const initialState = {
  selectedData: []
}

const clickReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "ADD_MODEL":
      return {...state, selectedData: state.selectedData.concat(action.payload)}

    default:
      return state
  }
}

export default clickReducer