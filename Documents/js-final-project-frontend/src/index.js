$( document ).ready(function(func){
  Controller.init()
})

function capitalize(s){
    return s[0].toUpperCase() + s.slice(1);
}

function clearElementChildren(element){
  while (element.firstChild) {
    element.firstChild.remove()
  }
}

function closeModal(e){
    if (e.target == loginModal) {
        loginModal.style.display = "none";
    }
}
