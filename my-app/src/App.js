import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Gallery from './Components/Gallery/Gallery'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Gallery />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. 
        </p>
      </div>
    );
  }
}

export default App;
