import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render () {
    return (
      <nav className="nav" style={{ background: "lightgray" }}>
        <div className="nav-left">
          <Link to="/" className="nav-item">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo"/>
          </Link>
        </div>

        <div className="nav-center">
          <a className="nav-item">
            <span>
              Providing Weather & Earthquake Update since 2k17
            </span>
          </a>
        </div>

        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className="nav-right nav-menu">
          <a className="nav-item">
            Beranda
          </a>
        </div>
      </nav>
    )
  }
}

export default Navbar