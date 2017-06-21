const initialState = {
  currentWeather: {},
  forecastWeathers: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_WEATHER':
      let newWeather = {
        name: action.payload.name,
        humidity: action.payload.main.humidity,
        temp: Math.round(action.payload.main.temp - 273),
        description: action.payload.weather[0].description
      }
      return { ...state, currentWeather: newWeather }
    case 'GET_FORECASTS' :
      return { ...state, forecastWeathers: action.payload }
    case 'FIND_CITY_CURRENT' :
      let newCity = {
        name: action.payload.name,
        humidity: action.payload.main.humidity,
        temp: Math.round(action.payload.main.temp - 273),
        description: action.payload.weather[0].description
      }
      return {...state, currentWeather: newCity }
    case 'FIND_CITY_FORECASTS' :
      return { ...state, forecastWeathers: action.payload }
    default:
  }
  return state
}