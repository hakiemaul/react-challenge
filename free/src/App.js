import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Navbar from './components/Navbar'
import WeatherContent from './components/WeatherContent'
import EarthquakeContent from './components/EarthquakeContent'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Header} />
            <Route path='/weather' component={WeatherContent} />
            <Route path='/earthquake' component={EarthquakeContent} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
