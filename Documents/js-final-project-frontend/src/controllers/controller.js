let storage = {
  origin: null,
  destination: null
}
const originInput = $("#origin-input")[0]
const destinationInput =$("#destination-input")[0]
const tripInfoContainer= $(".trip-information-container")[0]
const loginButton = $("#login-button")[0]
const clearSelectionButton = $("#clear-selection")[0]

class Controller {

  static init() {
    console.log("Controller initialized")
    Controller.addStationListeners()
    loginButton.addEventListener("click",SessionController.displayModal)
    clearSelectionButton.addEventListener("click", Controller.clearSelection)
  }

    static addStationListeners() {

      $(".stop").toArray().forEach(function(stopDiv){
        stopDiv.addEventListener("click", Controller.handleRouting)

    })
  }

  static handleRouting(e) {
    if(storage.origin === null) {
      // If no point has been selected
      storage.origin = e.currentTarget.dataset.id.split(" ")[0]
      Controller.fillFormOrigin(e.currentTarget.id)
      e.currentTarget.style.backgroundColor = 'red'
      e.currentTarget.style.height = "1.5vw"
      e.currentTarget.style.width = "1.5vw"
    } else if (storage.origin === e.currentTarget.dataset.id.split(" ")[0]){
      // If the same point is reselected
      originInput.value = ""
      storage.origin = null
      e.currentTarget.style.backgroundColor = 'white'
      e.currentTarget.style.height = "1.2vw"
      e.currentTarget.style.width = "1.2vw"
    } else if(storage.origin) {
      // If a point has been selected and a second point is selected
      Controller.fillFormDestination(e.currentTarget.id)
      storage.destination = e.currentTarget.dataset.id.split(" ")[0]
      e.currentTarget.style.backgroundColor = 'red'
      e.currentTarget.style.height = "1.5vw"
      e.currentTarget.style.width = "1.5vw"
      Adapter.getRoute({destination: storage.destination, origin: storage.origin})
      .then(function(data) {
        console.log(data)
        Controller.displayTripInformation(data)

      })

    }
  }

 static displayTripInformation(tripData){
   clearElementChildren(tripInfoContainer)
   let railTime = tripData.StationToStationInfos[0].RailTime;
   let peakFare = tripData.StationToStationInfos[0].RailFare.PeakTime;
   let offPeak =tripData.StationToStationInfos[0].RailFare.OffPeakTime;
   let seniorDisabled = tripData.StationToStationInfos[0].RailFare.SeniorDisabled;
   let div = document.createElement("div")
   div.innerHTML = `<ul class = "trip-information-list">
           <li class = "row trip-info-row">
             <div class=  "trip-info-header">Rail Time:</div>
             <div id = 'railTime' class = "offset-6">${railTime} Mins.</div>
           </li>
           <li class = "row trip-info-row">
             <div class=  "trip-info-header">Peak Time:</div>
             <div id = 'PeakTime' class = "offset-6">$${peakFare}</div>
           </li>
           <li class = "row trip-info-row">
             <div class=  "trip-info-header">Off Peak:</div>
             <div id = 'OffPeak' class = "offset-7">$${offPeak}</div>
           </li>
           <li class = "row trip-info-row">
             <div class=  "trip-info-header">Senior/Disable</div>
             <div id = 'Senior'class = "offset-5">$${seniorDisabled}</div>
           </li>
         </ul>`
   tripInfoContainer.appendChild(div)
   // if there is a user currently logged in give option to save route
   if (currentUser){
     let btn = document.createElement("btn")
     btn.classList = "btn btn-primary offset-4"
     btn.innerText = 'Save Route'
     btn.id = "save-route"
     tripInfoContainer.appendChild(btn)
     btn.addEventListener("click", Controller.displayCreateRouteForm)
   }

 }

 static displayCreateRouteForm(e){
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
     form.addEventListener("submit", Controller.handleTripCreation)
     document.addEventListener("click", closeModal)
 }

  static fillFormOrigin(stopId){
    let stopName = stopId.split("-").map(word=>capitalize(word)).join(" ")
    originInput.value = stopName;
  }

  static fillFormDestination(stopId){
    let stopName = stopId.split("-").map(word=>capitalize(word)).join(" ")
    destinationInput.value = stopName;
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

  static clearSelection(e){
    let originId = originInput.value.split(" ").map(word=>word.toLowerCase()).join("-")
    let destinationId = destinationInput.value.split(" ").map(word=>word.toLowerCase()).join("-")
    originInput.value = ""
    destinationInput.value = ""
    storage.origin = null
    storage.destination = null
    $(`#${originId}`)[0].style.backgroundColor = 'white'
    $(`#${originId}`)[0].style.height = "1.2vw"
    $(`#${originId}`)[0].style.width = "1.2vw"
    $(`#${destinationId}`)[0].style.backgroundColor = 'white'
    $(`#${destinationId}`)[0].style.height = "1.2vw"
    $(`#${destinationId}`)[0].style.width = "1.2vw"
    clearElementChildren(tripInfoContainer)

  }

}
