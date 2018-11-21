import React, { Component } from 'react';
import ExpertProfile from "./containers/ExpertProfile"
import UserProfile from "./containers/UserProfile"
import NavBar from "./components/NavBar"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        {this.renderComponent()}
      </div>
    );
  }
  renderComponent(){
    if (true){
      return(
        <UserProfile/>
      )
    }
    else{
      return(
        <ExpertProfile/>
      )
    }
  }
}

export default App;
