import React from 'react'

class Earthquake extends React.Component {
  render () {
    const { earth } = this.props
    const row = earth.map((data, index) =>
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

export default Earthquake