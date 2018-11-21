import React, { Component } from 'react';
import ExpertProfile from "./containers/ExpertProfile"
import UserProfile from "./containers/UserProfile"
import NavBar from "./components/NavBar"
import QuestionShowPage from "./containers/questionShowPage"
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route path="/" exact render = {props => <UserProfile {...props} />} />
          <Route path='/users/:id' render={(props)=> {
            let userId = props.match.params.id
            return <UserProfile {...props} id = {userId}/>
          }} />
          <Route path = "/experts/:id" render = {(props) =>{
            let expertId = props.match.params.id
            return <ExpertProfile {...props} id = {expertId}/>
          }}/>
          <Route path = "/questions/:id" render = {(props) =>{
            let questionId = props.match.params.id
            return <QuestionShowPage id = {questionId}/>
          }}/>
        </div>
      </Router>
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
