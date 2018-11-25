import React from "react"

class HomePage extends React.Component{
  render(){
    return(
      <div className = "home-page">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Smart Business Decisions Start Here</h1>
            <div>
              <button className = "btn btn-primary">Find a Provider</button>
              <button className = "btn btn-primary">Ask a Question</button>
            </div>
          </div>
        </div>
        <div className = "grey-top-bar">
        </div>
        <div className = "about-subsection">
          <div className = "row">
            <div className = "offset-3 offset-md-1" >
              <img
              className = "homepage-about-image"
              alt = "hand-shake"
              src = "https://images.unsplash.com/photo-1519120126473-8be7aedcd6c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a55332dfc236b13f118ef77a36b4052f&auto=format&fit=crop&w=1050&q=80"
              />
            </div>
            <div className = "homepage-about-text offset-1 col-12 col-md-4">
              <h2>Connect with Leading Experts</h2>
              <p> Proin aliquam, odio ut lacinia tempor, ex nisi fermentum lacus, eu auctor dolor magna et nibh. Nulla facilisi. Vivamus et massa enim. Morbi luctus nunc non fringilla lacinia. Cras condimentum rhoncus bibendum. Vivamus quis dapibus lorem, a volutpat lacus. Sed et lacus turpis. Vivamus ut sem ex. Maecenas scelerisque leo dui, sit amet eleifend eros consequat vel. Morbi vel posuere nunc. Sed ligula quam, ornare ac leo eu, faucibus suscipit lacus. Maecenas quis interdum odio. Nullam lacinia consequat. </p>
            </div>
          </div>
          <div className = "row about-subsection ">
            <div className = " homepage-about-text offset-1 col-md-4 offset-md-1 col-md-5">
              <h2>Connect with Leading Experts</h2>
              <p> Proin aliquam, odio ut lacinia tempor, ex nisi fermentum lacus, eu auctor dolor magna et nibh. Nulla facilisi. Vivamus et massa enim. Morbi luctus nunc non fringilla lacinia. Cras condimentum rhoncus bibendum. Vivamus quis dapibus lorem, a volutpat lacus. Sed et lacus turpis. Vivamus ut sem ex. Maecenas scelerisque leo dui, sit amet eleifend eros consequat vel. Morbi vel posuere nunc. Sed ligula quam, ornare ac leo eu, faucibus suscipit lacus. Maecenas quis interdum odio. Nullam lacinia consequat. </p>
            </div>
            <div className = "offset-3 offset-md-1" >
              <img
              className = "homepage-about-image"
              alt = "hand-shake"
              src = "https://images.unsplash.com/photo-1519120126473-8be7aedcd6c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a55332dfc236b13f118ef77a36b4052f&auto=format&fit=crop&w=1050&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage
