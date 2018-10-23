let storage = {
  origin: null,
  destination: null
}

const originInput = $("#origin-input")[0]
const destinationInput =$("#destination-input")[0]
const tripInfoContainer= $(".trip-information-container")[0]
const loginButton = $("#login-button")[0]

class Controller {

  static init() {
    console.log("Controller initialized")
    Controller.addStationListeners()
    loginButton.addEventListener("click",ModalController.displayModal)
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
    } else if (storage.origin === e.currentTarget.dataset.id.split(" ")[0]){
      // If the same point is reselected
      originInput.value = ""
      storage.origin = null
    } else if(storage.origin) {
      // If a point has been selected and a second point is selected
      Controller.fillFormDestination(e.currentTarget.id)
      storage.destination = e.currentTarget.dataset.id.split(" ")[0]
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
   debugger
   let div = document.createElement("div")
   div.innerHTML = `<ul class = "trip-information-list">
           <li class = "row trip-info-row">
             <div class=  "trip-info-header">Rail Time:</div>
             <div id = 'railTime' class = "offset-4">${railTime} Mins.</div>
           </li>
           <li class = "row trip-info-row">
             <div class=  "trip-info-header">Peak Time:</div>
             <div id = 'PeakTime' class = "offset-5">$${peakFare}</div>
           </li>
           <li class = "row trip-info-row">
             <div class=  "trip-info-header">Off Peak:</div>
             <div id = 'OffPeak' class = "offset-5">$${offPeak}</div>
           </li>
           <li class = "row trip-info-row">
             <div class=  "trip-info-header">Senior<div>
             <div id = 'Senior'class = "offset-4">$${seniorDisabled}</div>
           </li>
         </ul>`

  tripInfoContainer.appendChild(div)

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
    // const origin = storage.origin
    // const destination = storage.destination
    // const user_id = (get the user id from somewhere)
    Adapter.postTrip({origin: origin, destination: destinatino, user_id: user_id})
      .then(
        // alert the user that the trip has been created
        // re-render their trips div?
      )
  }

}
