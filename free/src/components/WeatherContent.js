import React from 'react'
import { connect } from 'react-redux'

import { getCurrentWeather, getForecasts, findCityCurrent, findCityForecasts } from '../actions'
import Forecasts from './Forecasts'

class WeatherContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cityInput: 'Jakarta'
    }

    this.cityChange = this.cityChange.bind(this)
    this.findWeather = this.findWeather.bind(this)
  }

  componentDidMount () {
    this.props.getWeather()
    this.props.getForecasts()
  }

  findWeather (e) {
    e.preventDefault()
    let newCity = this.state.cityInput
    this.props.findCurrent(newCity)
    this.props.findForecasts(newCity)
    this.setState({
      cityInput: ''
    })
  }

  cityChange (data) {
    this.setState({
      cityInput: data
    })
  }

  render () {
    const { currentWeather } = this.props
    return (
      <div>
        <div className="columns" style={{margin: 40}}>
          <div className="field column is-offset-4 is-4">
            <form onSubmit={this.findWeather}>
            <label className="label">Nama Kota</label>
            <p className="control">
              <input className="input" type="text" placeholder="Masukkan nama kota.." onChange={(e) => this.cityChange(e.target.value)} value={this.state.cityInput}/>
            </p>
            </form>
          </div>
        </div>
        <div className="columns">
          <h1 className="column is-offset-one-quarter is-one-quarter"> Cuaca hari ini </h1>
          <div className="card column is-one-quarter">
            <div className="card-content">
              <p className="title">
                {currentWeather.name}
              </p>
              <p className="subtitle">
                Kelembaban : {currentWeather.humidity} %
                Temperatur : {currentWeather.temp} ℃
              </p>
              <p className="subtitle">
               Summary : {currentWeather.description}
              </p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <small>Provided by OpenWeatherMap</small>
              </p>
            </footer>
          </div>
        </div>
        <div className="columns">
          <Forecasts />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentWeather: state.weather.currentWeather
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: () => dispatch(getCurrentWeather()),
    getForecasts: () => dispatch(getForecasts()),
    findCurrent: (city) => dispatch(findCityCurrent(city)),
    findForecasts: (city) => dispatch(findCityForecasts(city))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContent)