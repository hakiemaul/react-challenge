import React from 'react'
import axios from 'axios'

import Earthquake from './Earthquake'

class EarthquakeData extends React.Component {
  constructor () {
    super ()
    this.state = {
      earthquakes: []
    }
  }

  componentDidMount () {
    let to = this.props.match.params.to
    let from = this.props.match.params.from
    axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=' + from + '&endtime=' + to + '&minmagnitude=5')
    .then(response => {
      this.setState({
        earthquakes: response.data.features
      })
    })
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
        <Earthquake earth={this.state.earthquakes} />
        <tbody>
        </tbody>
      </table>
      </div>
      </div>
    )
  }
}

export default EarthquakeData