import axios from 'axios'

export const getCurrentWeather = () => {
  return dispatch => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Jakarta&APPID=e8fa0052e0118e027517a03e5b1da02e')
    .then(response => {
      dispatch({
        type: 'GET_WEATHER',
        payload: response.data
      })
    })
    .catch(err => console.log(err))
  }
}

export const getForecasts = () => {
  return dispatch => {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Jakarta&APPID=e8fa0052e0118e027517a03e5b1da02e')
    .then(response => {
      dispatch({
        type: 'GET_FORECASTS',
        payload: response.data.list
      })
    })
    .catch(err => console.log(err))
  }
}

export const findCityCurrent = (city) => {
  return dispatch => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=e8fa0052e0118e027517a03e5b1da02e')
    .then(response => {
      dispatch({
        type: 'FIND_CITY_CURRENT',
        payload: response.data
      })
    })
    .catch(err => console.log(err))
  }
}

export const findCityForecasts = (city) => {
  return dispatch => {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=e8fa0052e0118e027517a03e5b1da02e')
    .then(response => {
      dispatch({
        type: 'FIND_CITY_FORECASTS',
        payload: response.data.list
      })
    })
    .catch(err => console.log(err))
  }
}

export const getEarthquakes = (from, to) => {
  return dispatch => {
    axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=' + from + '&endtime=' + to + '&minmagnitude=5')
    .then(response => {
      dispatch({
        type: 'GET_EARTHQUAKES',
        payload: response.data.features
      })
    })
    .catch(err => console.log(err))
  }
}