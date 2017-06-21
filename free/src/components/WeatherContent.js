import React from 'react'
import axios from 'axios'
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
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Jakarta&APPID=e8fa0052e0118e027517a03e5b1da02e')
    .then(response => {
      this.props.getWeather(response.data)
    })
    .catch(err => console.log(err))
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Jakarta&APPID=e8fa0052e0118e027517a03e5b1da02e')
    .then(response => {
      this.props.getForecasts(response.data.list)
    })
    .catch(err => console.log(err))
  }

  findWeather (e) {
    e.preventDefault()
    let newCity = this.state.cityInput
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + newCity + '&APPID=e8fa0052e0118e027517a03e5b1da02e')
    .then(response => {
      this.props.findCurrent(response.data)
    })
    .catch(err => console.log(err))
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + newCity + '&APPID=e8fa0052e0118e027517a03e5b1da02e')
    .then(response => {
      this.props.findForecasts(response.data.list)
      this.setState({
        cityInput: ''
      })
    })
    .catch(err => console.log(err))
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
    getWeather: (weather) => dispatch(getCurrentWeather(weather)),
    getForecasts: (weathers) => dispatch(getForecasts(weathers)),
    findCurrent: (weather) => dispatch(findCityCurrent(weather)),
    findForecasts: (weathers) => dispatch(findCityForecasts(weathers))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContent)