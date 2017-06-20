import React from 'react'
import axios from 'axios'

import ForecastItem from './ForecastItem'

class Forecasts extends React.Component {
  render () {
    return (
      <div className="column">
        <h1 className="column is-offset-one-quarter is-one-quarter">Perkiraan cuaca</h1>
        {this.props.weatherList.map((weather, index) => (
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