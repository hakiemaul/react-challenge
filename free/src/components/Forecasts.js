import React from 'react'
import { connect } from 'react-redux'

import ForecastItem from './ForecastItem'

class Forecasts extends React.Component {
  render () {
    return (
      <div className="column">
        <h1 className="column is-offset-one-quarter is-one-quarter">Perkiraan cuaca</h1>
        {this.props.forecastWeathers.map((weather, index) => (
          (weather.dt_txt.includes("06:00:00")) ? <ForecastItem
                                                    weather={weather.weather[0].description}
                                                    date={new Date(weather.dt_txt).toDateString()}
                                                    humidity={weather.main.humidity}
                                                    temp={Math.round(weather.main.temp - 273)}
                                                    key={index}
                                                  /> : ''
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    forecastWeathers: state.weather.forecastWeathers
  }
}

export default connect(mapStateToProps, null)(Forecasts)