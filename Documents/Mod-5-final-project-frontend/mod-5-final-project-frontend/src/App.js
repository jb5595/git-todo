import React, { Component } from 'react';
import ExpertProfile from "./containers/ExpertProfile"
import NavBar from "./components/NavBar"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <ExpertProfile/>
      </div>
    );
  }
}

export default App;
