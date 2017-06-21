import React from 'react'
import { connect } from 'react-redux'

class Earthquake extends React.Component {
  render () {
    const { earthquakes } = this.props
    const row = earthquakes.map((data, index) =>
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{data.properties.title}</td>
        <td>{data.properties.mag}</td>
        <td>{data.properties.place}</td>
        <td>{(data.properties.tsunami > 0) ? 'Ya' : 'Tidak'}</td>
        <td>{new Date(data.properties.time).toString()}</td>
      </tr>
    )
    return (
      <tbody>{row}</tbody>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    earthquakes: state.earthquake.earthquakeData
  }
}

export default connect(mapStateToProps, null)(Earthquake)