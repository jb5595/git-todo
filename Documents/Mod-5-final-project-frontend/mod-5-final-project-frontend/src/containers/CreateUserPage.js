import React from 'react'
import { Link } from 'react-router-dom';

class CreateUserPage extends React.Component{
  constructor(){
    super()
    this.state = {
      user: {
        user_name: null,
        email: null,
        password: null,
        revenue_range: "< 500K",
        size_range: "1-25",
        location: null
      },
      errors: null
    }

  }

  render(){
    return(
      <div>
      {this.state.errors ?
         <div className="alert alert-danger" role="alert">Unable to Create User, Please Try Again</div>
         : null
       }
        <div className = "form-container">
        <form onSubmit = {this.handleSubmit} className = "col-6 offset-3">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input onChange = {this.handleChange} type="email" className="form-control" name = "email" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="user_name">Username</label>
            <input onChange = {this.handleChange} type="text" name = "user_name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">This will be your display name on the website choose something that will let you stay anonymous </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input onChange = {this.handleChange} type="password" name = "password" className="form-control" placeholder="Password"/>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Location</label>
            <input onChange = {this.handleChange} type="text" name = "location" className="form-control" placeholder="ex: Washington, DC"/>
            <small className="form-text text-muted">This will help ensure you are connnected with the right expert to answer your question</small>
          </div>
          <div className="form-group">
            <label htmlFor="revenue_range">Revenue Range</label>
            <select onChange = {this.handleChange} className="form-control" name = "revenue_range">
              <option>{'< 500K'}</option>
              <option>{'500k – 1MM'}</option>
              <option>{"1MM – 2.5MM"}</option>
              <option>{"2.5MM – 5MM"}</option>
              <option>{"5MM – 10MM"}</option>
              <option>{"10MM+"}</option>
            </select>
            <small className="form-text text-muted">This will help ensure you are connnected with the right expert to answer your question</small>
          </div>
          <div className="form-group">
            <label htmlFor="size-range">Size Range</label>
            <select onChange = {this.handleChange} className="form-control" name = "size_range">
              <option>{'1-25'}</option>
              <option>{'25-75'}</option>
              <option>{"75-150"}</option>
              <option>{"150-500"}</option>
              <option>{"500+"}</option>
            </select>
            <small className="form-text text-muted">This will help ensure you are connnected with the right expert to answer your question</small>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
        Already a user? <Link to = "/login"> Sign In </Link>
    </div>
    )
  }
  handleChange = (e) => {
    this.setState({
      user:
      {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let body = {user: this.state}
    fetch("http://localhost:3000/users/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
           Accept: "application/json"
      },
      body: JSON.stringify(body)
    }).then(resp => resp.json())
    .then(data =>{
      if (data.error){
        this.setState({
          errors: data.error
        })
      }
      console.log(data)
    }
  )
  }


}
export default CreateUserPage
