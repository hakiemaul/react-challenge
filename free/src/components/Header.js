import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
      <div>
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h1 style={{ textAlign: 'center', fontSize: '4em'}}>HacktivBMKG</h1>
          </div>
        </div>
        <div className="columns">
          <div className="column is-2 is-offset-4">
          <Link to="/weather" className="button is-large is-primary" style={{margin:20}}>
            <span className="icon is-medium">
            <i className="fa fa-cloud"></i>
            </span>
            <span>Perkiraan Cuaca</span>
          </Link>
          <Link to="/earthquake" className="button is-large is-primary" style={{margin:20}}>
            <span className="icon is-medium">
            <i className="fa fa-globe"></i>
            </span>
            <span>Data Gempa</span>
          </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header