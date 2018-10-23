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
