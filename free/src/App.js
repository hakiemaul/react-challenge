import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import Header from './components/Header'
import Navbar from './components/Navbar'
import WeatherContent from './components/WeatherContent'
import EarthquakeContent from './components/EarthquakeContent'
import EarthquakeData from './components/EarthquakeData'
import store from './store'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Header} />
              <Route path='/weather' component={WeatherContent} />
              <Route exact path='/earthquake' component={EarthquakeContent} />
              <Route exact path='/earthquake/:from/:to' component={EarthquakeData} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
