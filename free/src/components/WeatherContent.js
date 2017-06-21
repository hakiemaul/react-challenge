import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { getCurrentWeather } from '../actions'
import Forecasts from './Forecasts'

class WeatherContent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      city: '',
      humidity: '',
      temp: '',
      weather: '',
      weatherList: [],
      cityInput: 'Jakarta'
    }

    this.getWeather = this.getWeather.bind(this)
    this.cityChange = this.cityChange.bind(this)
    this.findWeather = this.findWeather.bind(this)
  }

  getWeather (data) {
    this.setState({
      city: data.name,
      humidity: data.main.humidity,
      temp: Math.round(data.main.temp - 273),
      weather: data.weather[0].description
    })
  }

  componentDidMount () {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Jakarta&APPID=e8fa0052e0118e027517a03e5b1da02e')
    .then(response => {
      this.getWeather(response.data)
      this.props.getWeather(response.data)
      console.log(this.props);
    })
    .catch(err => console.log(err))
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Jakarta&APPID=e8fa0052e0118e027517a03e5b1da02e')
    .then(response => {
      this.setState({
        weatherList: response.data.list
      })
    })
    .catch(err => console.log(err))
  }

  findWeather (e) {
    e.preventDefault()
    let newCity = this.state.cityInput
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + newCity + '&APPID=e8fa0052e0118e027517a03e5b1da02e')
    .then(response => {
      this.getWeather(response.data)
      this.setState({
        cityInput: ''
      })
    })
    .catch(err => console.log(err))
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + newCity + '&APPID=e8fa0052e0118e027517a03e5b1da02e')
    .then(response => {
      this.setState({
        weatherList: response.data.list
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
                {this.state.city}
              </p>
              <p className="subtitle">
                Kelembaban : {this.state.humidity} %
                Temperatur : {this.state.temp} ℃
              </p>
              <p className="subtitle">
               Summary : {this.state.weather}
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
          <Forecasts weatherList={this.state.weatherList}/>
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
    getWeather: (weather) => dispatch(getCurrentWeather(weather))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContent)