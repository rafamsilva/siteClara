import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import Gallery from './Components/Gallery/Gallery'
import Confirmation from './Components/Confirmation/Confirmation'
import Message from './Components/Message/Message'
import firebase from 'firebase'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    var config = {
      apiKey: "AIzaSyB4WHDvXr0gt2blE4g7OHwrrZR3VMZJLac",
      authDomain: "site-clara-6f8e8.firebaseapp.com",
      databaseURL: "https://site-clara-6f8e8.firebaseio.com",
      projectId: "site-clara-6f8e8",
      storageBucket: "site-clara-6f8e8.appspot.com",
      messagingSenderId: "930644165230"
    }
    firebase.initializeApp(config)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Gallery />
        <Confirmation dbase={firebase} />
        <Message dbase={firebase}/>
      </div>
    );
  }
}

export default App;
