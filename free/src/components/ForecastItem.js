import React from 'react'

class ForecastItem extends React.Component {
  render () {
    return (
      <div className="card column is-one-quarter is-offset-6">
        <div className="card-content">
          <p className="title">
            {this.props.date}
          </p>
          <p className="subtitle">
            Kelembaban : {this.props.humidity} %
            Temperatur : {this.props.temp} ℃
          </p>
          <p className="subtitle">
           Summary : {this.props.weather}
          </p>
        </div>
        <footer className="card-footer">
          <p className="card-footer-item">
            <small>Provided by OpenWeatherMap</small>
          </p>
        </footer>
      </div>
    )
  }
}

export default ForecastItem