const createUserButtonOnModal = $("create-user-button-on-modal")[0]
const loginModal = $("#login-modal")[0]
const loginModalContentDiv = $(".login-modal-content")[0]
const closeButton = $(".close")[0]
let currentUser = null;

class SessionController{
  static displayModal(e){
    clearElementChildren(loginModalContentDiv)
    loginModal.style.display = "block"
    let div = document.createElement("div")
    div.classList = "text-center"
    div.innerHTML = `<h6>Existing User?</h6>
                    <button type="button" class = "btn btn-primary" id = "login-button-on-modal" name="button">Login</button>
                    <br> <br>
                    <h6>New User?</h6>
                    <button type="button" class = "btn btn-primary" id = "create-user-button-on-modal" name="button">Create User</button>`
    loginModalContentDiv.appendChild(div)
    document.addEventListener("click", closeModal)

    $("#login-button-on-modal")[0].addEventListener("click",SessionController.displayLoginForm)
    $("#create-user-button-on-modal")[0].addEventListener("click",SessionController.displayCreateUserForm)

  }

  static displayLoginForm(e){
    clearElementChildren(loginModalContentDiv)
    let form = document.createElement("form")
    form.innerHTML =`<div class="form-group">
                        <label for="emails">Email address</label>
                        <input type="email" class="form-control" id="login-email" placeholder="Enter email">
                      </div>
                      <input type="submit" class= "btn btn-primary" name="" value="Login">`
    loginModalContentDiv.appendChild(form)
    form.addEventListener("submit", SessionController.login)
  }

  static login(e){
    e.preventDefault()
    let email = $('#login-email')[0].value
    Adapter.getUser(email)
      .then(function(userData){
        if(userData) {
          SessionController.successfulLogin(userData)
        }
      }
    )
  }

  static successfulLogin(userData) {
    TripController.displayMyRoutesButton
    currentUser = new User(userData);
    loginModalContentDiv.innerText = "Welcome to MetroRider. You are now logged in.";
    const continueButton = document.createElement('button');
    continueButton.innerText = "Continue";
    continueButton.classList.add('btn');
    continueButton.addEventListener('click', SessionController.handleContinue);
    loginModalContentDiv.append(continueButton);
    loginButton.innerText = "Logout";
    loginButton.removeEventListener('click', SessionController.displayModal)
    loginButton.addEventListener('click', SessionController.handleLogout);
  }

  static handleLogout(e) {
    currentUser = null;
    loginButton.innerText = "Login";
    loginButton.addEventListener('click', SessionController.displayModal)
  }

  static handleContinue(e) {
    loginModal.style.display = "none";
>>>>>>> cf50b9c09238877c90a111e848813fc611bf8be9
  }

  static displayCreateUserForm(e){
    clearElementChildren(loginModalContentDiv)
    let form = document.createElement("form")
    form.innerHTML =`<div class="form-group">
                        <label for="emails">Email address</label>
                        <input type="email" class="form-control" id="create-user-email" placeholder="Enter email">
                      </div>
                      <input type="submit" class= "btn btn-primary" name="" value="Create User">`
    loginModalContentDiv.appendChild(form)
    form.addEventListener("submit", SessionController.createUser)
  }

  static createUser(e){
    e.preventDefault()
    let email = $('#create-user-email')[0].value
    Adapter.postUser(email).then(function(userData){
      currentUser = new User(userData)
      loginModal.style.display = "none";
      TripController.displayMyRoutesButton

    })
  }

}
