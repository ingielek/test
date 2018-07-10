import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Map from './components/Map'
import 'react-bootstrap'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="App">
          <Map/>
        </div>
      </div>
    );
  }
}

export default App;
