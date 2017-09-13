import React, { Component } from 'react';
import '../styles/App.css';
import EarthquakeList from './EarthquakeList';
import EarthquakeInfo from './EarthquakeInfo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">
            Earfquakes!
          </div>
          <EarthquakeList />
          <EarthquakeInfo />

        </div>
      </div>
    );
  }
}

export default App;
