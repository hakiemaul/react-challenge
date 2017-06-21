import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import Earthquake from './Earthquake'
import { getEarthquakes } from '../actions'

class EarthquakeData extends React.Component {
  componentDidMount () {
    let to = this.props.match.params.to
    let from = this.props.match.params.from
    this.props.getEarthquakes(from, to)
  }

  render () {
    return (
      <div>
      <div className="columns">
        <div className="content column has-text-centered">
          <h1>Data Gempa Dari {this.props.match.params.from} Hingga {this.props.match.params.to}</h1>
        </div>
      </div>
      <div className="columns">
      <table className="table" style={{margin: 'auto', width: '80%'}}>
        <thead>
          <tr>
            <th><abbr title="No">No</abbr></th>
            <th>Event</th>
            <th>Magnitudo</th>
            <th>Lokasi</th>
            <th>Kemungkinan Tsunami</th>
            <th>Waktu Kejadian</th>
          </tr>
        </thead>
        <Earthquake />
        <tbody>
        </tbody>
      </table>
      </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEarthquakes: (from, to) => dispatch(getEarthquakes(from, to))
  }
}

export default connect(null, mapDispatchToProps)(EarthquakeData)