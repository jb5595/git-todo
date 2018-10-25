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

function repositionElements(){
  if ($(window).width()< 1100){
    let elementOffset = (1100-$(window).width())/3
    $("body")[0].style.top = `${elementOffset}px`;
    $(".main")[0].marginTop = `${elementOffset}px`;
    $(".trip-form-container")[0].style.top = `${elementOffset*.2 + 145}px`
    $(".trip-information-container")[0].style.top = `${elementOffset*.2 + 200}px`
    if($(window).width()< 800){
      $(".trip-form-container")[0].style.top = `${elementOffset*.2 + 80}px`
      $(".trip-information-container")[0].style.top = `${elementOffset*.2 + 140}px`
    }
  }
  else{
    $("body")[0].style.top = "0px"
    $(".main")[0].marginTop = "0px"
    $(".trip-form-container")[0].style.top = `${145}px`
    $(".trip-information-container")[0].style.top = `${200}px`

  }
}
