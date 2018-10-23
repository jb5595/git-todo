const createUserButtonOnModal = $("create-user-button-on-modal")[0]
const loginModal = $("#login-modal")[0]
const loginModalContentDiv = $(".login-modal-content")[0]
const closeButton = $(".close")[0]


class ModalController{
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
    document.addEventListener("click", ModalController.closeModal)

    $("#login-button-on-modal")[0].addEventListener("click",ModalController.displayLoginForm)
    $("#create-user-button-on-modal")[0].addEventListener("click",ModalController.displayCreateUserForm)

  }


  static displayLoginForm(e){
    clearElementChildren(loginModalContentDiv)
    let form = document.createElement("form")
    form.innerHTML =`<div class="form-group">
                        <label for="emails">Email address</label>
                        <input type="email" class="form-control" id="login-email" placeholder="Enter email">
                      </div>
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="login-password" placeholder="Password">
                      </div>
                      <input type="submit" class= "btn btn-primary" name="" value="Login">`
    loginModalContentDiv.appendChild(form)
    form.addEventListener("submit", ModalController.login)
  }

  static login(e){
    e.preventDefault()
    let email = $('#login-email')[0].value
    let password = $('#login-password')[0].value
    debugger
  }

  static displayCreateUserForm(e){
    clearElementChildren(loginModalContentDiv)
    let form = document.createElement("form")
    form.innerHTML =`<div class="form-group">
                        <label for="emails">Email address</label>
                        <input type="email" class="form-control" id="create-user-email" placeholder="Enter email">
                      </div>
                      <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="create-user-password" placeholder="Password">
                      </div>
                      <input type="submit" class= "btn btn-primary" name="" value="Create User">`
    loginModalContentDiv.appendChild(form)
    form.addEventListener("submit", ModalController.createUser)
  }

  static createUser(e){
    e.preventDefault()
    let email = $('#create-user-email')[0].value
    let password = $('#create-user-password')[0].value
    debugger
  }


  static closeModal(e){
      if (e.target == loginModal) {
          loginModal.style.display = "none";
      }
  }


}
