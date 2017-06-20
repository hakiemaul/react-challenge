import React from 'react'
import axios from 'axios'

import ForecastItem from './ForecastItem'

class Forecasts extends React.Component {
  constructor () {
    super()
    this.state = {
      weatherList: []
    }

    this.getWeathers = this.getWeathers.bind(this)
  }

  getWeathers (data) {
    this.setState({
      weatherList: data
    })
  }

  componentWillMount () {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Jakarta&APPID=e8fa0052e0118e027517a03e5b1da02e')
    .then(response => {
      this.getWeathers(response.data.list)
    })
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div className="column">
        <h1 className="column is-offset-one-quarter is-one-quarter">Perkiraan cuaca</h1>
        {this.state.weatherList.map((weather, index) => (
          (weather.dt_txt.includes("06:00:00")) ? <ForecastItem
                                                    weather={weather.weather[0].description}
                                                    date={weather.dt_txt}
                                                    humidity={weather.main.humidity}
                                                    temp={weather.main.temp}
                                                    key={index}
                                                  /> : ''
        ))}
      </div>
    )
  }
}

export default Forecasts