import React, { Component } from 'react';
import HomePage from "./containers/HomePage"
import ExpertProfile from "./containers/ExpertProfile"
import UserProfile from "./containers/UserProfile"
import NavBar from "./components/NavBar"
import QuestionShowPage from "./containers/questionShowPage"
import CreateUserPage from "./containers/CreateUserPage"
import LoginPage from "./containers/LoginPage"
import PostQuestionPage from "./containers/PostQuestionPage"
import { connect } from "react-redux"
import * as actions from "./actions/BrowserPropsActions"

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route path="/" exact render = {props => <HomePage {...props} />} />
          <Route path='/users/:id' render={(props)=> {
            let userId = props.match.params.id
            return <UserProfile {...props} id = {userId}/>
          }} />
          <Route path = "/experts/:id" render = {(props) =>{
            let expertId = props.match.params.id
            return <ExpertProfile {...props} id = {expertId}/>
          }}/>
          <Route path = "/post/question" render = {(props) =>{
            return <PostQuestionPage {...props} />
          }}/>
          <Route path = "/questions" render = {(props) =>{
            return <PostQuestionPage {...props} />
          }}/>
          <Route path = "/questions/:id" render = {(props) =>{
            let questionId = props.match.params.id
            return <QuestionShowPage {...props} id = {questionId}/>
          }}/>
          <Route path = "/create_user" render = {(props) =>{
            return <CreateUserPage {...props} />
          }}/>
          <Route path = "/login" render = {(props) =>{
            return <LoginPage {...props} />
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

export default connect(null, {actions})(App);
