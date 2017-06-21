const initialState = {
  earthquakeData: []
}

export default (state = initialState, action) => {
  if (action.type === 'GET_EARTHQUAKES') {
    return { ...state, earthquakeData: action.payload }
  }
  return state
}