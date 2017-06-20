import React from 'react'
import { Link } from 'react-router-dom'

class EarthquakeContent extends React.Component {
  constructor () {
    super ()
    this.state = {
      from: new Date().toISOString().split('T')[0],
      to: new Date().toISOString().split('T')[0]
    }

    this.beginDate = this.beginDate.bind(this)
  }

  beginDate (data) {
    this.setState({
      from: data
    })
  }

  toDate (data) {
    this.setState({
      to: data
    })
  }

  render () {
    return (
      <div className="columns" style={{margin: 40}}>
        <div className="column is-offset-4 is-3">
          <h1>Cari data gempa</h1>
          <div className="field">
            <label className="label">Tanggal mulai</label>
            <p className="control">
              <input type="date" className="control" onChange={(e) => this.beginDate(e.target.value)} value={this.state.from}/><br/>
            </p><br/>
            <label className="label">Tanggal akhir</label>
            <p className="control">
              <input type="date" className="control" onChange={(e) => this.toDate(e.target.value)} value={this.state.to}/>
            </p><br/>
            <Link to={`/earthquake/${this.state.from}/${this.state.to}`}>
              <button className="button is-primary">Submit</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default EarthquakeContent