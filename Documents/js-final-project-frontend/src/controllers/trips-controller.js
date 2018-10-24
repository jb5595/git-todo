const tripInfoModal =  $("#tripInfoModal")[0]

class TripController{

  static displayMyRoutesButton(){
    $(".map-container")[0].style.marginBottom =  "18.5%";
    $("#trip-info-button")[0].style.display = "block"

  }
  static displayTrips(e){
    tripInfoModal.style.display = "block"
    document.addEventListener("click",TripController.closeModal)
  }

  static closeModal(e){
      if (e.target == tripInfoModal) {
          tripInfoModal.style.display = "none";
      }
  }

  static displayCreateTripForm(e){
     let origin = $("#origin-input")[0].value
     let destination =$("#destination-input")[0].value
     clearElementChildren(loginModalContentDiv)
      loginModal.style.display = "block"
      let form = document.createElement("form")
      form.innerHTML = `<div class="form-group">
                          <label for="emails">Route Name</label>
                          <input type="text" class="form-control" id = "new-route-name">
                        </div>
                           <div class="form-group">
                          <label for="emails">Origin</label>
                          <input type="text" class="form-control" value = "${origin}" id = "new-route-origin" readonly>
                        </div>
                        <div class="form-group">
                            <label for="emails">Destination</label>
                            <input type="text" class="form-control" value = "${destination}"  id = "new-route-destination" readonly>
                        </div>
                        <input type="submit" class="form-control btn btn-primary" value = "Create Route">`
      loginModalContentDiv.appendChild(form)
      form.addEventListener("submit", TripController.handleTripCreation)
      document.addEventListener("click", closeModal)
  }


  static handleTripCreation(e) {
    e.preventDefault()
    const name = $("#new-route-name")[0].value
    const origin =$("#new-route-origin")[0].value
    const originCode = storage.origin
    const destination =$("#new-route-destination")[0].value
    const destinationCode = storage.destination
    const user_id = currentUser.id
    Adapter.postTrip({name: name, origin: origin, originCode: originCode, destination: destination, destinationCode: destinationCode, user_id: user_id})
      .then(
        // alert the user that the trip has been created
        // re-render their trips div?
      )
  }
}
